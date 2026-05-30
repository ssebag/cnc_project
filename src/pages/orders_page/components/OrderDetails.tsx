import { Eye, Download, Trash2 } from "lucide-react";
import { Card, CardHeader } from "./Card";
import { Button } from "./Button";
import OrderDetailsRow from './OrderDetailsRow'
import { priorityColors, statusColors } from '../../../helper'

interface SelectedOrderDetailsProps {
  selectedOrder: any;
  onViewDetails: (id: string) => void;
}

export default function OrderDetails({
  selectedOrder,
  onViewDetails,
}: SelectedOrderDetailsProps) {
  if (!selectedOrder) {
    return (
      <Card>
        <div className="py-12 text-center">
          <Eye className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">
            اختر طلب لعرض التفاصيل
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        title="تفاصيل الطلب"
        subtitle={selectedOrder.id}
      />

      <div className="space-y-4">
      <OrderDetailsRow title="اسم العميل :" info={selectedOrder.customer} classStyle="" />
       <OrderDetailsRow title="المنتج :" info={selectedOrder.item} classStyle="" />
       <div className="grid grid-cols-2 gap-4">
          <OrderDetailsRow title="المادة :" info= {selectedOrder.material} classStyle=""/>
          <OrderDetailsRow title="الكمية :" info={selectedOrder.quantity} classStyle=""/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <OrderDetailsRow title=" الحالة :" info={selectedOrder.status} 
              classStyle={`inline-block mr-2 px-3 py-1 rounded-full text-sm border ${
              statusColors[selectedOrder.status]
            }`}/>
          <OrderDetailsRow title="الأولوية :" info={selectedOrder.priority} 
              classStyle={priorityColors[selectedOrder.priority]}/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <OrderDetailsRow title="تاريخ الطلب :" info={selectedOrder.order_date} classStyle=""/>
          <OrderDetailsRow title="موعد التسليم :" info= {selectedOrder.delivery_date} classStyle=""/>
        </div>
        <hr />
           <OrderDetailsRow title="السعر الإجمالي : " info={`${selectedOrder.price} ريال`} classStyle=""/>
        <div className="pt-4 space-y-2">
          <Button
            variant="primary"
            className="w-full justify-center cursor-pointer"
            onClick={() =>
              onViewDetails(selectedOrder.id)
            }
          >
            <Eye className="w-4 h-4" />
            عرض التفاصيل
          </Button>

          <Button
            variant="secondary"
            className="w-full justify-center cursor-pointer"
          >
            <Download className="w-4 h-4" />
            تنزيل SVG
          </Button>

          {selectedOrder.status !== "ملغي" &&
            selectedOrder.status !== "مكتمل" && (
              <Button
                variant="danger"
                className="w-full justify-center cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                إلغاء الطلب
              </Button>
            )}
        </div>
      </div>
    </Card>
  );
}