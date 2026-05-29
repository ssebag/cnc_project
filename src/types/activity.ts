export interface ActivityItem {
    id: string;
    title: string;
    workProgress: number;
    status: 'قيد المعالجة' | 'يحتاج مراجعة' | 'قيد الإنتاج' |'مكتمل';
    Icon: React.ComponentType<any>;     
    time: string;
}
 