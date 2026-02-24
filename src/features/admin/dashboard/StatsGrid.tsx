import { Icon } from '../../../components/ui/Icon';
import type { DashboardStats } from '../../../types';

interface StatsGridProps {
  stats: DashboardStats;
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-primary/5 flex items-center gap-4">
        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-3 rounded-lg">
          <Icon name="photo_library" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Total Memories
          </p>
          <p className="text-2xl font-black">{stats.totalPhotos} Photos Uploaded</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-primary/5 flex items-center gap-4">
        <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-3 rounded-lg">
          <Icon name="history" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Recent Activity
          </p>
          <p className="text-2xl font-black">Last Update: {stats.lastUpdateRelative}</p>
        </div>
      </div>
    </section>
  );
}
