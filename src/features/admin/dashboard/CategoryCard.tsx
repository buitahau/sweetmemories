import { Icon } from '../../../components/ui/Icon';
import type { Category } from '../../../types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-primary/5 group">
      <div className="h-32 bg-slate-200 relative overflow-hidden">
        <img
          alt={`${category.name} category cover`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          src={category.coverImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-3 left-4 text-white font-bold">{category.name}</span>
      </div>
      <div className="p-4 flex items-center justify-between">
        <span className="text-sm text-slate-500">{category.photoCount} Photos</span>
        <button
          className="p-2 hover:bg-primary/10 rounded-lg"
          aria-label={`More options for ${category.name}`}
        >
          <Icon name="more_vert" className="text-slate-400" />
        </button>
      </div>
    </div>
  );
}
