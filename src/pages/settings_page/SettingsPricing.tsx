import React from 'react'
import { ComplexityFeesData, CuttingCostData , QuantityDiscountData , UrgantFeesData } from '../../data/mockSettingsPricing'

function SettingsPricing() {
  return (
    <div className='w-full border border-[#E5E7EB] mt-5 p-10 bg-white rounded-lg'>
        <h1 className='text-[22px] font-semibold pt-2'>إعدادات التسعير</h1>
        <p className='text-gray-400 pb-2'>تحديد معايير حسب الأسعار </p> 

        <div className='bg-[#F5F7FA] rounded-lg my-5'>
            
            <h1 className='text-[18px] font-semibold m-3 pt-5 px-5'>تكلفة القطع</h1>
            <div className='flex p-5'>
                <span className='w-[50%] mx-1'>
                    <label className='block p-2'>السعر لكل متر (ريال)</label>
                    <input type='number' value={CuttingCostData.cost_per_meter} className='w-[100%] border border-[#E5E7EB] rounded-md mx-2 p-2'/>
                </span>
                <span className='w-[50%] mx-1'>
                    <label className='block p-2'>تكلفة الإعداد (ريال)</label>
                    <input type='number' value={CuttingCostData.setup_cost} className='w-[100%] border border-[#E5E7EB] rounded-md mx-2 p-2'/>
                </span>
            </div>
        </div>

        <div className='bg-[#F5F7FA] rounded-lg my-5'>
            
            <h1 className='text-[18px] font-semibold m-3 pt-5 px-5'>رسوم التعقيد</h1>
            <div className='flex p-5'> 
                <span className='w-[33%] m-1'>
                    <label className='block p-2'>منخفض (%)</label>
                    <input type='number' value={ComplexityFeesData.low} className='w-[100%] border border-[#E5E7EB] rounded-md p-2'/>
                </span>
                <span className='w-[33%] m-1'>
                    <label className='block p-2'>متوسط (%)</label>
                    <input type='number' value={ComplexityFeesData.medium} className='w-[100%] border border-[#E5E7EB] rounded-md p-2'/>
                </span>
                <span className='w-[33%] m-1'>
                    <label className='block p-2'>عالي (%)</label>
                    <input type='number' value={ComplexityFeesData.high} className='w-[100%] border border-[#E5E7EB] rounded-md p-2'/>
                </span>
            </div>
        </div>

        <div className='bg-[#F5F7FA] rounded-lg my-5'>
            
           <h1 className='text-[18px] font-semibold m-3 pt-5 px-5'>خصومات الكمية</h1>
           <div className='flex p-5'> 
                <span className = 'w-[50%] mx-1'>
                    <label className='block p-2'>من 5-10 قطع (%)</label>
                    <input type='number' value={QuantityDiscountData.from_5_to_10} className='w-[100%] border border-[#E5E7EB] rounded-md mx-2 p-2'/>
                </span>
                <span className = 'w-[50%] mx-1'>
                    <label className='block p-2'>من 11-20 قطعة (%)</label>
                    <input type='number' value={QuantityDiscountData.from_11_to_20} className='w-[100%] border border-[#E5E7EB] rounded-md mx-2 p-2'/>
                </span>
            </div>

           <div className='flex p-5'> 
                <span className = 'w-[50%] mx-1'>
                    <label className='block p-2'>من 21-50 قطعة (%)</label>
                    <input type='number' value={QuantityDiscountData.from_21_to_50} className='w-[100%] border border-[#E5E7EB] rounded-md mx-2 p-2'/>
                </span>
                <span className = 'w-[50%] mx-1'>
                    <label className='block p-2'> أكثر من 50 قطعة (%)</label>
                    <input type='number' value={QuantityDiscountData.more_than_50} className='w-[100%] border border-[#E5E7EB] rounded-md mx-2 p-2'/>
                </span>
            </div>
        </div>

        <div className='my-5 bg-[#F5F7FA] p-5 rounded-lg my-5'>
            <h1 className='text-[18px] font-semibold m-3 pb-5'>رسوم الاستعجال</h1>

            <label className='block p-2'>رسوم إضافية للطلبات العاجلة (%)</label>
            <input type='number' value={UrgantFeesData.additional_fees_for_urgant_orders} className='w-[100%] border border-[#E5E7EB] rounded-md mx-2 p-2'/>
        </div>

      <div className='w-full mx-2 mt-12 flex justify-end'> 
        <button className='bg-gray-400 mx-2 py-3 px-5 text-white rounded-lg cursor-pointer hover:bg-gray-600 text-[18px]'>إعادة تعيين الوضع الافتراضي</button>
        <button className='bg-sky-500 mx-2 py-3 px-5 text-white rounded-lg cursor-pointer hover:bg-sky-600 text-[18px]'>حفظ التغييرات</button>
      </div>
     

    </div>
  )
}

export default SettingsPricing