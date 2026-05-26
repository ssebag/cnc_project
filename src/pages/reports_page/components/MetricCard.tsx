import { Package, TrendingDown, Target, Clock, DollarSign } from 'lucide-react';
import ChangeIndicator from './ChangeIndicator';
import type { MetricCardData } from '../../../types/reports';

interface MetricCardProps extends MetricCardData {
}

const iconMap = {
  dollar: DollarSign,
  package: Package,
  'trending-down': TrendingDown,
  target: Target,
  clock: Clock,
};

const iconColorMap = {
  dollar: 'text-green-600',
  package: 'text-blue-600',
  'trending-down': 'text-blue-600',
  target: 'text-blue-600',
  clock: 'text-orange-600',
};

export default function MetricCard({
  label,
  value,
  change,
  changeLabel,
  iconType,
  trend,
}: MetricCardProps) {
  const IconComponent = iconMap[iconType] || Package;
  const iconClass = iconColorMap[iconType] || 'text-blue-600';

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">{label}</p>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-3">{value}</p>
          <ChangeIndicator
            value={Math.abs(change)}
            label={changeLabel}
            isPositive={trend === 'up'}
          />
        </div>
        <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${iconClass}`}>
          <IconComponent className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
