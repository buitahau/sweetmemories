import { Icon } from '../../../components/ui/Icon';
import { Badge } from '../../../components/ui/Badge';
import type { Category } from '../../../types';

interface CategoryCardProps {
  category: Category;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
}

export function CategoryCard({ category, onEdit, onDelete, onView }: CategoryCardProps) {
  const isBadgePrimary =
    category.badge?.includes('h ago') ||
    category.badge?.includes('d ago') ||
    (category.badge?.includes('w ago') && !category.badge?.includes('mo'));

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4 justify-between">
          <button
            className="bg-white/90 p-2 rounded-lg hover:bg-white transition-colors"
            aria-label={`Edit ${category.name}`}
            onClick={() => onEdit?.(category.id)}
          >
            <Icon name="edit" className="text-slate-700 text-sm" />
          </button>
          <button
            className="bg-red-500/90 p-2 rounded-lg hover:bg-red-500 transition-colors"
            aria-label={`Delete ${category.name}`}
            onClick={() => onDelete?.(category.id)}
          >
            <Icon name="delete" className="text-white text-sm" />
          </button>
        </div>
        <div
          className="w-full h-full bg-slate-200 bg-cover bg-center"
          style={{ backgroundImage: `url("${category.coverImage}")` }}
          role="img"
          aria-label={`${category.name} category cover photo`}
        />
        {category.badge && (
          <div className="absolute top-4 left-4 z-20 shadow-sm">
            <Badge variant={isBadgePrimary ? 'primary' : 'muted'}>{category.badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold">{category.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Icon name="image" className="text-slate-400 text-sm" />
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {category.photoCount} Photos
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold py-2 px-3 rounded-lg hover:bg-primary hover:text-slate-900 transition-colors"
            onClick={() => onView?.(category.id)}
          >
            View All
          </button>
          <button
            className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600"
            aria-label={`More options for ${category.name}`}
          >
            <Icon name="more_vert" className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
