import { Icon } from '../ui/Icon';

export function PublicFooter() {
  return (
    <footer className="px-6 md:px-20 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-background-dark">
              <Icon name="auto_awesome" className="text-sm font-bold" />
            </div>
            <h2 className="text-base font-bold leading-tight">Sweet Memories</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Making family history accessible, private, and beautiful for everyone, regardless of
            tech skills.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-900 dark:text-slate-100">Company</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">
              About Us
            </a>
            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">
              Careers
            </a>
            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">
              Privacy Policy
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-900 dark:text-slate-100">Contact</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">
              Support
            </a>
            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">
              Twitter
            </a>
            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">
              Instagram
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs">
        &copy; 2024 Sweet Memories. All rights reserved. Built with love for families
        everywhere.
      </div>
    </footer>
  );
}
