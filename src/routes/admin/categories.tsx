import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { AdminSidebar } from '../../components/layout/AdminSidebar'
import { AdminHeader } from '../../components/layout/AdminHeader'
import { CategoryCard } from '../../features/admin/categories/CategoryCard'
import { AddCategoryCard } from '../../features/admin/categories/AddCategoryCard'
import { Icon } from '../../components/ui/Icon'
import { getCategories, getUser } from '../../lib/api'

export const Route = createFileRoute('/admin/categories')({
  component: CategoriesPage,
})

function CategoriesPage() {
  const [search, setSearch] = useState('')
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser })

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase()),
  )

  const totalPhotos = categories.reduce((sum, cat) => sum + cat.photoCount, 0)

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <AdminSidebar user={user} />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <AdminHeader
          title="Categories"
          actions={
            <button className="flex items-center gap-2 bg-primary text-slate-900 px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-[1.02] active:scale-95">
              <Icon name="add_circle" />
              <span>New Category</span>
            </button>
          }
        />

        <div className="p-8 overflow-y-auto">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex flex-col gap-1">
              <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-50">
                Manage Categories
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Organize and manage your memory collections with ease
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Icon
                  name="search"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  className="pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border-none rounded-xl w-64 focus:ring-2 focus:ring-primary shadow-sm text-sm"
                  placeholder="Search categories..."
                  type="search"
                  aria-label="Search categories"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="folder" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Total Categories
                </p>
                <p className="text-2xl font-black">{categories.length}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Icon name="image" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Total Photos
                </p>
                <p className="text-2xl font-black">{totalPhotos.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
            <AddCategoryCard />
          </div>

          <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              &copy; 2024 Sweet Memories. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                Help Center
              </a>
              <a
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                Terms of Use
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
