import { Icon } from '../../../components/ui/Icon';

interface HeroImage {
  id: string;
  src: string;
  alt: string;
}

interface HeroImagePickerProps {
  images: HeroImage[];
  selectedId: string;
  onSelect: (id: string) => void;
  onUploadNew?: () => void;
}

export function HeroImagePicker({
  images,
  selectedId,
  onSelect,
  onUploadNew,
}: HeroImagePickerProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {images.map((image) => {
        const isSelected = image.id === selectedId;
        return (
          <button
            key={image.id}
            className={`relative group aspect-square rounded-lg overflow-hidden transition-all ${
              isSelected
                ? 'border-4 border-primary ring-2 ring-primary/20'
                : 'border-2 border-transparent hover:border-primary/50'
            }`}
            onClick={() => onSelect(image.id)}
            aria-pressed={isSelected}
            aria-label={`Select hero image: ${image.alt}`}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              src={image.src}
              alt={image.alt}
            />
            {isSelected && (
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <Icon name="check_circle" className="text-white text-3xl" filled />
              </div>
            )}
          </button>
        );
      })}

      <button
        className="aspect-square rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
        onClick={onUploadNew}
        aria-label="Upload new hero image"
      >
        <Icon name="add_photo_alternate" />
        <span className="text-xs mt-1">Upload New</span>
      </button>
    </div>
  );
}
