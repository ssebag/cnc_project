import {
    CircleAlert,
    Clock,
    CircleCheckBig,
    Play,
    TrendingUp,
    PackageCheck,
    FileBox,
    FileText,
    
  } from "lucide-react";
  
export   const activities = [
    {
      id: "#1234",
      title: "قطع معدنية دائرية",
      status: "قيد المعالجة",
      Icon:Clock,
      progress: 92,
      time: "منذ 5 دقائق",
    },

    {
      id: "#1233",
      title: "لوحة فولاذية",
      status: "يحتاج مراجعة",
      Icon:CircleAlert,
      progress: 67,
      time: "منذ 12 دقيقة",
    },

    {
      id: "#1232",
      title: "تروس مخصصة",
      status: "قيد الإنتاج",
      Icon:Play,
      progress: 95,
      time: "منذ 25 دقيقة",
    },

    {
      id: "#1231",
      title: "إطار ألمنيوم",
      status: "مكتمل",
      Icon:CircleCheckBig,
      progress: 88,
      time: "منذ ساعة",
    },
];
export const materials = [
    {
      name: "ألمنيوم",
      value: 156,
    },

    {
      name: "فولاذ",
      value: 89,
    },

    {
      name: "نحاس",
      value: 15,
    },
];
export const status = [
    {
        titleStatus:"الطلبات النشطة",
        numberStatus:"24",
        detailsStatus:"+12% من الأسبوع الماضي",
        IconStatus:PackageCheck,
        iconStyleStatusColor:"text-blue-500"        
    },
    {
        titleStatus:"كفاءة الإنتاج",
        numberStatus:"9%",
        detailsStatus:"+3% من الأسبوع الماضي",
        IconStatus:TrendingUp,
        iconStyleStatusColor:"text-emerald-600"     
    }
]
export const action = [
    {
        cardColor:"bg-blue-500",
        IconCard:PackageCheck,
        titleAction:"طلب جديد",
        detailAction:"ابدأ معالجة بالذكاء الاصطناعي"
    },
    {
        cardColor:"bg-emerald-600",
        IconCard:FileText,
        titleAction:"فاتورة جديدة",
        detailAction:"إنشاء فاتورة للزبون"
    },
    {
        cardColor:"bg-blue-500",
        IconCard:FileBox,
        titleAction:"مكتبة التصاميم",
        detailAction:"تصفح التصاميم المحفوظة"
    },
]
export const alert =[
    {
     type:" warning",   
     title:"مخزون منخفض",
     description:"مستوى الألمنيوم أقل من الحد الأدنى (15 كجم متبقية)"
    },
    {
     type:" error",   
     title:"خطأ في التحقق",
     description:"الطلب #1235 يحتوي على مسارات مفتوحة - يحتاج لإصلاح الذكاء الاصطناعي"
    },
    {
     type:" info",   
     title:"جدولة الصيانة",
     description:"الصيانة الدورية مستحقة بعد 20 ساعة تشغيل"
    }
]