import { SystemSettingsData ,SystemInfoData } from '../../data/mockSystemSettingsData'

function SettingsSystem() {
  return (
   <div className='w-full my-5'> 
        <div className='w-full border border-[#E5E7EB] p-10 bg-white rounded-lg'>
            <h1 className='text-[22px] font-semibold pt-2'>إعدادات النظام</h1>
            <p className='text-gray-400 pb-2'>التحكم في سلوك النظام</p>

            <label className='block mx-1 my-2 mt-5'>اللغة</label>
            <select className='border rounded-lg p-3 border-[#E5E7EB] w-[100%]'>
             {
                SystemSettingsData.language.map((lang)=> (
                    <option>{lang}</option>
                ))
             }
            </select>
        
            <label className='block mx-1 my-2 mt-5'>المنطقة الزمنية</label>
            <select className='border rounded-lg p-3 border-[#E5E7EB] w-[100%]'>
               {
                 SystemSettingsData.timezone.map((timezone)=> (
                    <option>{timezone}</option>
                 ))
               }
            </select>
        
            <label className='block mx-1 my-2 mt-5'>العملة</label>
            <select className='border rounded-lg p-3 border-[#E5E7EB] w-[100%]'>
              {
                SystemSettingsData.currency.map((curr)=> (
                    <option>{curr}</option>
                ))
              }
            </select>
            
            <label className='block mx-1 my-2 mt-5'>وحدة القياس</label>
            <select className='border rounded-lg p-3 border-[#E5E7EB] w-[100%]'>
              {
                SystemSettingsData.measuring_unit.map((mu)=> (
                    <option>{mu}</option>
                ))
              }
            </select>
        </div>

        <div className='w-full border border-[#E5E7EB] my-2 p-10 bg-white rounded-lg'>
            <h1 className='text-[22px] font-semibold pb-2'>النسخ الاحتياطي والأمان</h1>
            <div className='flex justify-between items-center my-5'>
                <div>
                    <p className='p-3 text-[18px]'>النسخ الاحتياطي التلقائي</p> 
                    <p className='px-3 text-[15px] text-gray-400'>نسخ احتياطي يومي للبيانات</p> 
                </div>
                <button className='px-3 h-12 bg-slate-600 hover:bg-slate-700 text-white rounded-lg cursor-pointer'>تفعيل</button>
            </div>

            <div className='flex justify-between items-center my-5'>
                <div>
                    <p className='p-3 text-[18px]'>آخر نسخة احتياطية</p> 
                    <p className='px-3 text-[15px] text-gray-400'>2026-04-29 03:00 صباحاً</p> 
                </div>
                <button className='px-3 h-12 bg-zinc-200 hover:bg-zinc-100 rounded-lg cursor-pointer'>استعادة</button>
            </div>

            <hr className="border-gray-200 my-10"></hr>
            <button className='bg-sky-500 hover:bg-sky-600 w-[100%] p-2 text-white rounded-lg cursor-pointer'>إنشاء نسخة احتياطية الآن</button>
        </div>

        <div className='w-full border border-[#E5E7EB] my-2 p-10 bg-white rounded-lg'>
            <h1 className='text-[22px] font-semibold pb-2'>معلومات النظام</h1>
                <div className='flex justify-between'> 
                    <p className='text-gray-400 text-[20px] p-2'>الإصدار</p>
                    <p className='text-[20px] p-2'>{SystemInfoData.app_version}</p>
                </div>
                    
                <div className='flex justify-between'>
                    <p className='text-gray-400 text-[20px] p-2'>اخر تحديث</p>
                    <p className='text-[20px] p-2'>{SystemInfoData.last_update}</p>
                </div>
                
                <div className='flex justify-between'> 
                    <p className='text-gray-400 text-[20px] p-2'>حالة الخادم</p>
                    <p className={`text-[20px] p-2 ${SystemInfoData.server_state ==='متصل'? 'text-green-400' : 'text-red-400'}`}>{SystemInfoData.server_state}</p>
                </div>   
        </div>

    </div>
  )
}

export default SettingsSystem