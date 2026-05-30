import { TrendingUp, PackageCheck, FileBox, FileText} from "lucide-react";
import StatusCard from './components/StatusCard'
import ActionCard from './components/ActionCard'
import ActivityCard from './components/ActivityCard'
import MaterialCard from './components/MaterialCard'
import AlertCard from './components/AlertCard'
import Header from "../../component/Header";
import { mockActivitiesData } from '../../data/mockActivities'
import { mockMaterialsData } from '../../data/mockMaterials'
import { mockAlertsData } from '../../data/mockAlerts'

export default function Dashboard() {

  return (
    <div className="space-y-6">
      {/* Header */}
      <Header
      title="  نظام تشغيل ورش CNC"
      description="مدعوم بالذكاء الاصطناعي - لوحة التحكم التشغيلية" />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatusCard 
          title="الطلبات النشطة"
          number="24"
          description="+12% من الأسبوع الماضي"
          icon={<PackageCheck size={52} className="text-blue-500 bg-gray-100 p-3 rounded-sm" />}
        />
         <StatusCard 
          title="كفاءة الإنتاج"
          number="9%"
          description="+3% من الأسبوع الماضي"
          icon={<TrendingUp size={52} className="text-emerald-600 bg-gray-100 p-3 rounded-sm" />}
        />  
      </div>
     

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionCard 
           title= "طلب جديد"
           description="ابدأ معالجة بالذكاء الاصطناعي"
           icon= {<PackageCheck size={40}  />}
           color="bg-blue-500"
          />
           <ActionCard 
            title= "فاتورة جديدة"
            description="إنشاء فاتورة للزبون"
            icon= {<FileText size={40}  />}
            color= "bg-emerald-600"
          />
           <ActionCard 
            title= "مكتبة التصاميم"
            description="تصفح التصاميم المحفوظة"
            icon= {<FileBox size={40} />}
            color= "bg-blue-500"
          />
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        {mockAlertsData.map((item) => {
        
          return (
            <AlertCard key={item.id} {...item}  />
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
            {mockActivitiesData.map((item) => (
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
            {mockMaterialsData.map((item) => (
             <MaterialCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}