import { Icon } from '../../../components/ui/Icon';
import { Toggle } from '../../../components/ui/Toggle';

interface PrivacyToggleProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  iconColorClass?: string;
}

export function PrivacyToggle({
  id,
  icon,
  title,
  description,
  checked,
  onChange,
  iconColorClass = 'bg-primary/10 text-primary',
}: PrivacyToggleProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
      <div className="flex gap-4 items-center">
        <div className={`size-10 flex items-center justify-center rounded-full ${iconColorClass}`}>
          <Icon name={icon} />
        </div>
        <div>
          <h4 className="font-medium text-sm">{title}</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
        </div>
      </div>
      <Toggle
        id={id}
        checked={checked}
        onChange={onChange}
        aria-label={title}
      />
    </div>
  );
}
