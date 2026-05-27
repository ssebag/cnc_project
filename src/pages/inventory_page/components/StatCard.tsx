import type { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  subtext: string;
}

export default function StatCard({ icon, label, value, subtext }: StatCardProps) {
  return (
    <div className="bg-card  border-[#E5E7EB] bg-white border border-border rounded-[var(--radius-lg)] p-4 md:p-6">
      <div className="text-right">
        <div className="flex items-center justify-end mb-2">
          {icon}
        </div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground mt-2">{subtext}</p>
      </div>
    </div>
  );
}
