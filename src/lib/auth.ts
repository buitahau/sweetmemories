import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import { getDb } from '#/db/index'
import * as schema from '#/db/schema'
import { getEnvVar, requireEnvVar } from '#/lib/env'

let auth: any = null

export function getAuth() {
  if (!auth) {
    const baseURL = requireEnvVar('BETTER_AUTH_URL')

    const trustedOrigins = [
      getEnvVar('CLIENT_ORIGIN'),
      baseURL,
      'http://localhost:3000',
      'http://127.0.0.1:3000',
    ].filter((origin): origin is string => Boolean(origin))

    auth = betterAuth({
      baseURL,
      trustedOrigins,
      database: drizzleAdapter(getDb(), {
        provider: 'pg',
        schema,
      }),
      emailAndPassword: {
        enabled: true,
      },
      socialProviders: {
        google: {
          clientId: getEnvVar('GOOGLE_CLIENT_ID') || '',
          clientSecret: getEnvVar('GOOGLE_CLIENT_SECRET') || '',
        },
      },
      plugins: [tanstackStartCookies()],
    })
  }
  return auth
}
