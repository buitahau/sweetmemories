import { createFileRoute } from '@tanstack/react-router';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { getAuth } from '#/lib/auth';
import { getDb } from '#/db/index';
import { catalogue, image } from '#/db/schema';
import { and, eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';
import { ensureUserFolder, generateR2PublicUrl, getR2Bucket } from '#/lib/r2';

const ALLOWED_TYPES = ['image/jpeg', 'image/png'];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const Route = createFileRoute('/api/upload')({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
  try {
    const session = await getAuth().api.getSession({
      headers: getRequestHeaders(),
    });

    if (!session?.user?.id) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(
        JSON.stringify({ error: 'Only JPG and PNG files are allowed' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return new Response(
        JSON.stringify({ error: 'File size exceeds 50MB limit' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const db = getDb();
    const userId = session.user.id;

    // Get or create default catalogue
    let defaultCatalogue = await db.query.catalogue.findFirst({
      where: (cat) => eq(cat.userId, userId) && eq(cat.isDefault, true),
    });

    if (!defaultCatalogue) {
      const catalogueId = nanoid();
      const now = new Date();
      await db.insert(catalogue).values({
        id: catalogueId,
        userId,
        name: 'Default',
        isDefault: true,
        description: null,
        createdAt: now,
        updatedAt: now,
      });
      defaultCatalogue = await db.query.catalogue.findFirst({
        where: (cat) => eq(cat.id, catalogueId),
      });
    }

    if (!defaultCatalogue) {
      return new Response(JSON.stringify({ error: 'Failed to create catalogue' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Upload to R2
    const bucket = getR2Bucket();

    // Ensure user folder exists in R2
    await ensureUserFolder(bucket, userId);

    const fileId = nanoid();
    const ext = file.name.split('.').pop() || 'jpg';
    const originalKey = `${userId}/images/${fileId}/original.${ext}`;
    const thumbnailKey = `${userId}/images/${fileId}/thumb.${ext}`;

    const buffer = await file.arrayBuffer();

    // Upload original
    await bucket.put(originalKey, buffer, {
      httpMetadata: { contentType: file.type },
    });

    // Create thumbnail (simplified: just upload same for now, in production use image processing)
    await bucket.put(thumbnailKey, buffer, {
      httpMetadata: { contentType: file.type },
    });

    const originalUrl = generateR2PublicUrl(originalKey);
    const thumbnailUrl = generateR2PublicUrl(thumbnailKey);

    // Insert into database
    const imageId = nanoid();
    await db.insert(image).values({
      id: imageId,
      catalogueId: defaultCatalogue.id,
      userId,
      originalUrl,
      thumbnail: thumbnailUrl,
      fileName: file.name,
      fileSize: file.size.toString(),
      mimeType: file.type,
    });

    return new Response(
      JSON.stringify({
        success: true,
        image: {
          id: imageId,
          originalUrl,
          thumbnail: thumbnailUrl,
          fileName: file.name,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
      },
    },
  },
})
