import type { MachineStats } from '../../../types/reports';

interface MachineUsabilityCardProps {
  title: string;
  stats: MachineStats;
}

export default function MachineUsabilityCard({ title, stats }: MachineUsabilityCardProps) {
  const total = stats.productiveHours + stats.downtimeHours;
  const productivePercentage = (stats.productiveHours / total) * 100;
  const downtimePercentage = (stats.downtimeHours / total) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 h-101">
      <div className="text-right mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">كفاءة التشغيل</p>
      </div>

      <div className="space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg text-right">
            <p className="text-sm text-muted-foreground mb-2">ساعات إنتاجية</p>
            <p className="text-3xl font-bold text-green-600">{stats.productiveHours}</p>
            <p className="text-xs text-muted-foreground mt-1">ساعة</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-right">
            <p className="text-sm text-muted-foreground mb-2">ساعات توقف</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.downtimeHours}</p>
            <p className="text-xs text-muted-foreground mt-1">ساعة</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className="flex h-full">
            <div
              className="bg-green-500 transition-all"
              style={{ width: `${productivePercentage}%` }}
            />
            <div
              className="bg-yellow-500 transition-all"
              style={{ width: `${downtimePercentage}%` }}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
            توقف
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            إنتاجية
          </div>
        </div>
      </div>
    </div>
  );
}
