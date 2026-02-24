import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { AdminSidebar } from '../../components/layout/AdminSidebar'
import { AdminHeader } from '../../components/layout/AdminHeader'
import { DropzoneArea } from '../../features/admin/upload/DropzoneArea'
import { UploadProgressItem } from '../../features/admin/upload/UploadProgressItem'
import { Icon } from '../../components/ui/Icon'
import { useUpload } from '../../hooks/useUpload'
import { getUser } from '../../lib/api'

export const Route = createFileRoute('/admin/upload')({
  component: UploadPage,
})

function UploadPage() {
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser })
  const { uploads, cancelUpload } = useUpload()

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <AdminSidebar user={user} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader
          title="Upload Photos"
          actions={
            <button className="bg-primary text-background-dark font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Icon name="add" className="text-lg" />
              New Album
            </button>
          }
        />

        <div className="flex-1 overflow-y-auto p-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50 mb-2">
                Upload Photos
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Add new memories to your digital archive and organize them into collections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="target-album"
                >
                  Target Album
                </label>
                <div className="relative">
                  <select
                    id="target-album"
                    className="w-full appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option>Family Reunion 2023</option>
                    <option>Summer Vacation</option>
                    <option>Wedding Anniversary</option>
                    <option>Unsorted</option>
                  </select>
                  <Icon
                    name="expand_more"
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="privacy-level"
                >
                  Privacy Level
                </label>
                <div className="relative">
                  <select
                    id="privacy-level"
                    className="w-full appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option>Private (Only me)</option>
                    <option>Family Circle</option>
                    <option>Public Link</option>
                  </select>
                  <Icon
                    name="expand_more"
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
                  />
                </div>
              </div>
            </div>

            <DropzoneArea />

            {uploads.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Icon name="pending_actions" className="text-primary" />
                  Active Uploads
                </h3>
                <div className="space-y-4">
                  {uploads.map((item) => (
                    <UploadProgressItem key={item.id} item={item} onCancel={cancelUpload} />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-start gap-4">
              <Icon name="info" className="text-primary" />
              <div>
                <p className="text-sm font-bold">Pro Tip</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Sweet automatically detects faces and locations to help you organize your
                  memories faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
