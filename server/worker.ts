import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './db/schema'

type Env = {
  DATABASE_URL: string
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  BETTER_AUTH_SECRET: string
  CLIENT_ORIGIN: string
}

const app = new Hono<{ Bindings: Env }>()

app.use('/api/auth/*', async (c, next) => {
  return cors({
    origin: c.env.CLIENT_ORIGIN,
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })(c, next)
})

app.on(['GET', 'POST'], '/api/auth/*', async (c) => {
  const sql = neon(c.env.DATABASE_URL)
  const db = drizzle(sql, { schema })
  const auth = betterAuth({
    database: drizzleAdapter(db, {
      provider: 'pg',
      schema: {
        user: schema.user,
        session: schema.session,
        account: schema.account,
        verification: schema.verification,
      },
    }),
    secret: c.env.BETTER_AUTH_SECRET,
    socialProviders: {
      google: {
        clientId: c.env.GOOGLE_CLIENT_ID,
        clientSecret: c.env.GOOGLE_CLIENT_SECRET,
      },
    },
    trustedOrigins: [c.env.CLIENT_ORIGIN],
  })
  return auth.handler(c.req.raw)
})

export default app
