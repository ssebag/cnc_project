export interface CuttingCost {
    cost_per_meter:number;
    setup_cost:number;
}

export interface ComplexityFees {
    low:number;
    medium:number;
    high:number;
}

export interface QuantityDiscount {
    from_5_to_10:number;
    from_11_to_20:number;
    from_21_to_50:number;
    more_than_50:number;
}

export interface UrgantFees {
    additional_fees_for_urgant_orders:number;
}