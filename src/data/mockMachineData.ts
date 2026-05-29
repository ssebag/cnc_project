import type { MachineSettings , MaintenanceDetails } from "../types/settings_machines";

export const MachineSettingsData: MachineSettings = {
    machine_name:'CNC Router X500',
    X_working_area:500,
    Y_working_area:500,
    Z_working_area:100,
    cutting_accuracy:0.01,
    default_tool_diameter:6,
    max_cutting_depth:10,
}

export const MaintenanceDetailsData: MaintenanceDetails = {
    power_on_hours:200,
    last_maintenance:new Date(2026 , 4 , 15),
}