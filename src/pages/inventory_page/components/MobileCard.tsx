import { PenLine, Trash2 } from 'lucide-react';
import type { InventoryItem } from '../../../types/inventory';
import StatusBadge from './StatusBadge';
import Button from './Button';

interface MobileCardProps {
  item: InventoryItem;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function MobileCard({ item, onEdit, onDelete }: MobileCardProps) {
  return (
    <div className="bg-card bg-white border-[#E5E7EB] border-border rounded-[var(--radius-lg)] p-4 md:hidden">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-[var(--radius-md)] flex-shrink-0"
          style={{ backgroundColor: item.color }}
        ></div>
        <div className="flex-1 text-right">
          <h4 className="font-medium mb-1 text-sm">{item.name}</h4>
          <p className="text-sm text-muted-foreground">{item.type}</p>
        </div>
        <StatusBadge status={item.status} />
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
        <div className="text-right">
          <p className="text-muted-foreground text-xs">المخزون</p>
          <p className="font-semibold">{item.stock} كجم</p>
        </div>
        <div className="text-right">
          <p className="text-muted-foreground text-xs">التكلفة</p>
          <p className="font-semibold">{item.price} ريال</p>
        </div>
        <div className="text-right">
          <p className="text-muted-foreground text-xs">سرعة القطع</p>
          <p className="font-semibold text-xs">{item.cuttingSpeed}</p>
        </div>
        <div className="text-right">
          <p className="text-muted-foreground text-xs">السماكة</p>
          <p className="font-semibold text-xs">{item.thickness}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          icon={<PenLine className="w-4 h-4 text-sky-500" />}
          onClick={() => onEdit(item.id)}
          className="flex-1 text-sky-500 cursor-pointer"
        >
          تعديل
        </Button>
        <Button
          variant="destructive"
          size="sm"
          icon={<Trash2 className="w-4 h-4" />}
          onClick={() => onDelete(item.id)}
          className='cursor-pointer'
        >
        </Button>
      </div>
    </div>
  );
}
