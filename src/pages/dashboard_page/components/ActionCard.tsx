import React from 'react'

function ActionCard({color, icon, title, description}) {
  return (
    <div className={`${color} text-white rounded-2xl p-6 flex flex-col gap-5`}>
      <div className="text-white">
        {icon}
      </div>
     <div>
       <h2 className="text-2xl font-bold">
         {title} 
       </h2>

       <p className="mt-2 text-white/80">
         {description} 
       </p>
     </div>
    </div>    
  )
}

export default ActionCard