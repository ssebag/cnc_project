import type { CuttingCost, ComplexityFees, QuantityDiscount, UrgantFees } from "../types/settings_pricing"

export const CuttingCostData: CuttingCost = {
    cost_per_meter:0.50,
    setup_cost:20,
}

export const ComplexityFeesData: ComplexityFees = {
    low:0,
    medium:15,
    high:30,
}

export const QuantityDiscountData: QuantityDiscount = {
   from_5_to_10:5,
   from_11_to_20:10,
   from_21_to_50:15,
   more_than_50:20,
}

export const UrgantFeesData: UrgantFees = {
    additional_fees_for_urgant_orders:25,
}



