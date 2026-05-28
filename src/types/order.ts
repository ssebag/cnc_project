export type OrdersFilters = 'all' | 'processing' | 'pending' | 'completed';

export interface OrderItem {
    id: string;
    customer: string;
    product: string;
    status: 'قيد المعالجة' | 'في الانتظار' | 'مكتمل' | 'ملغي' ;
    statusType:'processing'|'pending'|'completed'|'cancelled',
    price: number;
  }
  