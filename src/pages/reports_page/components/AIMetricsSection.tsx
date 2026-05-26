import { Brain, DollarSign, TrendingUp } from 'lucide-react';
import type { AIMetric } from '../../../types/reports';

interface AIMetricsSectionProps {
  metrics: AIMetric[];
}

const bgColorMap = {
  'blue': 'bg-blue-50',
  'green': 'bg-green-50',
  'light-blue': 'bg-cyan-50',
};

const iconMap = {
  'blue': Brain,
  'green': DollarSign,
  'light-blue': TrendingUp,
};

export default function AIMetricsSection({ metrics }: AIMetricsSectionProps) {
  return (
    <div className="space-y-3">
      {metrics.map((metric, index) => {
        const bgClass = bgColorMap[metric.bgColor];
        const IconComponent = iconMap[metric.bgColor];

        return (
          <div key={index} className={`${bgClass} rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <IconComponent className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{metric.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
