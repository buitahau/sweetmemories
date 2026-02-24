import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'muted';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary text-background-dark',
    muted: 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400',
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
