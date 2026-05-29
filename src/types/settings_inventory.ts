export interface MaterialInfo {
  id: string;
  material_name: string;
  price_per_kg:number;
  available_quantity:number;
  warning_limit:number;
  status: 'متوفر' | 'منخفض';
}
