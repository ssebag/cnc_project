interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: boolean;
    action?: React.ReactNode;

  }
  
  export function Card({ children, className = '', padding = true }: CardProps) {
    return (
      <div className={`bg-white border border-border rounded-[var(--radius-lg)] ${padding ? 'p-4 md:p-6' : ''} ${className}`}>
        {children}
      </div>
    );
  }
  
  interface CardHeaderProps {
    title: string;
    subtitle?: string;
    action?: React.ReactNode;
  }
  
  export function CardHeader({ title, subtitle, action }: CardHeaderProps) {
    return (
      <div className="flex items-start justify-between mb-4">
        <div className="flex">
          <h3>
            <label className="font-bold">{title} :</label>
            <label className="mr-2">{subtitle}</label>
          </h3>
        </div>
        {action && <div>{action}</div>}
      </div>
    );
  }
  