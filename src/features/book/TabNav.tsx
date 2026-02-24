import { useState } from 'react';

interface TabNavProps {
  tabs: string[];
  activeIndex?: number;
  onTabChange?: (index: number) => void;
}

export function TabNav({ tabs, activeIndex = 0, onTabChange }: TabNavProps) {
  const [active, setActive] = useState(activeIndex);

  const handleTabClick = (index: number) => {
    setActive(index);
    onTabChange?.(index);
  };

  return (
    <div className="mb-12">
      <div
        className="flex border-b border-primary/10 overflow-x-auto no-scrollbar gap-8 md:justify-center"
        role="tablist"
        aria-label="Memory book chapters"
      >
        {tabs.map((tab, index) => {
          const isActive = active === index;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              className={`flex flex-col items-center justify-center border-b-2 pb-4 pt-4 whitespace-nowrap transition-colors ${
                isActive
                  ? 'border-primary text-slate-900 dark:text-slate-100'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
              onClick={() => handleTabClick(index)}
            >
              <span className="text-sm font-bold tracking-wide">{tab}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
