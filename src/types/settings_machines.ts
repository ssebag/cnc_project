export interface MachineSettings {
    machine_name:string;
    X_working_area:number;
    Y_working_area:number;
    Z_working_area:number;
    cutting_accuracy:number;
    default_tool_diameter:number;
    max_cutting_depth:number;    
}

export interface MaintenanceDetails {
    power_on_hours:number;
    last_maintenance:Date;
}

