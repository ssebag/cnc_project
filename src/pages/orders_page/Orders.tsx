import { useMemo, useState } from "react";

import {
  Search,
  MoreVertical,
  Eye,
  Clock3,
  CircleCheckBig,
} from "lucide-react";

const ordersData = [
  {
    id: "#1234",
    customer: "محمد أحمد",
    product: "قطع معدنية دائرية",
    status: "قيد المعالجة",
    statusType: "processing",
    time: "منذ 5 دقائق",
  },

  {
    id: "#1233",
    customer: "فاطمة علي",
    product: "لوحة فولاذية",
    status: "في الانتظار",
    statusType: "pending",
    time: "منذ 12 دقيقة",
  },

  {
    id: "#1232",
    customer: "خالد محمود",
    product: "تروس مخصصة",
    status: "مكتمل",
    statusType: "completed",
    time: "منذ 25 دقيقة",
  },

  {
    id: "#1231",
    customer: "سارة حسن",
    product: "إطار ألمنيوم",
    status: "قيد المعالجة",
    statusType: "processing",
    time: "منذ ساعة",
  },

  {
    id: "#1230",
    customer: "عمر يوسف",
    product: "قطع غيار صناعية",
    status: "مكتمل",
    statusType: "completed",
    time: "منذ ساعتين",
  },

  {
    id: "#1229",
    customer: "نورة عبدالله",
    product: "شبكة معدنية",
    status: "في الانتظار",
    statusType: "pending",
    time: "منذ 3 ساعات",
  },

  {
    id: "#1228",
    customer: "أحمد سعيد",
    product: "لوحة تحكم",
    status: "ملغي",
    statusType: "cancelled",
    time: "منذ 4 ساعات",
  },

  {
    id: "#1227",
    customer: "ليلى محمد",
    product: "أجزاء روبوت",
    status: "مكتمل",
    statusType: "completed",
    time: "منذ 5 ساعات",
  },
];

const tabs = [
  {
    key: "all",
    label: "الكل",
    count: 8,
  },

  {
    key: "processing",
    label: "قيد المعالجة",
    count: 2,
  },

  {
    key: "pending",
    label: "في الانتظار",
    count: 2,
  },

  {
    key: "completed",
    label: "مكتمل",
    count: 3,
  },
];

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

export default function Orders() {
  const [activeTab, setActiveTab] = useState("all");

  const [search, setSearch] = useState("");

  const [selectedOrder, setSelectedOrder] =
    useState(null);

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
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
    <div className="space-y-6" >
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
           إدارة الطلبات
        </h1>

        <p className="text-slate-500 mt-2">
          عرض وإدارة جميع طلبات CNC
        </p>
      </div>

      {/* Top Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const active = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() =>
                  setActiveTab(tab.key)
                }
                className={`
                  px-4 py-2 rounded-xl border transition-all text-sm md:text-base

                  ${
                    active
                      ? "bg-sky-500 border-sky-500 text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }
                `}
              >
                {tab.label} ({tab.count})
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-[340px]">
          <Search
            size={18}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="ابحث برقم العميل أو المنتج..."
            className="
              w-full
              bg-white
              border
              border-slate-200
              rounded-xl
              py-3
              pr-11
              pl-4
              outline-none
              focus:ring-2
              focus:ring-sky-200
            "
          />
        </div>
      </div>

      {/* Orders Table */}
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
                  الوقت
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
                    {order.time}
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

      {/* Counter */}
      <div className="text-sm text-slate-500">
        عرض {filteredOrders.length} من{" "}
        {ordersData.length} طلب
      </div>

      {/* Details */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 min-h-[250px]">
        {selectedOrder ? (
          <div>
            {/* Top */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl font-bold text-slate-800">
                    تفاصيل الطلب{" "}
                    {selectedOrder.id}
                  </h2>

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
                      ${statusStyle(
                        selectedOrder.statusType
                      )}
                    `}
                  >
                    {selectedOrder.status}
                  </span>
                </div>

                <p className="text-slate-500 mt-2">
                  العميل:{" "}
                  {selectedOrder.customer}
                </p>

                <p className="text-slate-500 mt-1">
                  المنتج:{" "}
                  {selectedOrder.product}
                </p>
              </div>

              <button
                onClick={() =>
                  setSelectedOrder(null)
                }
                className="
                  border
                  border-slate-200
                  px-4
                  py-2
                  rounded-xl
                  hover:bg-slate-50
                  transition-all
                "
              >
                إغلاق
              </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* Time */}
              <div className="bg-slate-50 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock3 size={18} />

                  <span>وقت المعالجة</span>
                </div>

                <p className="text-xl font-bold text-slate-800 mt-3">
                  {selectedOrder.time}
                </p>
              </div>

              {/* Status */}
              <div className="bg-slate-50 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-slate-500">
                  <CircleCheckBig size={18} />

                  <span>الحالة الحالية</span>
                </div>

                <p className="text-xl font-bold text-slate-800 mt-3">
                  {selectedOrder.status}
                </p>
              </div>

              {/* Preview */}
              <div className="bg-slate-50 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-slate-500">
                  <Eye size={18} />

                  <span>المعاينة</span>
                </div>

                <p className="text-xl font-bold text-slate-800 mt-3">
                  جاهز للعرض
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full min-h-[200px] flex flex-col items-center justify-center text-slate-400">
            <Eye size={52} />

            <p className="mt-4 text-lg">
              اختر طلب لعرض التفاصيل
            </p>
          </div>
        )}
      </div>
    </div>
  );
}