import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { AdminSidebar } from '../../components/layout/AdminSidebar'
import { AdminHeader } from '../../components/layout/AdminHeader'
import { TemplateCard } from '../../features/admin/templates/TemplateCard'
import { Icon } from '../../components/ui/Icon'
import { getTemplates, getUser } from '../../lib/api'

export const Route = createFileRoute('/admin/templates')({
  component: TemplatesPage,
})

function TemplatesPage() {
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser })

  const { data: templates = [] } = useQuery({
    queryKey: ['templates'],
    queryFn: getTemplates,
  })

  const defaultSelected = templates.find((t) => t.isSelected)?.id ?? 'classic-white'
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(defaultSelected)

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <AdminSidebar user={user} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader
          title="Templates"
          actions={
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500">
                {selectedTemplateId
                  ? `Selected: ${templates.find((t) => t.id === selectedTemplateId)?.name ?? ''}`
                  : 'No template selected'}
              </span>
            </div>
          }
        />

        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                Select a Template
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                Choose a starting point for your memorial page. You can customize the content later.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  isSelected={selectedTemplateId === template.id}
                  onSelect={setSelectedTemplateId}
                />
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-primary/10 pt-8 mb-12">
              <div className="flex items-center gap-2 text-slate-500">
                <Icon name="info" className="text-primary" />
                <p className="text-sm">
                  Don&apos;t worry, you can switch templates anytime before publishing.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  Preview All
                </button>
                <button
                  className="bg-primary px-8 py-3 rounded-lg font-black text-background-dark shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-60"
                  disabled={!selectedTemplateId}
                >
                  Confirm Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
