import React from 'react'

function Header({title, description}) {
  return (
    <div>
        <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-slate-500 mt-2">
           {description}
        </p> 
    </div>
  )
}

export default Header
