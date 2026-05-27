export interface InventoryItem {
  id: string;
  name: string;
  type: string;
  thickness: string;
  dimensions: string;
  stock: number;
  maxStock: number;
  cuttingSpeed: string;
  finish: string;
  price: number;
  supplier: string;
  status: 'متوفر' | 'منخفض';
  color: string;
  lastUpdate: string;
}
