import { Icon } from '../../../components/ui/Icon';

interface AddCategoryCardProps {
  onClick?: () => void;
}

export function AddCategoryCard({ onClick }: AddCategoryCardProps) {
  return (
    <button
      className="group bg-slate-100/50 dark:bg-slate-800/30 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center p-8 min-h-[320px] hover:border-primary hover:bg-primary/5 transition-all cursor-pointer w-full"
      onClick={onClick}
      aria-label="Add new category"
    >
      <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-md text-primary group-hover:scale-110 transition-transform">
        <Icon name="add" className="text-4xl" />
      </div>
      <p className="mt-4 text-lg font-bold text-slate-600 dark:text-slate-300">Add Category</p>
      <p className="text-sm text-slate-400 mt-1">Create a new collection</p>
    </button>
  );
}
