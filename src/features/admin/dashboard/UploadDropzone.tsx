import { Icon } from '../../../components/ui/Icon';

interface UploadDropzoneProps {
  onBrowse?: () => void;
}

export function UploadDropzone({ onBrowse }: UploadDropzoneProps) {
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed border-primary/30 p-12 flex flex-col items-center justify-center text-center group hover:border-primary transition-colors cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label="Upload memories dropzone"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onBrowse?.();
        }
      }}
    >
      <div className="bg-primary/10 text-primary p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
        <Icon name="cloud_upload" className="text-4xl" />
      </div>
      <h3 className="text-xl font-bold mb-2">Upload Memories</h3>
      <p className="text-slate-500 max-w-sm mb-6">
        Drag and drop your photos here, or click to browse your computer.
      </p>
      <button
        className="bg-primary/20 text-slate-900 dark:text-slate-100 px-6 py-2 rounded-lg font-bold hover:bg-primary transition-colors"
        onClick={onBrowse}
        type="button"
      >
        Select Files
      </button>
    </div>
  );
}
