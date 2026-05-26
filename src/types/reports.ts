export type ReportsPeriod = 'week' | 'month' | 'year';

export interface MetricCardData {
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  iconType: 'dollar' | 'package' | 'target' | 'clock';
  trend: 'up' | 'down';
}

export interface RevenueData {
  month: string;
  monthArabic: string;
  value: number;
  orders: number;
}

export interface MaterialWasteItem {
  id: string;
  name: string;
  wastage: number;
  savings: number;
  value: number;
}

export interface AIMetric {
  label: string;
  value: string | number;
  subtitle: string;
  bgColor: 'blue' | 'green' | 'light-blue';
}

export interface Product {
  id: string;
  rank: number;
  name: string;
  orders: number;
  revenue: number;
}

export interface MachineStats {
  productiveHours: number;
  downtimeHours: number;
}
