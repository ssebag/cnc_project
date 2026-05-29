function Table() {
  return (
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
  );
}

export default Table;