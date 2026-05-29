import { MachineSettingsData , MaintenanceDetailsData } from "../../data/mockMachineData"

function SettingsMachine() {
  return (
    <div className='w-full border border-[#E5E7EB] my-5 p-10 bg-white rounded-lg'>
      <h1 className='text-[22px] font-semibold pt-2'>إعدادات الماكينة</h1>
      <p className='text-gray-400 pb-2'>تكوين معاملات ماكينة CNC</p>
      
      <div className='my-5'>
            <label className='block p-2'>اسم الماكينة</label>
            <input type='text' value={MachineSettingsData.machine_name} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
      </div>
      
      <div className='flex my-5'>
              <span className="w-[50%] mx-1">
                <label className='block p-2'>منطقة العمل - X (ملم)</label>
                <input type='number' value={MachineSettingsData.X_working_area} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
              </span>
              <span className="w-[50%] mx-1">
                <label className='block p-2'>منطقة العمل - Y (ملم)</label>
                <input type='number' value={MachineSettingsData.Y_working_area} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
              </span>
      </div>

      <div className='flex my-5'>
              <span className="w-[50%] mx-1">
                <label className='block p-2'>منطقة العمل - Z (ملم)</label>
                <input type='number' value={MachineSettingsData.Z_working_area} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
              </span>
              <span className="w-[50%] mx-1">
                <label className='block p-2'>دقة القطع (ملم)</label>
                <input type='number' value={MachineSettingsData.cutting_accuracy} step='0.01' className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
              </span>
      </div>

      <div className='flex my-5'>
              <span className='w-[50%] mx-1'>
                  <label className='block p-2'>قطر الأداة الافتراضي (ملم)</label>
                <input type='number' value={MachineSettingsData.default_tool_diameter} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
              </span>
              <span className='w-[50%] mx-1'>
                <label className='block p-2'>عمق القطع الأقصى (ملم)</label>
                <input type='number' value={MachineSettingsData.max_cutting_depth} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
              </span>
      </div>

      <hr className="border-gray-200 my-10"></hr>
      
      <h1 className='text-[22px] font-semibold pb-2'>تفاصيل الصيانة</h1>

      <div className='flex my-5'>
              <span className='w-[50%] mx-2'>
                <label className='block p-2'>ساعات التشغيل حتى الصيانة</label>
                <input type='number' value={MaintenanceDetailsData.power_on_hours} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
              </span>
              <span className='w-[50%] mx-2'>
                <label className='block p-2'>آخر صيانة</label>
                <input type='date' className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
              </span>
      </div>  

      <div className='w-full mx-2 mt-12 flex justify-end'> 
        <button className='bg-gray-400 mx-2 py-3 px-5 text-white rounded-lg cursor-pointer hover:bg-gray-600 text-[18px]'>إعادة تعيين الوضع الافتراضي</button>
        <button className='bg-sky-500 mx-2 py-3 px-5 text-white rounded-lg cursor-pointer hover:bg-sky-600 text-[18px]'>حفظ التغييرات</button>
      </div>
     
    </div>
  )
}

export default SettingsMachine