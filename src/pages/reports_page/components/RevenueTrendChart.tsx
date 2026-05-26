import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import type { RevenueData } from '../../../types/reports';

interface RevenueTrendChartProps {
  data: RevenueData[];
  title: string;
  subtitle?: string;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-foreground">{data.monthArabic}</p>
        <p className="text-sm text-blue-600">الإيرادات: {data.value.toLocaleString()} ريال</p>
        <p className="text-sm text-gray-600">عدد الطلبات: {data.orders}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueTrendChart({ data, title, subtitle }: RevenueTrendChartProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust margins based on screen size
  const marginLeft = isMobile ? 50 : 90;
  const chartHeight = isMobile ? 280 : 300;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
      <div className="text-right mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <div className="-mx-4 md:mx-0 px-2 md:px-0">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 20, left: marginLeft, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis type="number" />
            <YAxis
              dataKey="monthArabic"
              type="category"
              width={marginLeft - 10}
              tick={{ fill: 'black', dx: -40, fontSize: isMobile ? 12 : 14 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(14, 165, 233, 0.1)' }} />
            <Bar dataKey="value" fill="#0EA5E9" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

