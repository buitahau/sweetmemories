import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { getServerSession } from '../lib/auth-guard'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async () => {
    const session = await getServerSession()

    if (!session) {
      throw redirect({ to: '/login' })
    }

    return { session }
  },
  component: Outlet,
})
