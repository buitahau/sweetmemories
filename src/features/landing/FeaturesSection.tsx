import { Icon } from '../../components/ui/Icon';

const FEATURES = [
  {
    icon: 'passkey',
    title: 'Sign in with Google',
    description:
      'Fast onboarding with no new passwords to remember. One click and you\'re in.',
  },
  {
    icon: 'language',
    title: 'Your Own Private Site',
    description:
      'Every family gets a beautiful, auto-generated subdomain. Private by default, shareable by choice.',
  },
  {
    icon: 'auto_fix_high',
    title: 'Simple Organization',
    description:
      'Limited choices means zero overwhelm for you and your kin. We organize, you enjoy.',
  },
];

export function FeaturesSection() {
  return (
    <div className="px-6 md:px-20 py-20 bg-primary/5 dark:bg-primary/5" id="features">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-[800px] mx-auto">
          <h2 className="text-slate-900 dark:text-slate-50 text-3xl md:text-5xl font-bold leading-tight">
            Designed for simplicity
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            We removed the friction so you can focus on what actually matters: your family&apos;s
            story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.icon}
              className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-8 hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <Icon name={feature.icon} className="text-3xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-slate-50 text-xl font-bold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
