import type { Product } from '../../../types/reports';

interface TopProductsListProps {
  products: Product[];
  title: string;
  subtitle: string;
}

export default function TopProductsList({ products, title, subtitle }: TopProductsListProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
      <div className="text-right mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {/* Rank Badge */}
            <div className="w-10 h-10 rounded-full bg-sky-500 bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
              {product.rank}
            </div>

            {/* Product Info */}
            <div className="flex-1 text-right">
              <p className="font-medium text-foreground">{product.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{product.orders} طلب</p>
            </div>

            {/* Revenue */}
            <div className="text-left">
              <p className="text-sky-500 font-semibold text-primary">{product.revenue.toLocaleString()} </p>
              ريال
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
