import React from 'react'

function AlertCard({ title, description , Icon,  className }) {
  return (
    <div className={`${className} border rounded-2xl p-5 flex items-start gap-3 transition-all duration-300`}>
      
        <Icon className= 'mt-1' size={24} />

        <div>
          <h3 className='font-bold'>
              {title}
          </h3>

          <p className='mt-1 text-sm'>
              {description}
          </p>
        </div>
     </div>
  );
}

export default AlertCard

{/* <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
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
</div> */}



