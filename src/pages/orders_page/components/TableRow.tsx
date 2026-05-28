import { MoreVertical } from "lucide-react";

function statusStyle(type) {
  switch (type) {
    case "processing":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "pending":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "completed":
      return "bg-green-100 text-green-700 border-green-200";
    case "cancelled":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}

function TableRow({ orders, onSelectOrder }) {
  return (
    <tbody>
      {orders.map((order) => (
        <tr
          key={order.id}
          onClick={() => onSelectOrder(order)}
          className="border-t hover:bg-slate-50 transition-all cursor-pointer border-b border-gray-100">
          <td className="px-6 py-4 text-sky-500 font-bold whitespace-nowrap">
            {order.id}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {order.customer}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {order.product}
          </td>
          <td className="px-6 py-4">
            <span
              className={`inline-flex  items-center px-3 py-1 rounded-full border text-xs 
              font-medium whitespace-nowrap ${statusStyle(order.statusType)}`}>
              {order.status}
            </span>
          </td>
          <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
            {order.price}
          </td>

          {/* Actions */}
          <td className="px-6 py-4">
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <MoreVertical size={18} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableRow;