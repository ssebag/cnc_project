import React from 'react'

function OrderDetailsRow({title , info, classStyle}) {
  return (
    <div className="space-y-4">
        <div className="text-right">
        <p className="mb-1">
            <label className="font-bold">{title}</label>
            <label className={classStyle}> {info}</label>
        </p>
        </div>
    </div>
  )
}

export default OrderDetailsRow