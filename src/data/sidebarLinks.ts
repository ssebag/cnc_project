import type { Links } from '../types/link';
import { LayoutDashboard, Package, ClipboardList, FileBarChart, Settings} from "lucide-react";
  
export const links: Links[] = [
    {
        id: '1',
        title: "لوحة التحكم",
        path: "/",
        icon: LayoutDashboard,
      },
      {
        id: '2',
        title: "الطلبات",
        path: "/orders",
        icon: ClipboardList,
      },
      {
        id: '3',
        title: "المخزون",
        path: "/inventory",
        icon: Package,
      },
      {
        id: '4',
        title: "التقارير",
        path: "/reports",
        icon: FileBarChart,
      },
      {
        id: '5',
        title: "الإعدادات",
        path: "/settings",
        icon: Settings,
      },
];
