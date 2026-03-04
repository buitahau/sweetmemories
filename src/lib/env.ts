// Environment variable access for Cloudflare Workers
// With nodejs_compat enabled in wrangler.toml, environment variables
// from [vars] and secrets are available via process.env

export function getEnvVar(key: string): string | undefined {
  return process.env[key];
}

export function requireEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Required environment variable ${key} is not set`);
  }
  return value;
}
