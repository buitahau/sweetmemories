import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { getAuth } from './auth'

export const getServerSession = createServerFn({ method: 'GET' }).handler(async () => {
  return getAuth().api.getSession({
    headers: getRequestHeaders(),
  })
})
