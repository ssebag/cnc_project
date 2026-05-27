import { TrendingUp, TrendingDown } from 'lucide-react';

interface ChangeIndicatorProps {
  value: number;
  label: string;
  isPositive: boolean;
}

export default function ChangeIndicator({ value, label, isPositive }: ChangeIndicatorProps) {
  const color = isPositive ? 'text-green-600' : 'text-red-600';
  const Icon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className={`flex items-center gap-1 ${color}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">
        {isPositive ? '+' : ''}{value}% {label}
      </span>
    </div>
  );
}
