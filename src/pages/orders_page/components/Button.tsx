interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
  }
  
  export function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
  }: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
      danger: 'bg-destructive text-destructive-foreground hover:bg-red-700',
      ghost: 'hover:bg-muted text-foreground',
    };
  
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  export default Button;
  