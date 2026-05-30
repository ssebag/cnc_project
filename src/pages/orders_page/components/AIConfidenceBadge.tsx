import { Brain, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface AIConfidenceBadgeProps {
  confidence: number;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

function AIConfidenceBadge({ confidence, showPercentage = true, size = 'md' }: AIConfidenceBadgeProps) {
  const getConfig = () => {
    if (confidence >= 85) {
      return {
        label: 'ثقة عالية',
        color: 'text-[var(--ai-high-confidence)]',
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: TrendingUp,
      };
    } else if (confidence >= 60) {
      return {
        label: 'ثقة متوسطة',
        color: 'text-[var(--ai-medium-confidence)]',
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        icon: Minus,
      };
    } else {
      return {
        label: 'ثقة منخفضة',
        color: 'text-[var(--ai-low-confidence)]',
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: TrendingDown,
      };
    }
  };

  const config = getConfig();
  const Icon = config.icon;

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`inline-flex items-center gap-2 ${config.bg} ${config.color} border ${config.border} rounded-[var(--radius-md)] ${sizes[size]}`}>
      <Brain className={iconSizes[size]} />
      <span className="font-medium">{config.label}</span>
      {showPercentage && (
        <>
          <span className="text-muted-foreground">•</span>
          <span className="font-semibold">{confidence}%</span>
        </>
      )}
      <Icon className={iconSizes[size]} />
    </div>
  );
}
export default AIConfidenceBadge;
