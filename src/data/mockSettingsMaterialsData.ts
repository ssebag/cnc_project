import type { MaterialInfo } from "../types/settings_inventory";

export const mockSettingsMaterialsData: MaterialInfo[] = [
{
    id:'1',
    material_name:'ألمنيوم',
    price_per_kg:45,
    available_quantity:156,
    warning_limit:50,
    status:'متوفر',

},
{
    id:'2',
    material_name:'فولاذ',
    price_per_kg:35,
    available_quantity:89,
    warning_limit:30,
    status:'متوفر',

},
{
    id:'3',
    material_name:'فولاذ مقاوم للصدأ',
    price_per_kg:85,
    available_quantity:42,
    warning_limit:20,
    status:'متوفر',

},
{
    id:'4',
    material_name:'نحاس',
    price_per_kg:95,
    available_quantity:15,
    warning_limit:25,
    status:'منخفض',

},
{
    id:'5',
    material_name:'تيتانيوم',
    price_per_kg:250,
    available_quantity:8,
    warning_limit:10,
    status:'منخفض',

},
]