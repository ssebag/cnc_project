import { PenLine, Trash2 } from 'lucide-react';
import type { InventoryItem } from '../../../types/inventory';
import StatusBadge from './StatusBadge';

interface TableRowProps {
  item: InventoryItem;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TableRow({ item, onEdit, onDelete }: TableRowProps) {
  const stockPercentage = (item.stock / item.maxStock) * 100;

  return (
    <tr className="border-b  border-[#E5E7EB] border-border last:border-0 text-right hover:bg-muted/30">
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-[var(--radius-sm)] flex-shrink-0"
            style={{ backgroundColor: item.color }}
          ></div>
          <div>
            <p className="font-medium text-sm">{item.name}</p>
            <p className="text-xs text-muted-foreground md:hidden">{item.type}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 hidden md:table-cell">
        <span className="text-sm">{item.type}</span>
      </td>
      <td className="py-4 px-4 hidden xl:table-cell">
        <div className="text-sm">
          <p>{item.thickness}</p>
          <p className="text-xs text-muted-foreground">{item.dimensions}</p>
        </div>
      </td>
      <td className="py-4 px-4">
        <div>
          <p className="font-semibold text-sm">{item.stock} كجم</p>
          <div className="w-20 bg-muted rounded-full h-1.5 mt-1">
            <div
              className={`h-1.5 rounded-full ${item.status === 'متوفر' ? 'bg-green-500' : 'bg-yellow-500'}`}
              style={{ width: `${Math.min(stockPercentage, 100)}%` }}
            ></div>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 hidden lg:table-cell">
        <div className="text-sm">
          <p className="font-medium">{item.cuttingSpeed}</p>
          <p className="text-xs text-muted-foreground">{item.finish}</p>
        </div>
      </td>
      <td className="py-4 px-4 hidden md:table-cell">
        <p className="font-medium text-sm">{item.price} ريال</p>
      </td>
      <td className="py-4 px-4 hidden xl:table-cell">
        <div className="text-sm">
          <p>{item.supplier}</p>
          <p className="text-xs text-muted-foreground">آخر تجديد: {item.lastUpdate}</p>
        </div>
      </td>
      <td className="py-4 px-4">
        <StatusBadge status={item.status} />
      </td>
      <td className="py-4 px-4">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(item.id)}
            className="p-2 hover:bg-muted rounded-[var(--radius-sm)] transition-colors hover:bg-gray-200 cursor-pointer"
          >
            <PenLine className="w-4 h-4 text-primary text-sky-500" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-2 hover:bg-muted rounded-[var(--radius-sm)] transition-colors hover:bg-gray-200 cursor-pointer"
          >
            <Trash2 className="w-4 h-4 text-destructive text-red-500" />
          </button>
        </div>
      </td>
    </tr>
  );
}
