import { Link } from '@tanstack/react-router';
import { Icon } from '../ui/Icon';
import { GoogleIcon } from '../ui/GoogleIcon';

export function PublicHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
          <Icon name="auto_awesome" className="font-bold" />
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Sweet Memories</h2>
      </Link>

      <div className="flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden md:flex items-center gap-9">
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="#about"
          >
            About
          </a>
        </nav>
        <Link
          to="/login"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-background-dark text-sm font-bold transition-transform hover:scale-105 active:scale-95"
        >
          <GoogleIcon className="w-4 h-4 mr-2" />
          <span className="truncate">Login</span>
        </Link>
      </div>
    </header>
  );
}
