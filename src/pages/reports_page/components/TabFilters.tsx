import type { ReportsPeriod } from '../../../types/reports';

interface TabFiltersProps {
  activeTab: ReportsPeriod;
  onTabChange: (tab: ReportsPeriod) => void;
}

const tabs = [
  { id: 'week' as const, label: 'أسبوع' },
  { id: 'month' as const, label: 'شهر' },
  { id: 'year' as const, label: 'سنة' },
];

export default function TabFilters({ activeTab, onTabChange }: TabFiltersProps) {
  return (
    <div className="flex gap-2 mb-6" dir="rtl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200 ${
            activeTab === tab.id
              ? 'bg-primary text-primary-foreground bg-sky-500'
              : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
