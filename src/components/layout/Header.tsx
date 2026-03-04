import React from 'react'
import { Link } from '@tanstack/react-router'

interface HeaderProps {
  variant?: 'landing' | 'admin' | 'public'
}

export const Header: React.FC<HeaderProps> = ({ variant = 'landing' }) => {
  if (variant === 'admin') {
    return (
      <header className="h-16 border-b border-primary/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">open_in_new</span>
            View My Public Site
          </button>
        </div>
      </header>
    )
  }

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-sm font-bold">
            auto_awesome
          </span>
        </div>
        <Link to="/">
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            Sweet Memories
          </h2>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden md:flex items-center gap-9">
          <Link
            to="/"
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            to="/"
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>
        <Link to="/login">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-sm font-bold">
              person
            </span>
          </div>
        </Link>
      </div>
    </header>
  )
}
