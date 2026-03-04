import React from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

export const Sidebar: React.FC = () => {
  const router = useRouterState()
  const currentPath = router.location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <aside className="w-64 border-r border-primary/10 bg-white dark:bg-slate-900 hidden md:flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <span className="material-symbols-outlined text-white">auto_stories</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight">Sweet Memories</h2>
      </div>
      <nav className="flex-1 px-4 space-y-1 mt-4">
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
            isActive('/dashboard')
              ? 'bg-primary/20 dark:text-primary font-semibold bg-primary/10 text-primary'
              : 'hover:bg-primary/10'
          }`}
        >
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </Link>
        <Link
          to="/admin/upload"
          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary/10 transition-colors"
        >
          <span className="material-symbols-outlined">upload</span>
          Upload Photos
        </Link>
        <Link
          to="/admin/templates"
          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary/10 transition-colors"
        >
          <span className="material-symbols-outlined">folder</span>
          Categories
        </Link>
        <Link
          to="/admin/templates"
          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary/10 transition-colors"
        >
          <span className="material-symbols-outlined">web_stories</span>
          Templates
        </Link>
        <Link
          to="/admin/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary/10 transition-colors"
        >
          <span className="material-symbols-outlined">settings</span>
          Settings
        </Link>
      </nav>
      <div className="p-4 border-t border-primary/10">
        <div className="flex items-center gap-3 p-2 bg-background-light dark:bg-slate-800 rounded-xl">
          <div className="size-10 rounded-full bg-slate-200" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuxf3nBl9y2LvUc38PIMGf6he-oCy13FReK-BIUnNjtVgu_MvEywbgeLWpN_EbwqnH8IJx7IF2_KyZy-Jgr90TErIxE5ERdY8XebqFQ0BAtUsHLQDiAQE82sMgthzG6Ngtw6aa4xcWWC2WKYA1DrbF_JfVmp9ft525aXaH6QWIaWg9rTyVwaLVztnGOm8yEbsv1imx7T6zdn0yYDoKSmsmxHufh3fw2BwJT4WABvXctzGwmxNTe5zggzziE_aUviLGL5qstUku-OeQ')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold truncate">Alex Miller</span>
            <span className="text-xs opacity-60">Admin</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
