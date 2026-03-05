import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/layout/Header'
import { Sidebar } from '../../components/layout/Sidebar'
import { authClient } from '../../lib/auth-client'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

function DashboardPage() {
  const { data: session } = authClient.useSession()
  const username = session?.user?.name || 'User'

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header variant="admin" />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
            <section>
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-3xl font-black tracking-tight">Welcome back, {username}!</h2>
                <p className="text-slate-500">Capture and organize your most precious moments today.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed border-primary/30 p-12 flex flex-col items-center justify-center text-center group hover:border-primary transition-colors cursor-pointer">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Memories</h3>
                <p className="text-slate-500 max-w-sm mb-6">Drag and drop your photos here, or click to browse your computer.</p>
                <button className="bg-primary/20 text-slate-900 dark:text-slate-100 px-6 py-2 rounded-lg font-bold hover:bg-primary transition-colors">
                  Select Files
                </button>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-primary/5 flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-3 rounded-lg">
                  <span className="material-symbols-outlined">photo_library</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Memories</p>
                  <p className="text-2xl font-black">42 Photos Uploaded</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-primary/5 flex items-center gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-3 rounded-lg">
                  <span className="material-symbols-outlined">history</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Recent Activity</p>
                  <p className="text-2xl font-black">Last Update: 2 hours ago</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold tracking-tight">Manage Categories</h3>
                <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-sm">add</span>
                  New Category
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <CategoryCard
                  title="Baby"
                  photos="12 Photos"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAqmU7Cv4bjTI5SQ1NHeBxOrmd3XdrR95aXLKqlS4pQwcdNhUd0551jYchPVsZodBiz7HWuLJlIV69MXwMTpm7oIdEJ4bkZKCzf7N4G-hpspaoDfCN-QlZMAWrQJ1DzaBZL8pTzjRAD67uw9ip5kbadTxJWCc2yc7SdXZ9ZrwMC4uvRMurSeFbPIuU2dyAHLs6hJRH5nAuq4EVxCZDYZ3aMn3nBJnG4qkDfim_cvw4uUSS3GasJ0_OKWmJXp3wUXFUesf-bw0Huhu-7"
                />
                <CategoryCard
                  title="School"
                  photos="8 Photos"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuColTk9xJT1yb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6_329fW7gr7_UKe25Tp99CfiY31ynVb6__"
                />
                <CategoryCard
                  title="Vacation"
                  photos="22 Photos"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuCPQfQpZCvqdi6uGlzlOyEt373gC80oRHAPgaIq864HpiS4pmhjA4ClruBLM8JYi7x8BvhA3JEJHWMB7nhACEfKLJ1QeaY9ONmqSnAAeCzXfBkgjmY4zJR1O7wck08ozqKZCEog7aYminxSsXAPRdDyjhKfjufv-L936q0BMl4dqAfEZRlYVtZ46k6XHypNJOsOMpNxO2pDxuvPVVSrm4IFamQNbaNaXTl0W2W1__QTbloxibMQuMTOhwPBV5SrMZX5_0t85CrfDko"
                />
              </div>
            </section>

            <section className="pb-12">
              <div className="bg-primary/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/10">
                <div className="space-y-1 text-center md:text-left">
                  <h4 className="font-bold text-lg">Need help with your layouts?</h4>
                  <p className="text-slate-500 text-sm">Our guides can help you create the perfect memory book structure.</p>
                </div>
                <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-2 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                  Read Guides
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

type CategoryCardProps = {
  title: string
  photos: string
  image: string
}

function CategoryCard({ title, photos, image }: CategoryCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-primary/5 group">
      <div className="h-32 bg-slate-200 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-3 left-4 text-white font-bold">{title}</span>
      </div>
      <div className="p-4 flex items-center justify-between">
        <span className="text-sm text-slate-500">{photos}</span>
        <button className="p-2 hover:bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined text-slate-400">more_vert</span>
        </button>
      </div>
    </div>
  )
}
