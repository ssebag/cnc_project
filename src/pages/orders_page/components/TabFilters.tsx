import React from "react";

const tabs = [
  { key: "all", label: "الكل" },
  { key: "processing", label: "قيد المعالجة" },
  { key: "pending", label: "في الانتظار" },
  { key: "completed", label: "مكتمل" },
];

interface TabFiltersProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  orders: any[];
}

function TabFilters({
  activeTab,
  onTabChange,
  orders,
}: TabFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const active = activeTab === tab.key;

        const count =
          tab.key === "all"
            ? orders.length
            : orders.filter(
                (order) =>
                  order.statusType === tab.key
              ).length;

        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`
              px-4 py-2 rounded-xl border transition-all text-sm md:text-base
              ${
                active
                  ? "bg-sky-500 border-sky-500 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }
            `}
          >
            {tab.label} ({count})
          </button>
        );
      })}
    </div>
  );
}

export default TabFilters;