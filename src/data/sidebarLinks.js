import {
    LayoutDashboard,
    Package,
    ClipboardList,
    FileBarChart,
    Settings,
  } from "lucide-react";
  
  /* For Sidebar */
  export const sidebarLinks = [
    {
      title: "لوحة التحكم",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "الطلبات",
      path: "/orders",
      icon: ClipboardList,
    },
    {
      title: "المخزون",
      path: "/inventory",
      icon: Package,
    },
    {
      title: "التقارير",
      path: "/reports",
      icon: FileBarChart,
    },
    {
      title: "الإعدادات",
      path: "/settings",
      icon: Settings,
    },
  ];