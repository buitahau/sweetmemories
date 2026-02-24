import { Icon } from '../../../components/ui/Icon';
import type { UploadItem } from '../../../types';

interface UploadProgressItemProps {
  item: UploadItem;
  onCancel?: (id: string) => void;
}

export function UploadProgressItem({ item, onCancel }: UploadProgressItemProps) {
  const isProcessing = item.status === 'processing';
  const isDone = item.status === 'done';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center gap-4 mb-3">
        <div className="size-12 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0">
          <div
            className={`w-full h-full flex items-center justify-center ${
              isProcessing ? 'bg-primary/10' : 'bg-primary/20'
            }`}
          >
            <Icon
              name={isProcessing || isDone ? 'check_circle' : 'image'}
              className={`text-primary${isProcessing ? '/60' : ''}`}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {isProcessing ? (
            <>
              <p className="text-sm font-bold truncate">{item.fileName}</p>
              <p className="text-xs text-slate-400">Upload complete. Processing AI tags...</p>
            </>
          ) : (
            <>
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold truncate">{item.fileName}</p>
                <span className="text-xs font-bold text-primary">{item.progress}%</span>
              </div>
              <p className="text-xs text-slate-400">
                {item.sizeMB.toFixed(1)} MB / {item.totalMB.toFixed(1)} MB
              </p>
            </>
          )}
        </div>

        {isProcessing ? (
          <div
            className="size-5 border-2 border-primary border-t-transparent rounded-full animate-spin"
            aria-label="Processing"
          />
        ) : (
          <button
            className="text-slate-400 hover:text-red-500 transition-colors"
            onClick={() => onCancel?.(item.id)}
            aria-label={`Cancel upload of ${item.fileName}`}
          >
            <Icon name="close" />
          </button>
        )}
      </div>

      {!isProcessing && (
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(110,230,25,0.4)] transition-all"
            style={{ width: `${item.progress}%` }}
            role="progressbar"
            aria-valuenow={item.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Upload progress for ${item.fileName}`}
          />
        </div>
      )}
    </div>
  );
}
