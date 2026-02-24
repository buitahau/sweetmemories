import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { AdminSidebar } from '../../components/layout/AdminSidebar'
import { AdminHeader } from '../../components/layout/AdminHeader'
import { UploadDropzone } from '../../features/admin/dashboard/UploadDropzone'
import { StatsGrid } from '../../features/admin/dashboard/StatsGrid'
import { CategoryCard } from '../../features/admin/dashboard/CategoryCard'
import { Icon } from '../../components/ui/Icon'
import { getDashboardStats, getCategories, getUser } from '../../lib/api'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser })

  const { data: stats } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: getDashboardStats,
  })

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  const previewCategories = categories.slice(0, 3)

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <AdminSidebar user={user} />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <AdminHeader title="Dashboard" />

        <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
          <section>
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="text-3xl font-black tracking-tight">Welcome back, Alex!</h2>
              <p className="text-slate-500">
                Capture and organize your most precious moments today.
              </p>
            </div>
            <UploadDropzone />
          </section>

          {stats && <StatsGrid stats={stats} />}

          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold tracking-tight">Manage Categories</h3>
              <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                <Icon name="add" className="text-sm" />
                New Category
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {previewCategories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </section>

          <section className="pb-12">
            <div className="bg-primary/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/10">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-bold text-lg">Need help with your layouts?</h4>
                <p className="text-slate-500 text-sm">
                  Our guides can help you create the perfect memory book structure.
                </p>
              </div>
              <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-2 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                Read Guides
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
