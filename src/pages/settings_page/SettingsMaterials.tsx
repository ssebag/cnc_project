import SettingsMaterialsRows from './components/SettingsMaterialsRows'

function SettingsMaterials() {
  return (
    <div className='w-full border border-[#E5E7EB] my-5 p-10 bg-white rounded-lg'>
        <div className='flex justify-between items-center'>
            <div> 
                <h1 className='text-[22px] font-semibold pt-2'>إدارة المواد</h1>
                <p className='text-gray-400 pb-2'>تحديد المواد المتاحة وأسعارها</p>
            </div>
            <button className='bg-sky-500 p-2 px-3 rounded-lg text-white cursor-pointer hover:bg-sky-600'>إضافة مادة</button>

        </div>

        <div className='w-full'>
            <table className='w-[100%]'>
                <thead className='w-[100%]'>
                    <th className='md:px-10 py-5'>المادة</th>
                    <th className='md:px-10 py-5'>السعر/كجم (ريال)</th>
                    <th className='md:px-10 py-5'>الكمية المتاحة</th>
                    <th className='md:px-10 py-5'>حد التنبيه</th>
                    <th className='md:px-10 py-5'>الحالة</th>
                </thead>
               
                <SettingsMaterialsRows/>
            
            </table>
        </div>

    </div>
  )
}

export default SettingsMaterials