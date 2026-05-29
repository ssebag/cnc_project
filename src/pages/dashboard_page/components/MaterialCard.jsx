import React from 'react'

function MaterialCard({name, stock , maxStock}) {

  const stockPercentage = (stock / maxStock) * 100;

  return (
    <div>
        <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-slate-700">
            {name}
            </span>

            <span className="text-slate-500">
            {stock} كجم متبقي
            </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
            className="h-full bg-sky-500 rounded-full"
            style={{ width: `${Math.min(stockPercentage, 100)}%` }}
            />
        </div>
    </div>
  )
}

export default MaterialCard