import React from 'react'
import { statusColors } from '../../../helper'

function ActivityCard({id, title, status, Icon , workProgress, time}) {
    
  return (
    <div className="border border-gray-100 rounded-2xl p-4"
    >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-slate-400 text-sm">
                {time}
            </div>
            <div >
            <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sky-500 font-bold">
                {id}
                </span>

                <h3 className="font-bold text-slate-700">
                {title}
                </h3>
                <p className={`mt-2 flex gap-2 items-center 
                border  p-1.5 rounded-4xl text-xs ${statusColors[status]}
                    })()
                }`}>
                <Icon size={15}/>
                {status}
                </p>
            </div>
            {/* workProgress */}
            <div className="mt-4 flex gap-5 items-center justify-end">
            <div className="w-[50%] h-2 bg-gray-200 rounded-full overflow-hidden ">
                <div
                className="h-full bg-emerald-500 rounded-full"
                style={{
                    width: `${workProgress}%`,
                }}
                />
            </div>

            <div className="text-sm text-slate-600">
                {workProgress}%
            </div>
            </div>                 
            </div>
        </div>    
  </div>
  )
}

export default ActivityCard