import { createFileRoute, redirect } from '@tanstack/react-router'
import { authClient } from '../../lib/auth-client'
import { Header } from '../../components/layout/Header'
import { Sidebar } from '../../components/layout/Sidebar'

export const Route = createFileRoute('/admin/templates')({
  loader: async () => {
    const session = await authClient.getSession()
    if (!session.data) {
      throw redirect({ to: '/login' })
    }
    return { session: session.data }
  },
  component: TemplatesPage,
})

function TemplatesPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header variant="admin" />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
            <section>
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-3xl font-black tracking-tight">Memory Book Templates</h2>
                <p className="text-slate-500">Choose from professionally designed templates to create your memory book.</p>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TemplateCard
                title="Classic Album"
                description="Timeless design with elegant typography"
                icon="photo_album"
                color="bg-blue-100 dark:bg-blue-900/30 text-blue-600"
              />
              <TemplateCard
                title="Modern Gallery"
                description="Contemporary layout with bold visuals"
                icon="collections"
                color="bg-purple-100 dark:bg-purple-900/30 text-purple-600"
              />
              <TemplateCard
                title="Timeline Story"
                description="Chronological narrative with milestones"
                icon="timeline"
                color="bg-green-100 dark:bg-green-900/30 text-green-600"
              />
              <TemplateCard
                title="Family Tree"
                description="Multi-generational family connections"
                icon="account_tree"
                color="bg-orange-100 dark:bg-orange-900/30 text-orange-600"
              />
              <TemplateCard
                title="Minimalist"
                description="Clean and simple with focus on photos"
                icon="dashboard"
                color="bg-slate-100 dark:bg-slate-900/30 text-slate-600"
              />
              <TemplateCard
                title="Scrapbook"
                description="Creative collage-style arrangement"
                icon="grid_on"
                color="bg-pink-100 dark:bg-pink-900/30 text-pink-600"
              />
            </section>

            <section className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-lg font-bold mb-2">Custom Templates</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Want to create your own template? Start from scratch with our template builder.</p>
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                Create Custom Template
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

type TemplateCardProps = {
  title: string
  description: string
  icon: string
  color: string
}

function TemplateCard({ title, description, icon, color }: TemplateCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-primary/5 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
      <div className={`${color} p-4 rounded-lg mb-4 w-fit group-hover:scale-110 transition-transform`}>
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <button className="text-primary font-semibold text-sm hover:underline">
        Use Template
      </button>
    </div>
  )
}
