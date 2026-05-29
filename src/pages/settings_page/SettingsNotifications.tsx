import { useState } from 'react';
import SwitchButton from './components/SwitchButton'

function SettingsNotifications() {
   
   const [emailNotifications , setEmailNotifications] = useState(false); 
   const [messagesNotifications , setmessagesNotifications] = useState(false); 
   const [newOrdersNotifications , setNewOrdersNotifications] = useState(false); 
   const [lowInventoryNotifications , setLowInventoryNotifications] = useState(false); 
   const [machineStateNotifications , setMachineStateNotifications] = useState(false); 

   return (
    <div className='w-full flex flex-col'>
        <div className='w-full border border-[#E5E7EB] my-5 p-10 bg-white rounded-lg'>
            <h1 className='text-[22px] font-semibold pt-2'>تفضيلات الإشعارات</h1>
            <p className='text-gray-400 mb-5 pb-2'>اختر كيفية تلقي التنبيهات</p>
        
            <div className='flex justify-between'>
                <h1 className='text-[20px] p-2'>إشعارات البريد الإلكتروني</h1>
                <SwitchButton className={`my-3`} enabled={emailNotifications} onChange={()=>setEmailNotifications(emailNotifications => !emailNotifications)}/>
            </div>

            <div className='flex justify-between'>
                <h1 className='text-[20px] font-medium p-2'>إشعارات الرسائل النصية</h1>
                <SwitchButton className={`my-3`} enabled={messagesNotifications} onChange={()=>setmessagesNotifications(messagesNotifications => !messagesNotifications)}/>
            </div>


        </div>
       
        <div className='w-full border border-[#E5E7EB] my-5 p-10 bg-white rounded-lg'>
            <h1 className='text-[22px] font-semibold pt-2'>أنواع التنبيهات</h1>
            <p className='text-gray-400 mb-5 pb-2'>حدد التنبيهات التي تريد استلامها</p>
        
            <div className='flex justify-between'>
                <h1 className='text-[20px] p-2'>تنبيهات الطلبات الجديدة</h1>
                <SwitchButton className={`my-3`} enabled={newOrdersNotifications} onChange={()=>setNewOrdersNotifications(newOrdersNotifications => !newOrdersNotifications)}/>
            </div>

            <div className='flex justify-between'>
                <h1 className='text-[20px] font-medium p-2'>تنبيهات المخزون المنخفض</h1>
                <SwitchButton className={`my-3`} enabled={lowInventoryNotifications} onChange={()=>setLowInventoryNotifications(lowInventoryNotifications=> !lowInventoryNotifications)}/>
            </div>

            <div className='flex justify-between'>
                <h1 className='text-[20px] font-medium p-2'>تنبيهات حالة الماكينة</h1>
                <SwitchButton className={`my-3`} enabled={machineStateNotifications} onChange={()=>setMachineStateNotifications(machineStateNotifications => !machineStateNotifications)}/>
            </div>
        </div>
        
    </div>
  )
}

export default SettingsNotifications