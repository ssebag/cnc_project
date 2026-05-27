import React from 'react'

function StatusCard({titleStatus , numberStatus, detailsStatus, IconStatus, iconStyleStatusColor}) {
  return (
    <div className="flex justify-between bg-white rounded-2xl p-6 shadow-sm">
         <div>
            <h3 className="text-slate-500">
              {titleStatus}
            </h3>

            <div className="text-4xl font-bold mt-3">
              {numberStatus}
            </div>

            <p className="text-emerald-600 mt-2">
              {detailsStatus}
            </p>
         </div>
         <IconStatus size={52} className={`${iconStyleStatusColor}  bg-gray-100 p-3 rounded-sm `} />
        </div>
  )
}

export default StatusCard