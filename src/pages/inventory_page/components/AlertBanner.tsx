import type { ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';

interface AlertBannerProps {
  title: string;
  message: string;
  icon?: ReactNode;
}

export default function AlertBanner({ title, message, icon = <TriangleAlert /> }: AlertBannerProps) {
  return (
    <div className="bg-yellow-50 border-yellow-200 border rounded-[var(--radius-md)] p-4">
      <div className="flex items-start gap-3">
        <div className="text-yellow-500 flex-shrink-0 mt-0.5">
          {icon && <TriangleAlert className="w-5 h-5" />}
        </div>
        <div className="flex-1">
          <h4 className="text-yellow-800 mb-1 text-right font-medium">{title}</h4>
          <p className="text-sm text-yellow-800 text-right">{message}</p>
        </div>
      </div>
    </div>
  );
}
