import type { MetricCardData, RevenueData, MaterialWasteItem, AIMetric, Product, MachineStats } from '../types/reports';

export const metricsDataConfig: MetricCardData[] = [
  {
    label: 'إجمالي الإيرادات',
    value: '182,450 ريال',
    change: 18,
    changeLabel: 'من الشهر الماضي',
    iconType: 'dollar',
    trend: 'up',
  },
  {
    label: 'الطلبات المكتملة',
    value: '342',
    change: 24,
    changeLabel: 'عن الشهر الماضي',
    iconType: 'package',
    trend: 'up',
  },
  {
    label: 'معدل النجاح',
    value: '94.2%',
    change: 2.1,
    changeLabel: 'تحسن',
    iconType: 'target',
    trend: 'up',
  },
  {
    label: 'متوسط وقت الإنتاج',
    value: '2.3 ساعة',
    change: -0.5,
    changeLabel: 'ساعة تحسن',
    iconType: 'clock',
    trend: 'down',
  },
];

export const revenueData: RevenueData[] = [
  { month: 'يناير', monthArabic: 'يناير', value: 45280, orders: 67 },
  { month: 'فبراير', monthArabic: 'فبراير', value: 52100, orders: 78 },
  { month: 'مارس', monthArabic: 'مارس', value: 48900, orders: 72 },
  { month: 'أبريل', monthArabic: 'أبريل', value: 58200, orders: 85 },
  { month: 'مايو', monthArabic: 'مايو', value: 62450, orders: 92 },
];

export const materialsWasteData: MaterialWasteItem[] = [
  {
    id: '1',
    name: 'ألمنيوم',
    wastage: 8.2,
    savings: 45,
    value: 2025,
  },
  {
    id: '2',
    name: 'فولاذ',
    wastage: 12.5,
    savings: 28,
    value: 980,
  },
  {
    id: '3',
    name: 'نحاس',
    wastage: 6.8,
    savings: 15,
    value: 1425,
  },
  {
    id: '4',
    name: 'فولاذ مقاوم',
    wastage: 10.1,
    savings: 32,
    value: 2720,
  },
];

export const aiMetrics: AIMetric[] = [
  {
    label: 'معالجات مكتملة',
    value: 305,
    subtitle: 'من إجمالي 342 معالجة',
    bgColor: 'blue',
  },
  {
    label: 'تكلفة الاستخدام',
    value: '259.25 ريال',
    subtitle: 'بمعدل 0.85 ريال لكل معالجة',
    bgColor: 'green',
  },
  {
    label: 'كفاءة تقليل الهدر',
    value: '15.4%',
    subtitle: 'وفر 28,097.3 ريال من الموارد',
    bgColor: 'light-blue',
  },
];

export const topProducts: Product[] = [
  { id: '1', rank: 1, name: 'قطعة دائرية', orders: 45, revenue: 18900 },
  { id: '2', rank: 2, name: 'ترس صناعية', orders: 32, revenue: 25600 },
  { id: '3', rank: 3, name: 'إطارات ألمنيوم', orders: 28, revenue: 22400 },
  { id: '4', rank: 4, name: 'لوحات تحكم', orders: 18, revenue: 21600 },
  { id: '5', rank: 5, name: 'شبكات معدنية', orders: 12, revenue: 9600 },
];

export const machineStats: MachineStats = {
  productiveHours: 678,
  downtimeHours: 32,
};
