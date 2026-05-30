import {
    CheckCircle,
    Clock,
    AlertCircle,
    XCircle,
    Loader2,
    Sparkles,
    Play,
    CheckCheck
  } from 'lucide-react';
  
  type OperationalStatus =
    | 'ready'
    | 'processing'
    | 'validating'
    | 'needs-review'
    | 'error'
    | 'approved'
    | 'in-production'
    | 'completed';
  
  interface StatusBadgeProps {
    status: OperationalStatus;
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
  }
  
function StatusBadge({ status, size = 'md', showIcon = true }: StatusBadgeProps) {
    const configs = {
      ready: {
        label: 'جاهز',
        icon: CheckCircle,
        bg: 'bg-[var(--status-ready-bg)]',
        text: 'text-[var(--status-ready)]',
        border: 'border-[var(--status-ready)]',
      },
      processing: {
        label: 'قيد المعالجة',
        icon: Loader2,
        bg: 'bg-[var(--status-processing-bg)]',
        text: 'text-[var(--status-processing)]',
        border: 'border-[var(--status-processing)]',
        animate: true,
      },
      validating: {
        label: 'التحقق',
        icon: Sparkles,
        bg: 'bg-[var(--status-validating-bg)]',
        text: 'text-[var(--status-validating)]',
        border: 'border-[var(--status-validating)]',
      },
      'needs-review': {
        label: 'يحتاج مراجعة',
        icon: AlertCircle,
        bg: 'bg-[var(--status-review-bg)]',
        text: 'text-[var(--status-review)]',
        border: 'border-[var(--status-review)]',
      },
      error: {
        label: 'خطأ',
        icon: XCircle,
        bg: 'bg-[var(--status-error-bg)]',
        text: 'text-[var(--status-error)]',
        border: 'border-[var(--status-error)]',
      },
      approved: {
        label: 'معتمد',
        icon: CheckCheck,
        bg: 'bg-[var(--status-approved-bg)]',
        text: 'text-[var(--status-approved)]',
        border: 'border-[var(--status-approved)]',
      },
      'in-production': {
        label: 'قيد الإنتاج',
        icon: Play,
        bg: 'bg-[var(--status-production-bg)]',
        text: 'text-[var(--status-production)]',
        border: 'border-[var(--status-production)]',
      },
      completed: {
        label: 'مكتمل',
        icon: CheckCircle,
        bg: 'bg-[var(--status-completed-bg)]',
        text: 'text-[var(--status-completed)]',
        border: 'border-[var(--status-completed)]',
      },
    };
  
    const config = configs[status];
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
      <span className={`inline-flex items-center gap-1.5 ${config.bg} ${config.text} border ${config.border} rounded-full ${sizes[size]} font-medium`}>
        {showIcon && (
          <Icon className={`${iconSizes[size]} ${config.animate ? 'animate-spin' : ''}`} />
        )}
        {config.label}
      </span>
    );
  }
  export default StatusBadge