interface GalleryCategory {
  id: string;
  name: string;
  imageCount: number;
  dateRange: string;
}

interface GalleryCategoryCheckboxProps {
  category: GalleryCategory;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

export function GalleryCategoryCheckbox({
  category,
  checked,
  onChange,
}: GalleryCategoryCheckboxProps) {
  const checkboxId = `gallery-category-${category.id}`;

  return (
    <label
      className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary/5 cursor-pointer transition-colors"
      htmlFor={checkboxId}
    >
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(category.id, e.target.checked)}
        className="rounded text-primary focus:ring-primary h-5 w-5"
      />
      <div className="flex flex-col">
        <span className="font-medium">
          {category.name} ({category.imageCount} images)
        </span>
        <span className="text-xs text-slate-500">{category.dateRange}</span>
      </div>
    </label>
  );
}
