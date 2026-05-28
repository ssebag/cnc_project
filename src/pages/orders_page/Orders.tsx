import { useMemo, useState, useEffect } from "react";
import { mockOrderData } from '../../data/mockOrder';
import OrderHeader from './components/OrderHeader'
import TabFilters from "./components/TabFilters";
import OrderSearch from "./components/OrderSearch";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import Pagination from "./components/Pagination";
import  OrderDetails  from './components/OrderDetails';

export default function Orders() {
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

/* for pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
  
    return filteredOrders.slice(start, end);
  }, [filteredOrders, currentPage]);
  const totalPages = Math.ceil(
    filteredOrders.length / itemsPerPage
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, search]);

  const [viewingOrderDetails, setViewingOrderDetails] = useState<string | null>(null);
  
  if (viewingOrderDetails) {
    return <OrderDetails orderId={viewingOrderDetails} onBack={() => setViewingOrderDetails(null)} />;
  }
  return (
    <div className="space-y-6" >
      {/* Header */}
      <OrderHeader />

      {/* Top Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Tabs */}
        <TabFilters
          activeTab={activeTab}
          onTabChange={setActiveTab}
          orders={mockOrderData}
        />

        {/* Search */}
        <OrderSearch
          search={search}
          onSearchChange={setSearch}
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-right">
            <Table />

            <TableRow
              orders={paginatedOrders}
              onSelectOrder={setSelectedOrder}
            />
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      
    </div>
  );
}