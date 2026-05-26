import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-red-700',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
