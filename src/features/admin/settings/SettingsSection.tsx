import { ReactNode } from 'react';
import { Icon } from '../../../components/ui/Icon';

interface SettingsSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  icon?: string;
}

export function SettingsSection({ title, description, children, icon }: SettingsSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-slate-200 dark:border-slate-800 pb-12">
      <div className="md:col-span-1">
        <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
          {icon && <Icon name={icon} className="text-primary" />}
          {title}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <div className="md:col-span-2 space-y-6">{children}</div>
    </section>
  );
}
