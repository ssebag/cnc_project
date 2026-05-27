import { useState } from 'react';
import { Package, TrendingDown, TriangleAlert, Plus } from 'lucide-react';
import type { InventoryItem } from '../../types/inventory';
import { mockInventoryData } from '../../data/mockInventory';
import InventoryHeader from './components/InventoryHeader';
import StatCard from './components/StatCard';
import AlertBanner from './components/AlertBanner';
import SearchBar from './components/SearchBar';
import Button from './components/Button';
import DesktopTable from './components/DesktopTable';
import MobileCard from './components/MobileCard';

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [inventoryData , setInventoryData] = useState<InventoryItem[]>(mockInventoryData);

  // Filter items based on search query
  const filteredItems = inventoryData.filter((item) =>
    item.name.includes(searchQuery) || item.type.includes(searchQuery)
  );

  // Calculate statistics
  const lowStockItems = inventoryData.filter((item) => item.status === 'منخفض');
  const totalStock = inventoryData.reduce((sum, item) => sum + item.stock, 0);
  const totalValue = inventoryData.reduce((sum, item) => sum + item.stock * item.price, 0);

  // Handle edit and delete
  const handleEdit = (id: string) => {
    console.log('Edit item:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete item:', id);
    setInventoryData((inventoryData) => inventoryData.filter(item => (item.id !== id)))
  };

  const handleAddNew = () => {
    console.log('Add new material');
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] " >
      <main className="w-full p-4 md:p-6 lg:p-8 pb-20 md:pb-8">
        <div className="space-y-6">
          {/* Header */}
          <InventoryHeader
            title="إدارة المخزون"
            subtitle="تتبع وإدارة موارد التصنيع"
          />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={<Package className="w-8 h-8 text-primary text-sky-500" />}
              label="إجمالي المواد"
              value={inventoryData.length}
              subtext={`${totalStock} كجم إجمالي`}
            />
            <StatCard
              icon={
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                </div>
              }
              label="القيمة الإجمالية"
              value={totalValue.toLocaleString()}
              subtext="ريال سعودي"
            />
            <StatCard
              icon={
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <TriangleAlert className="w-5 h-5 text-yellow-600" />
                </div>
              }
              label="مخزون منخفض"
              value={lowStockItems.length}
              subtext="مادة تحتاج تجديد"
            />
            <StatCard
              icon={
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary text-sky-500" />
                </div>
              }
              label="أنواع المواد"
              value={inventoryData.length}
              subtext="فئات مختلفة"
            />
          </div>

          {/* Alert Banner */}
          {lowStockItems.length > 0 && (
            <AlertBanner
              title={`${lowStockItems.length} مواد تحتاج إعادة تخزين`}
              message={`المواد التالية أقل من الحد الأدنى: ${lowStockItems.map((item) => item.name).join('، ')}`}
            />
          )}

          {/* Search and Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <SearchBar
              placeholder="بحث في المواد..."
              value={searchQuery}
              onChange={setSearchQuery}
            />
            <Button
              variant="primary"
              icon={<Plus className="w-4 h-4" />}
              onClick={handleAddNew}
              className="whitespace-nowrap bg-sky-400 text-white hover:bg-sky-700 cursor-pointer"
            >
              إضافة مادة جديدة
            </Button>
          </div>

          {/* Desktop Table View */}
          <DesktopTable
            items={filteredItems}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          {/* Mobile Card View */}
          <div className="md:hidden grid grid-cols-1 gap-3">
            {filteredItems.map((item) => (
              <MobileCard
                key={item.id}
                item={item}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="bg-card border border-[#E5E7EB] border-border rounded-[var(--radius-lg)] p-8 text-center">
              <p className="text-muted-foreground">لا توجد مواد مطابقة للبحث</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
