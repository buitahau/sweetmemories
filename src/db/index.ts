import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import { requireEnvVar } from '#/lib/env';

let db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!db) {
    const databaseUrl = requireEnvVar('DATABASE_URL');
    const sql = neon(databaseUrl);
    db = drizzle(sql, { schema });
  }
  return db;
}
