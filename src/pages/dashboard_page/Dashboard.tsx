import React from 'react';
import {
  AlertTriangle,
  CircleAlert,
  Info
} from "lucide-react";

import StatusCard from './components/StatusCard'
import ActionCard from './components/ActionCard'
import ActivityCard from './components/ActivityCard'
import MaterialCard from './components/MaterialCard'
import AlertCard from './components/AlertCard'
import { activities, materials, status , action , alert } from "./.././../data/testing";
import DashbardHeader from "./components/DashbardHeader";

interface StatusStyleResult {
  classes: string;
  Icon: React.ComponentType<any>;
}

export const alertStyle = (type: string): StatusStyleResult => {
  switch (type.trim()) {
    case "warning":
      return {
        classes: "bg-yellow-50 border-yellow-200 text-yellow-800",
        Icon: AlertTriangle,
      };

    case "error":
      return {
        classes: "bg-red-50 border-red-200 text-red-800",
        Icon: CircleAlert,
      };
      case "info":
        return {
          classes: "bg-blue-50 border-blue-200 text-blue-800",
          Icon: Info,
        };
  
      default:
        return {
          classes: "bg-slate-50 border-slate-200 text-slate-800",
          Icon: Info,
        };
      }
}


export default function Dashboard() {

  return (
    <div className="space-y-6">
      {/* Header */}
      <DashbardHeader />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {status.map((item) => (
            <StatusCard key={item.id} {...item} />
            ))}
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {action.map((item) => (
            <ActionCard key={item.id} {...item} />
            ))}
      </div>

      {/* Alerts */}
      <div className="space-y-4">
      {alert.map((item) => {
        const { classes, Icon } = alertStyle(item.type);

        return (
          <AlertCard 
            key={item.id} 
            {...item} 
            className={classes} 
            Icon={Icon}         
          />
        );
      })}
      </div>

      <div className="flex flex-col gap-5 lg:flex-row  justify-between">
        {/* Current Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm lg:w-[64%]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              النشاط الحالي
            </h2>

            <p className="text-slate-500 mt-1">
              تتبع معالجة الطلبات في الوقت
              الفعلي
            </p>
          </div>

          <div className="space-y-4">
            {activities.map((item) => (
              <ActivityCard key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="bg-white rounded-2xl p-6 shadow-sm lg:w-[35%]">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            استخدام المواد
          </h2>

          <div className="space-y-6">
            {materials.map((item) => (
             <MaterialCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}