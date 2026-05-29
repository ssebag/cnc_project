/* for priority */
export const priorityColors: Record<string, string> = {
   عالية: "text-red-600",
   متوسطة: "text-yellow-600",
   منخفضة: "text-gray-600",
 };

/* for alert color */ 

export const statusColors: Record<string, string> = {
   "قيد المعالجة":
     "bg-blue-100 text-blue-800 border-blue-200",
   "في الانتظار":
    "bg-green-100 text-green-800 border-green-200",
   "يحتاج مراجعة":
     "border-amber-500 bg-amber-100 text-amber-600",
   "قيد الإنتاج":
     "border-cyan-500 bg-cyan-100 text-cyan-600",
   "مكتمل":
     "border-purple-500 bg-purple-100 text-purple-600",
   "ملغي":
     "bg-red-100 text-red-800 border-red-200",
}; 

    