interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
  }
  
  export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm text-foreground">
            {label}
          </label>
        )}
        <input
          className={`w-full px-4 py-2 bg-input-background border border-input rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-ring text-foreground ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
  