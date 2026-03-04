import React from 'react'
import { Link } from '@tanstack/react-router'

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-20 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm font-bold">
                auto_awesome
              </span>
            </div>
            <h2 className="text-base font-bold leading-tight">
              Sweet Memories
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Making family history accessible, private, and beautiful for
            everyone, regardless of tech skills.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-900 dark:text-slate-100">
            Company
          </h4>
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              Careers
            </Link>
            <Link
              to="/"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-900 dark:text-slate-100">
            Contact
          </h4>
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              Support
            </Link>
            <a
              href="#"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs">
        © 2024 Sweet Memories. All rights reserved. Built with love for families
        everywhere.
      </div>
    </footer>
  )
}
