import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { getAuth } from './auth'
import { ensureUserFolder, getR2Bucket } from './r2'

export const getServerSession = createServerFn({ method: 'GET' }).handler(async () => {
  const session = await getAuth().api.getSession({
    headers: getRequestHeaders(),
  })

  if (session?.user?.id) {
    try {
      const bucket = getR2Bucket()
      console.log(bucket)
      await ensureUserFolder(bucket, session.user.id)
    } catch (error) {
      console.error('R2 bucket not available:', error)
    }
  }

  return session
})
