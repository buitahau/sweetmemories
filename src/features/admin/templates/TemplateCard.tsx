import { Icon } from '../../../components/ui/Icon';
import type { Template } from '../../../types';

interface TemplateCardProps {
  template: Template;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function TemplateCard({ template, isSelected, onSelect }: TemplateCardProps) {
  return (
    <div
      className={`group bg-white dark:bg-slate-900/50 border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ${
        isSelected
          ? 'border-2 border-primary/50 ring-4 ring-primary/5'
          : 'border border-primary/10'
      }`}
    >
      <div
        className="aspect-video w-full bg-slate-100 dark:bg-slate-800 bg-center bg-cover relative"
        style={{ backgroundImage: `url('${template.previewImage}')` }}
        role="img"
        aria-label={`${template.name} template preview`}
      >
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-background-dark font-bold px-4 py-2 rounded-lg text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
            Quick Preview
          </button>
        </div>
        {template.isPopular && (
          <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
            Most Popular
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-none mb-2">
              {template.name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{template.description}</p>
          </div>
        </div>

        <button
          className={`w-full font-black py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
            isSelected
              ? 'bg-primary hover:bg-primary/90 text-background-dark shadow-lg shadow-primary/20'
              : 'bg-primary/10 hover:bg-primary text-slate-900 dark:text-white dark:hover:text-background-dark'
          }`}
          onClick={() => onSelect(template.id)}
          aria-pressed={isSelected}
        >
          <span>Select Template</span>
          {isSelected && <Icon name="check_circle" className="text-sm" />}
        </button>
      </div>
    </div>
  );
}
