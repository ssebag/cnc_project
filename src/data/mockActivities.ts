import type { ActivityItem } from '../types/activity';
import { CircleAlert, Clock, CircleCheckBig, Play } from "lucide-react";

export const mockActivitiesData: ActivityItem[] = [
    {
        id: "#1234",
        title: "قطع معدنية دائرية",
        workProgress:92,
        status: "قيد المعالجة",
        Icon:Clock,
        time: "منذ 5 دقائق",
      },
  
      {
        id: "#1233",
        title: "لوحة فولاذية",
        workProgress:67,
        status: "يحتاج مراجعة",
        Icon:CircleAlert,
        time: "منذ 12 دقيقة",
      },
  
      {
        id: "#1232",
        title: "تروس مخصصة",
        workProgress:95,
        status: "قيد الإنتاج",
        Icon:Play,
        time: "منذ 25 دقيقة",
      },
  
      {
        id: "#1231",
        title: "إطار ألمنيوم",
        workProgress:88,
        status: "مكتمل",
        Icon:CircleCheckBig,
        time: "منذ ساعة",
      },
];
