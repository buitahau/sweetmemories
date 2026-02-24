import { Icon } from '../../components/ui/Icon';
import type { BookChapterData } from '../../types';

interface BookChapterProps {
  chapter: BookChapterData;
}

function FeaturedGridLayout({ chapter }: { chapter: BookChapterData }) {
  const [featured, ...rest] = chapter.items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {featured && (
        <div className="md:col-span-8 group overflow-hidden rounded-2xl bg-white dark:bg-background-dark/50 border border-primary/5 shadow-sm">
          <div
            className="aspect-video bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url("${featured.image}")` }}
            role="img"
            aria-label={featured.title}
          />
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2 serif-title">{featured.title}</h4>
            {featured.description && (
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {featured.description}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="md:col-span-4 flex flex-col gap-6">
        {rest.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl bg-white dark:bg-background-dark/50 border border-primary/5 shadow-sm h-full"
          >
            <div
              className="aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url("${item.image}")` }}
              role="img"
              aria-label={item.title}
            />
            <div className="p-4">
              <h4 className="font-bold serif-title">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoStripLayout({ chapter }: { chapter: BookChapterData }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {chapter.items.map((item) => (
        <div key={item.id} className="rounded-xl overflow-hidden aspect-[3/4] shadow-lg group">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
            style={{ backgroundImage: `url("${item.image}")` }}
            role="img"
            aria-label={item.title}
          />
        </div>
      ))}
    </div>
  );
}

function QuoteVideoLayout({ chapter }: { chapter: BookChapterData }) {
  return (
    <div className="bg-primary/5 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center border border-primary/10">
      <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4">
        {chapter.chapterNumber}
      </span>
      <h3 className="text-4xl font-bold serif-title mb-8">{chapter.title}</h3>

      {chapter.quote && (
        <div className="max-w-2xl text-lg text-slate-700 dark:text-slate-300 italic mb-10 leading-relaxed">
          {chapter.quote}
        </div>
      )}

      {chapter.videoThumbnail && (
        <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${chapter.videoThumbnail}")` }}
            role="img"
            aria-label={`${chapter.title} video thumbnail`}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
              <Icon name="play_arrow" className="text-background-dark text-3xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function BookChapter({ chapter }: BookChapterProps) {
  const isQuoteVideo = chapter.layout === 'quote-video';

  if (isQuoteVideo) {
    return (
      <section className="mb-20">
        <QuoteVideoLayout chapter={chapter} />
      </section>
    );
  }

  return (
    <section className="mb-20">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            {chapter.chapterNumber}
          </span>
          <h3 className="text-3xl font-bold serif-title mt-1">{chapter.title}</h3>
        </div>
        <p className="text-slate-500 text-sm italic">{chapter.date}</p>
      </div>

      {chapter.layout === 'featured-grid' && <FeaturedGridLayout chapter={chapter} />}
      {chapter.layout === 'photo-strip' && <PhotoStripLayout chapter={chapter} />}
    </section>
  );
}
