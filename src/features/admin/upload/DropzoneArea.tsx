import { Icon } from '../../../components/ui/Icon';

interface DropzoneAreaProps {
  onBrowse?: () => void;
  isDragging?: boolean;
}

export function DropzoneArea({ onBrowse, isDragging = false }: DropzoneAreaProps) {
  return (
    <div
      className={`border-2 border-dashed rounded-3xl p-12 text-center flex flex-col items-center justify-center transition-all group cursor-pointer ${
        isDragging
          ? 'border-primary bg-primary/10'
          : 'border-primary/30 bg-primary/5 dark:bg-primary/5 hover:border-primary hover:bg-primary/10'
      }`}
      role="button"
      tabIndex={0}
      aria-label="Drag and drop photos or click to browse"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onBrowse?.();
        }
      }}
    >
      <div className="size-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
        <Icon name="upload_file" className="text-background-dark text-4xl" />
      </div>
      <h2 className="text-xl font-bold mb-2">Drag and drop photos here</h2>
      <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
        Supports High-Resolution JPG, PNG, and HEIC up to 50MB each. You can select multiple files
        at once.
      </p>
      <button
        className="bg-primary hover:bg-primary/90 text-background-dark font-bold px-8 py-3 rounded-xl transition-all shadow-md"
        onClick={onBrowse}
        type="button"
      >
        Browse Computer
      </button>
    </div>
  );
}
