import { Icon } from '../../components/ui/Icon';

interface BookHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
  introText: string;
  onLeaveHeart?: () => void;
}

export function BookHero({ title, subtitle, heroImage, introText, onLeaveHeart }: BookHeroProps) {
  return (
    <>
      <div className="@container">
        <div className="relative overflow-hidden rounded-xl md:rounded-3xl aspect-[16/9] min-h-[400px] group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%), url("${heroImage}")`,
            }}
            role="img"
            aria-label={`${title} hero image`}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight serif-title italic">
              {title}
            </h1>
            <p className="text-white/90 mt-4 text-lg max-w-xl font-light">{subtitle}</p>
            <div className="mt-8 flex gap-4">
              <button
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-all"
                onClick={onLeaveHeart}
              >
                <Icon name="favorite" className="text-primary" filled />
                <span className="font-semibold text-sm">Leave a Heart</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 serif-title">{introText}</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
      </div>
    </>
  );
}
