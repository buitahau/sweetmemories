import { createFileRoute } from '@tanstack/react-router'
import { Icon } from '../../components/ui/Icon'
import { SettingsSection } from '../../features/admin/settings/SettingsSection'
import { PrivacyToggle } from '../../features/admin/settings/PrivacyToggle'
import { useSettings } from '../../hooks/useSettings'

export const Route = createFileRoute('/admin/settings')({
  component: SettingsPage,
})

function SettingsPage() {
  const { settings, isLoading, isSaving, isDirty, updateField, save, cancel } = useSettings()

  if (isLoading || !settings) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="size-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 flex items-center justify-center rounded-lg bg-primary text-background-dark">
            <Icon name="auto_awesome" className="font-bold" />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">Sweet Memories</h2>
        </div>
        <div className="flex gap-3">
          <button
            className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 transition-colors"
            aria-label="Notifications"
          >
            <Icon name="notifications" className="text-[20px]" />
          </button>
          <button
            className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 transition-colors"
            aria-label="Account"
          >
            <Icon name="account_circle" className="text-[20px]" />
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark p-4 hidden md:flex flex-col gap-6">
          <div>
            <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Admin Panel
            </h3>
            <nav className="flex flex-col gap-1">
              {[
                { icon: 'dashboard', label: 'Dashboard', active: false },
                { icon: 'favorite', label: 'Memories', active: false },
                { icon: 'gallery_thumbnail', label: 'Galleries', active: false },
                { icon: 'bar_chart', label: 'Analytics', active: false },
                { icon: 'settings', label: 'Settings', active: true },
                { icon: 'forum', label: 'Support', active: false },
              ].map((item) => (
                <a
                  key={item.label}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${item.active
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  href="#"
                >
                  <Icon name={item.icon} filled={item.active} className={item.active ? 'text-primary' : ''} />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <p className="text-xs text-slate-500 mb-2 leading-relaxed">
              You&apos;re currently on the <strong>Premium Plan</strong>
            </p>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4" />
            </div>
          </div>
        </aside>

        <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-10">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Personalize your memory site and manage how others see it.
            </p>
          </div>

          <div className="space-y-12">
            <SettingsSection
              title="General Info"
              description="This information will be displayed on your main page."
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" htmlFor="site-title">
                  Site Title
                </label>
                <input
                  id="site-title"
                  className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3"
                  placeholder="e.g. Our Family Adventures"
                  type="text"
                  value={settings.siteTitle}
                  onChange={(e) => updateField('siteTitle', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" htmlFor="description">
                  Short Description
                </label>
                <textarea
                  id="description"
                  className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 resize-none"
                  placeholder="Share a few words about what this collection means..."
                  rows={3}
                  value={settings.description}
                  onChange={(e) => updateField('description', e.target.value)}
                />
              </div>
            </SettingsSection>

            <SettingsSection
              title="Web Address"
              description="Choose the custom link people will use to visit your site."
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" htmlFor="subdomain">
                  Subdomain
                </label>
                <div className="flex">
                  <input
                    id="subdomain"
                    className="flex-1 rounded-l-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 border border-r-0"
                    placeholder="anna"
                    type="text"
                    value={settings.subdomain}
                    onChange={(e) => updateField('subdomain', e.target.value)}
                  />
                  <span className="inline-flex items-center px-4 rounded-r-xl border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-500 text-sm">
                    .memories.com
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <Icon name="info" className="text-sm" />
                  Only letters and numbers are allowed.
                </p>
              </div>
            </SettingsSection>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold mb-1">Privacy</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Control who can view your beautiful memories.
                </p>
              </div>
              <div className="md:col-span-2 space-y-6">
                <PrivacyToggle
                  id="public-toggle"
                  icon="public"
                  title="Public Site"
                  description="Anyone with the link can view your site."
                  checked={settings.isPublic}
                  onChange={(v) => updateField('isPublic', v)}
                  iconColorClass="bg-primary/10 text-primary"
                />
                <PrivacyToggle
                  id="search-toggle"
                  icon="search_off"
                  title="Hide from Search"
                  description="Google and others won't list your site."
                  checked={settings.hideFromSearch}
                  onChange={(v) => updateField('hideFromSearch', v)}
                  iconColorClass="bg-slate-100 dark:bg-slate-700 text-slate-500"
                />
              </div>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-4">
            <button
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={cancel}
              disabled={!isDirty}
            >
              Cancel
            </button>
            <button
              className="px-8 py-2.5 rounded-xl text-sm font-bold bg-primary text-background-dark shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity disabled:opacity-60"
              onClick={save}
              disabled={isSaving || !isDirty}
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
