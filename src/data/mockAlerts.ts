import { AlertTriangle, CircleAlert, Info } from "lucide-react";
  
import type { AlertItem } from '../types/alert';

export const mockAlertsData: AlertItem[] = [
   {
    id: '1',
    type:" warning",   
    title:"مخزون منخفض",
    description:"مستوى الألمنيوم أقل من الحد الأدنى (15 كجم متبقية)",
    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    Icon: AlertTriangle,
   },
   {
    id: '2',
    type:" error",   
    title:"خطأ في التحقق",
    description:"الطلب #1235 يحتوي على مسارات مفتوحة - يحتاج لإصلاح الذكاء الاصطناعي",
    color: "bg-red-50 border-red-200 text-red-800",
    Icon: CircleAlert,
   },
   {
    id: '3',
    type:" info",   
    title:"جدولة الصيانة",
    description:"الصيانة الدورية مستحقة بعد 20 ساعة تشغيل",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    Icon: Info,
   }
]

