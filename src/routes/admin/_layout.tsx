import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { AdminSidebar } from '../../components/layout/AdminSidebar'
import { getUser } from '../../lib/api'

export const Route = createFileRoute('/admin/_layout')({
  component: AdminLayout,
})

function AdminLayout() {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  })

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <AdminSidebar user={user} />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
