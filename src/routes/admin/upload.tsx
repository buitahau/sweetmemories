import { createFileRoute, redirect } from '@tanstack/react-router'
import { authClient } from '../../lib/auth-client'
import { Header } from '../../components/layout/Header'
import { Sidebar } from '../../components/layout/Sidebar'

export const Route = createFileRoute('/admin/upload')({
  loader: async () => {
    const session = await authClient.getSession()
    if (!session.data) {
      throw redirect({ to: '/login' })
    }
    return { session: session.data }
  },
  component: UploadPage,
})

function UploadPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header variant="admin" />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
            <section>
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-3xl font-black tracking-tight">Upload Memories</h2>
                <p className="text-slate-500">Add new photos and stories to your memory archive.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border border-dashed border-primary/30 text-center space-y-6">
                <div className="bg-primary/10 text-primary p-4 rounded-full w-fit mx-auto">
                  <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                </div>
                <p className="text-slate-500">Drag &amp; drop files or browse to add them to your albums.</p>
                <button className="bg-primary text-white px-6 py-2 rounded-xl font-bold hover:bg-primary/90 transition-colors">Browse Files</button>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-primary/5">
                <p className="text-sm text-slate-500 uppercase tracking-wide">Storage Usage</p>
                <p className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-2">68 / 100 GB</p>
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '68%' }} />
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-primary/5">
                <p className="text-sm text-slate-500 uppercase tracking-wide">Last Upload</p>
                <p className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-2">2 hrs ago</p>
                <p className="text-sm text-slate-500 mt-1">Uploaded by you</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
