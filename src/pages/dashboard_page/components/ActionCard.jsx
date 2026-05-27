import React from 'react'

function ActionCard({cardColor, IconCard, titleAction, detailAction}) {
  return (
    <div className={`${cardColor} text-white rounded-2xl p-6 flex flex-col gap-5`}>
    <IconCard size={40} className="text-white" />
     <div>
       <h2 className="text-2xl font-bold">
         {titleAction} 
       </h2>

       <p className="mt-2 text-white/80">
         {detailAction} 
       </p>
     </div>
    </div>    
  )
}

export default ActionCard