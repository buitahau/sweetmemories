import { Icon } from '../../components/ui/Icon';
import type { GalleryItem } from '../../types';

interface GallerySectionProps {
  items: GalleryItem[];
}

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <div className="px-6 md:px-20 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">
              Capturing every milestone
            </h2>
            <p className="text-slate-500">Beautifully stored, easily revisited.</p>
          </div>
          <a
            className="text-primary font-bold flex items-center gap-2 hover:underline"
            href="#"
          >
            See all examples <Icon name="arrow_forward" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 group">
              <div className="w-full aspect-square bg-slate-200 rounded-2xl overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                />
              </div>
              <div>
                <p className="text-slate-900 dark:text-slate-50 text-lg font-bold">{item.title}</p>
                <p className="text-slate-500 text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
