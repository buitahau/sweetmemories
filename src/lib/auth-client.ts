import { createAuthClient } from 'better-auth/react'

const baseURL =
  typeof window !== 'undefined' ? `${window.location.origin}/api/auth` : undefined

export const authClient = createAuthClient({
  ...(baseURL ? { baseURL } : {}),
})
