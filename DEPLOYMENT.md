# Cloudflare Workers Deployment Guide

## Prerequisites

1. Cloudflare account with Workers enabled
2. Wrangler CLI installed (already in devDependencies)
3. Neon Database account (for PostgreSQL)

## Setup Steps

### 1. Configure Neon Database

Your app uses `@neondatabase/serverless` which is compatible with Cloudflare Workers.

1. Create a database at [neon.tech](https://neon.tech)
2. Copy the connection string (use the pooled connection for Workers)

### 2. Set Environment Variables

Add secrets to Cloudflare Workers:

```bash
# Required secrets
wrangler secret put DATABASE_URL
wrangler secret put BETTER_AUTH_SECRET
wrangler secret put BETTER_AUTH_URL

# Optional: Google OAuth
wrangler secret put GOOGLE_CLIENT_ID
wrangler secret put GOOGLE_CLIENT_SECRET
```

Generate a secure secret for BETTER_AUTH_SECRET:
```bash
openssl rand -base64 32
```

### 3. Update wrangler.toml

Edit `wrangler.toml` and update:
- `name`: Your app name (will be your-app.workers.dev)
- Add any additional configuration as needed

### 4. Build and Deploy

```bash
# Build the application
npm run build

# Deploy to Cloudflare Workers
npm run deploy

# Or preview deployment without publishing
npm run deploy:preview
```

### 5. Run Database Migrations

After deployment, run migrations against your Neon database:

```bash
npm run db:push
```

## Local Development with Cloudflare

Test with Cloudflare Workers environment locally:

```bash
npm run cf:dev
```

Or use standard Vite dev server:

```bash
npm run dev
```

## Environment Variables

Set these in Cloudflare dashboard or via wrangler CLI:

- `DATABASE_URL`: Neon PostgreSQL connection string
- `BETTER_AUTH_SECRET`: Random secret for auth
- `BETTER_AUTH_URL`: Your Workers URL (e.g., https://your-app.workers.dev)
- `CLIENT_ORIGIN`: Same as BETTER_AUTH_URL
- `GOOGLE_CLIENT_ID`: (Optional) Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: (Optional) Google OAuth client secret

## Troubleshooting

### Database Connection Issues

Ensure you're using the Neon serverless driver connection string (not the standard PostgreSQL one). It should work with Cloudflare Workers' fetch-based runtime.

### Build Errors

If you encounter build errors, ensure all dependencies are compatible with Workers runtime. The `nodejs_compat` flag is enabled in wrangler.toml for Node.js compatibility.

### Authentication Issues

Make sure `BETTER_AUTH_URL` matches your actual Workers URL and is set correctly in both the Cloudflare dashboard and your OAuth provider settings.

## Custom Domain

To use a custom domain:

1. Add domain in Cloudflare dashboard
2. Update `wrangler.toml`:
```toml
routes = [
  { pattern = "yourdomain.com", custom_domain = true }
]
```
3. Update `BETTER_AUTH_URL` and `CLIENT_ORIGIN` to use your custom domain
