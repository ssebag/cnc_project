import {
    AlertTriangle,
    CircleAlert,
    Info
} from "lucide-react";

import StatusCard from './../components/StatusCard/StatusCard'
import ActionCard from './../components/ActionCard/ActionCard'
import ActivityCard from './../components/ActivityCard/ActivityCard'
import MaterialCard from './../components/MaterialCard/MaterialCard'


/* for testing */
import { activities, materials, status , action } from "./../data/testing";

export default function DashboardPage() {

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
          نظام تشغيل ورش CNC
        </h1>

        <p className="text-slate-500 mt-2">
          مدعوم بالذكاء الاصطناعي - لوحة التحكم التشغيلية
        </p>
      </div>

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
        {/* Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex items-start gap-3">
          <AlertTriangle className="text-yellow-500 mt-1" />

          <div>
            <h3 className="font-bold text-yellow-700">
              مخزون منخفض
            </h3>

            <p className="text-yellow-600 mt-1">
              مستوى الألمنيوم أقل من الحد الأدنى
              (15 كجم متبقية)
            </p>
          </div>
        </div>

        {/* Error */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-3">
          <CircleAlert className="text-red-500 mt-1" />

          <div>
            <h3 className="font-bold text-red-700">
              خطأ في التحقق
            </h3>

            <p className="text-red-600 mt-1">
              الطلب #1235 يحتوي على مسارات
              مفتوحة - يحتاج لإصلاح الذكاء
              الاصطناعي
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Info className="text-blue-500 mt-1" />

            <div className="flex-1">
              <h3 className="font-bold text-blue-700">
                جدولة الصيانة
              </h3>

              <p className="text-blue-600 mt-1">
                الصيانة الدورية مستحقة بعد 20
                ساعة تشغيل
              </p>
            </div>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-5 py-2 rounded-xl mt-4">
            إضافة تحديث
          </button>
        </div>
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