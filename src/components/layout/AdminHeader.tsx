import { Icon } from '../ui/Icon';

interface AdminHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export function AdminHeader({ title, actions }: AdminHeaderProps) {
  return (
    <header className="h-16 border-b border-primary/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        {actions ?? (
          <button
            className="bg-primary text-background-dark px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2"
            aria-label="View public site"
          >
            <Icon name="open_in_new" className="text-sm" />
            View My Public Site
          </button>
        )}
      </div>
    </header>
  );
}
