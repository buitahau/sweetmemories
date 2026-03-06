import { getEnvVar } from './env';
import { env } from 'cloudflare:workers';

export function getR2Bucket(): R2Bucket {
  return env.R2_BUCKET;
}

export async function ensureUserFolder(bucket: R2Bucket, userId: string): Promise<void> {
  const folderMarker = `${userId}/.keep`;
  const existing = await bucket.get(folderMarker);

  if (!existing) {
    await bucket.put(folderMarker, new ArrayBuffer(0));
  }
}

export async function uploadToR2(
  bucket: R2Bucket,
  key: string,
  data: ArrayBuffer | Uint8Array,
  contentType: string,
): Promise<string> {
  await bucket.put(key, data, {
    httpMetadata: {
      contentType,
    },
  });

  return `https://${getEnvVar('R2_ACCOUNT_ID')}.r2.cloudflarestorage.com/${key}`;
}

export function generateR2PublicUrl(key: string): string {
  const customDomain = getEnvVar('R2_CUSTOM_DOMAIN');
  if (customDomain) {
    return `${customDomain}/${key}`;
  }

  const accountId = getEnvVar('R2_ACCOUNT_ID');
  return `https://${accountId}.r2.cloudflarestorage.com/${key}`;
}

export function generateThumbnailKey(originalKey: string): string {
  const parts = originalKey.split('.');
  const ext = parts.pop();
  return `${parts.join('.')}-thumb.${ext}`;
}
