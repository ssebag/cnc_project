import React from 'react'
import { useMemo, useState } from "react";
import { mockOrderData } from '../../../data/mockOrder'
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
  
function Table({data}) {
  const [activeTab, setActiveTab] = useState("all");

  const [search, setSearch] = useState("");

  const [selectedOrder, setSelectedOrder] =
    useState(null);

  const filteredOrders = useMemo(() => {
    return mockOrderData.filter((order) => {
      const matchesTab =
        activeTab === "all" ||
        order.statusType === activeTab;

      const q = search.trim().toLowerCase();

      const matchesSearch =
        order.id.toLowerCase().includes(q) ||
        order.customer
          .toLowerCase()
          .includes(q) ||
        order.product.toLowerCase().includes(q);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden ">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[750px] text-right">
        {/* Head */}
        <thead className="bg-slate-50 text-slate-600 text-sm">
          <tr className="border-b border-gray-100">
            <th className="px-6 py-4 font-semibold">
              رقم الطلب
            </th>

            <th className="px-6 py-4 font-semibold">
              العميل
            </th>

            <th className="px-6 py-4 font-semibold">
              المنتج
            </th>

            <th className="px-6 py-4 font-semibold">
              الحالة
            </th>

            <th className="px-6 py-4 font-semibold">
              السعر
            </th>

            <th className="px-6 py-4 font-semibold">
              إجراءات
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {filteredOrders.map((order) => (
            <tr
              key={order.id}
              onClick={() =>
                setSelectedOrder(order)
              }
              className="
                border-t
                hover:bg-slate-50
                transition-all
                cursor-pointer
                border-b
                border-gray-100
              "
            >
              {/* ID */}
              <td className="px-6 py-4 text-sky-500 font-bold whitespace-nowrap">
                {order.id}
              </td>

              {/* Customer */}
              <td className="px-6 py-4 whitespace-nowrap">
                {order.customer}
              </td>

              {/* Product */}
              <td className="px-6 py-4 whitespace-nowrap">
                {order.product}
              </td>

              {/* Status */}
              <td className="px-6 py-4">
                <span
                  className={`
                    inline-flex
                    items-center
                    px-3
                    py-1
                    rounded-full
                    border
                    text-xs
                    font-medium
                    whitespace-nowrap
                    ${statusStyle(
                      order.statusType
                    )}
                  `}
                >
                  {order.status}
                </span>
              </td>

              {/* Time */}
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
    </table>
    </div>
  </div>
  )
}

export default Table