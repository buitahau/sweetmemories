import { Link, useRouterState } from '@tanstack/react-router';
import { Icon } from '../ui/Icon';
import type { User } from '../../types';

interface NavItem {
  to: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/admin', label: 'Dashboard', icon: 'dashboard' },
  { to: '/admin/upload', label: 'Upload Photos', icon: 'cloud_upload' },
  { to: '/admin/categories', label: 'Categories', icon: 'folder' },
  { to: '/admin/templates', label: 'Templates', icon: 'web_stories' },
  { to: '/admin/settings', label: 'Settings', icon: 'settings' },
];

interface AdminSidebarProps {
  user: User | undefined;
}

export function AdminSidebar({ user }: AdminSidebarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) => {
    if (to === '/admin') {
      return currentPath === '/admin' || currentPath === '/admin/';
    }
    return currentPath.startsWith(to);
  };

  return (
    <aside className="w-64 border-r border-primary/10 bg-white dark:bg-slate-900 hidden md:flex flex-col h-full">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <Icon name="auto_stories" className="text-background-dark" />
        </div>
        <h2 className="text-xl font-bold tracking-tight">Memory Admin</h2>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4" aria-label="Admin navigation">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                active
                  ? 'bg-primary/20 text-slate-900 dark:text-primary font-semibold'
                  : 'hover:bg-primary/10 text-slate-700 dark:text-slate-400'
              }`}
            >
              <Icon name={item.icon} filled={active} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-primary/10">
        <div className="flex items-center gap-3 p-2 bg-background-light dark:bg-slate-800 rounded-xl">
          <div
            className="size-10 rounded-full bg-slate-200 bg-cover bg-center border-2 border-primary/20"
            style={user?.avatar ? { backgroundImage: `url('${user.avatar}')` } : undefined}
            aria-label={`${user?.name ?? 'User'} profile avatar`}
            role="img"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold truncate">{user?.name ?? 'Alex Rivera'}</span>
            <span className="text-xs opacity-60">{user?.role ?? 'Admin'}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
