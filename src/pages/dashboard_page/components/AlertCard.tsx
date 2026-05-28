import React from "react";

function AlertCard({title, description ,color , Icon}) {
  
  return (
    <div
      className={`${color} border rounded-2xl p-5 flex items-start gap-3 transition-all duration-300`}
    >
      <Icon className="mt-1" size={24} />

      <div>
        <h3 className="font-bold">
          {title}
        </h3>

        <p className="mt-1 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default AlertCard;