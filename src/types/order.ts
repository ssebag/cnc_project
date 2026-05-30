export type OrdersFilters = 'all' | 'processing' | 'pending' | 'completed';

export interface OrderItem {
    id: string;
    customer: string;
    product: string;
    material:string,
    quantity: number,
    status: 'قيد المعالجة' | 'في الانتظار' | 'مكتمل' | 'ملغي' ;
    priority:'عالية'|'متوسطة'|'منخفضة';
    price: number;
    order_date: string;
    delivery_date: string;
  }
  