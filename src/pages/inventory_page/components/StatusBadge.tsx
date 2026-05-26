interface StatusBadgeProps {
  status: 'متوفر' | 'منخفض';
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'متوفر':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'منخفض':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs border ${getStatusStyles()} ${className}`}>
      {status}
    </span>
  );
}
