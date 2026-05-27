import {
    AlertTriangle,
    CircleAlert,
    Info
} from "lucide-react";

export const alertStyles = {
    warning: {
       background: "bg-yellow-50",
       textStyle: "text-yellow-700",
       descriptionStyle: "text-red-600",
       border: "border-yellow-200",
       Icon: AlertTriangle,
       iconColor: "text-yellow-500"
     },
     error: {
         background: "bg-red-50",
         textStyle: "text-red-700",
         descriptionStyle: "text-red-600",
         border: "border-red-200",
         Icon: CircleAlert,
         iconColor: "text-red-500"
     },
     info: {
         background: "bg-blue-50",
         textStyle: "text-blue-700",
         descriptionStyle: "text-blue-600",
         border: "border-blue-200",
         Icon: Info,
         iconColor: "text-blue-500"
     }
 };

{/* <button className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-5 py-2 rounded-xl mt-4">
إضافة تحديث
</button> */}