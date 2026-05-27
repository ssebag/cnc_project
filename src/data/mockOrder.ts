import type { OrderItem } from '../types/order';

export const mockOrderData: OrderItem[] = [
    {
        id: "#1234",
        customer: "محمد أحمد",
        product: "قطع معدنية دائرية",
        status: "قيد المعالجة",
        statusType: "processing",
        price:2500 
      },
    
      {
        id: "#1233",
        customer: "فاطمة علي",
        product: "لوحة فولاذية",
        status: "في الانتظار",
        statusType: "pending",
        price:2500 
      },
    
      {
        id: "#1232",
        customer: "خالد محمود",
        product: "تروس مخصصة",
        status: "مكتمل",
        statusType: "completed",
        price:2500 
      },
    
      {
        id: "#1231",
        customer: "سارة حسن",
        product: "إطار ألمنيوم",
        status: "قيد المعالجة",
        statusType: "processing",
        price:2500 
      },
    
      {
        id: "#1230",
        customer: "عمر يوسف",
        product: "قطع غيار صناعية",
        status: "مكتمل",
        statusType: "completed",
        price:2500 
      },
    
      {
        id: "#1229",
        customer: "نورة عبدالله",
        product: "شبكة معدنية",
        status: "في الانتظار",
        statusType: "pending",
        price:2500 
       },
 
      {
        id: "#1228",
        customer: "أحمد سعيد",
        product: "لوحة تحكم",
        status: "ملغي",
        statusType: "cancelled",
        price:2500
      },
    
      {
        id: "#1227",
        customer: "ليلى محمد",
        product: "أجزاء روبوت",
        status: "مكتمل",
        statusType: "completed",
        price:2500
      },
    
];
