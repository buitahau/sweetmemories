import { createFileRoute } from '@tanstack/react-router';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { getAuth } from '#/lib/auth';
import { getDb } from '#/db/index';
import { image, catalogue } from '#/db/schema';
import { eq, desc } from 'drizzle-orm';

export const Route = createFileRoute('/api/images')({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
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

    const url = new URL(request.url);
    const cursor = url.searchParams.get('cursor');
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);

    const db = getDb();
    const userId = session.user.id;

    // Get default catalogue
    const defaultCat = await db.query.catalogue.findFirst({
      where: (cat) => eq(cat.userId, userId) && eq(cat.isDefault, true),
    });

    if (!defaultCat) {
      return new Response(
        JSON.stringify({
          images: [],
          nextCursor: null,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // Build query
    let query = db
      .select()
      .from(image)
      .where(eq(image.catalogueId, defaultCat.id))
      .orderBy(desc(image.createdAt))
      .limit(limit + 1);

    // Apply cursor if provided
    if (cursor) {
      const decodedCursor = Buffer.from(cursor, 'base64').toString('utf-8');
      const [cursorId, cursorDate] = decodedCursor.split(':');
      // In production, use proper cursor pagination with comparison operators
    }

    const images = await query;

    const hasMore = images.length > limit;
    const result = images.slice(0, limit);

    let nextCursor = null;
    if (hasMore && result.length > 0) {
      const lastImage = result[result.length - 1];
      nextCursor = Buffer.from(`${lastImage.id}:${lastImage.createdAt.getTime()}`).toString(
        'base64',
      );
    }

    return new Response(
      JSON.stringify({
        images: result,
        nextCursor,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('List images error:', error);
    return new Response(JSON.stringify({ error: 'Failed to list images' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
      },
    },
  },
})
