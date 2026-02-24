interface ToggleProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  id?: string;
  'aria-label'?: string;
}

export function Toggle({ checked, onChange, id, 'aria-label': ariaLabel }: ToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-label={ariaLabel}
      />
      <div
        className="w-11 h-6 bg-slate-200 rounded-full peer dark:bg-slate-700
          peer-checked:after:translate-x-full peer-checked:after:border-white
          after:content-[''] after:absolute after:top-[2px] after:left-[2px]
          after:bg-white after:border after:border-gray-300 after:rounded-full
          after:h-5 after:w-5 after:transition-all dark:border-gray-600
          peer-checked:bg-primary"
      />
    </label>
  );
}
