import { createFileRoute, redirect } from '@tanstack/react-router'
import { authClient } from '../../lib/auth-client'
import { Header } from '../../components/layout/Header'
import { Sidebar } from '../../components/layout/Sidebar'

export const Route = createFileRoute('/admin/settings')({
  loader: async () => {
    const session = await authClient.getSession()
    if (!session.data) {
      throw redirect({ to: '/login' })
    }
    return { session: session.data }
  },
  component: SettingsPage,
})

function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header variant="admin" />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
            <section>
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-3xl font-black tracking-tight">Account Settings</h2>
                <p className="text-slate-500">Manage access controls, notifications, and preferences.</p>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-primary/5 shadow-sm">
                <h3 className="text-lg font-bold mb-2">Profile</h3>
                <p className="text-sm text-slate-500 mb-4">Update your name and contact information.</p>
                <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold">Edit Profile</button>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-primary/5 shadow-sm">
                <h3 className="text-lg font-bold mb-2">Security</h3>
                <p className="text-sm text-slate-500 mb-4">Enable two-factor, reset sessions, or change password.</p>
                <button className="bg-white border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-100 px-5 py-2 rounded-lg text-sm font-semibold">Security Settings</button>
              </div>
            </section>
            <section className="bg-slate-100 dark:bg-slate-900/60 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-2">Notifications</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-primary rounded" defaultChecked />
                  <span className="text-sm">Email updates about new features</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-primary rounded" />
                  <span className="text-sm">Weekly summary reports</span>
                </label>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
