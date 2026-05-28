import React from 'react'

function StatusCard({title , number, description, icon}) {
  return (
    <div className="flex justify-between bg-white rounded-2xl p-6 shadow-sm">
         <div>
            <h3 className="text-slate-500">
              {title}
            </h3>

            <div className="text-4xl font-bold mt-3">
              {number}
            </div>

            <p className="text-emerald-600 mt-2">
              {description}
            </p>
         </div>
         {icon}
     
        </div>
  )
}

export default StatusCard