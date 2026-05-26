import type { InventoryItem } from '../../../types/inventory';
import TableRow from './TableRow';

interface DesktopTableProps {
  items: InventoryItem[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function DesktopTable({ items, onEdit, onDelete }: DesktopTableProps) {
  return (
    <div className="bg-card  border-[#E5E7EB] border border-border rounded-[var(--radius-lg)] hidden md:block overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E7EB] border-border text-right bg-muted/50 bg-[#F5F7FA]">
              <th className="py-3 px-4 text-sm font-medium">المادة</th>
              <th className="py-3 px-4 text-sm font-medium hidden md:table-cell">النوع</th>
              <th className="py-3 px-4 text-sm font-medium hidden xl:table-cell">الأبعاد</th>
              <th className="py-3 px-4 text-sm font-medium">المخزون</th>
              <th className="py-3 px-4 text-sm font-medium hidden lg:table-cell">سرعة القطع</th>
              <th className="py-3 px-4 text-sm font-medium hidden md:table-cell">التكلفة/وحدة</th>
              <th className="py-3 px-4 text-sm font-medium hidden xl:table-cell">المورد</th>
              <th className="py-3 px-4 text-sm font-medium">الحالة</th>
              <th className="py-3 px-4 text-sm font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {items.map((item) => (
              <TableRow key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
