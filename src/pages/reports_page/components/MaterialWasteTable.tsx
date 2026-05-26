import type { MaterialWasteItem } from '../../../types/reports';

interface MaterialWasteTableProps {
  data: MaterialWasteItem[];
  title: string;
  subtitle?: string;
}

export default function MaterialWasteTable({ data, title, subtitle }: MaterialWasteTableProps) {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
      <div className="text-right mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-2 text-sm font-medium text-muted-foreground">المادة</th>
              <th className="py-3 px-2 text-sm font-medium text-muted-foreground hidden md:table-cell">
                الهدر %
              </th>
              <th className="py-3 px-2 text-sm font-medium text-muted-foreground">الموفر (كجم)</th>
              <th className="py-3 px-2 text-sm font-medium text-muted-foreground hidden sm:table-cell">
                القيمة (ريال)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2">
                  <span className="text-sm font-medium">{item.name}</span>
                </td>
                <td className="py-3 px-2 hidden md:table-cell">
                  <span className="text-sm">{item.wastage.toFixed(2)}%</span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-sm">{item.savings} كجم</span>
                </td>
                <td className="py-3 px-2 hidden sm:table-cell">
                  <span className="text-sm">{item.value.toLocaleString()} ريال</span>
                </td>
              </tr>
            ))}
            <tr className="bg-green-50">
              <td className="py-3 px-2 font-semibold text-green-800">إجمالي التوفير</td>
              <td className="py-3 px-2 hidden md:table-cell"></td>
              <td className="py-3 px-2"></td>
              <td className="py-3 px-2 hidden sm:table-cell font-semibold text-green-800">
                {totalValue.toLocaleString()} ريال
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
