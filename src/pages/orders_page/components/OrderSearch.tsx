import { Search } from "lucide-react";

interface OrderSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

function OrderSearch({ search, onSearchChange,}: OrderSearchProps) {
  return (
    <div className="relative w-full lg:w-[340px]">
      {/* Icon */}
      <Search
        size={18}
        className=" absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
      {/* Input */}
      <input
        type="text"
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
        placeholder="ابحث برقم العميل أو المنتج..."
        className="w-full bg-white border border-slate-200 rounded-xl
          py-3 pr-11 pl-4 outline-none focus:ring-2
          focus:ring-sky-200" />
    </div>
  );
}

export default OrderSearch;