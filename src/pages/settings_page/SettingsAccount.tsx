import React from 'react'
import { mockAccountData } from '../../data/mockAccount'

function SettingsAccount() {
  return (

    <div className='w-full border border-[#E5E7EB] mt-5  p-10 bg-white rounded-lg'>
      <h1 className='text-[22px] font-semibold pt-2'>معلومات الحساب</h1>
      <p className='text-gray-400 pb-2'>إدارة بيانات حسابك الشخصية</p>
      <div className='flex'>
        <span className='w-[50%] mx-2'>
          <label className='block p-2'>الاسم الأول</label>
          <input type='text' value={mockAccountData.first_name} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
        </span>
        <span className='w-[50%] mx-2'>
          <label className='block p-2'>الاسم الأخير</label>
          <input type='text' value={mockAccountData.last_name} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
        </span>
      </div>

      <div className='my-5'>
        <label className='block p-2'>البريد الإلكتروني</label>
        <input type='text' value={mockAccountData.email} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
      </div>
      
      <div className='my-5'>
       <label className='block p-2'>رقم الهاتف</label>
       <input dir='ltr' type='tel' value={mockAccountData.phone} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>  
      </div>

      <div>
       <label className='block p-2'>اسم الورشة</label>
       <input dir='rtl' type='text' value={mockAccountData.workshop_name} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>  
      </div>

      <div className='flex w-full my-5'>
        <span className='w-[50%] mx-2'>
          <label className='block p-2'>المدينة</label>
          <input type='text' value={mockAccountData.city} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
        </span>
        <span className='w-[50%] mx-2'>
          <label className='block p-2'>الرمز البريدي</label>
          <input type='text' value={mockAccountData.postal_code} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>
        </span>
      </div>

      <div>
       <label className='block p-2'>العنوان</label>
       <input dir='rtl' type='text' value={mockAccountData.address} className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>  
      </div>

      <hr className="border-gray-200 my-10"></hr>

      <h1 className='text-[22px] font-semibold pb-2'>تغيير كلمة المرور</h1>
      
      <div className='my-4'>
       <label className='block p-2'>كلمة المرور الحالية</label>
       <input dir='rtl' type='password' className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>  
      </div>

      <div className='my-4'>
       <label className='block p-2'>كلمة المرور الجديدة</label>
       <input dir='rtl' type='password' className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>  
      </div>
      
      <div className='my-4'>
       <label className='block p-2'>تأكيد كلمة المرور</label>
       <input dir='rtl' type='password' className='w-full border border-[#E5E7EB] rounded-md mx-2 p-2'/>  
      </div>

      <div className='w-full mx-2 mt-12 flex justify-end'> 
        <button className='bg-sky-500 py-3 px-5 text-white rounded-lg cursor-pointer hover:bg-sky-600 text-[18px]'>حفظ التغييرات</button>
      </div>

    </div>
  )
}

export default SettingsAccount