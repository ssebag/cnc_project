import type { SystemSettings } from "../types/settings_system"
import type { SystemInfo } from "../types/settings_system"

export const SystemSettingsData:SystemSettings = {
    language:['العربية' , 'English'],
    timezone:['Asia/Riyadh (GMT+3)' , 'Asia/Dubai (GMT+4)' , 'Africa/Cairo (GMT+2)'],
    currency:['ريال السعودي (SAR)' , 'درهم الإماراتي (AED)' , 'دولار الأمريكي (USD)'],
    measuring_unit:['إنش (Imperial)' , 'ملم (Metric)'],
}

export const SystemInfoData:SystemInfo = {
    app_version:'v2.5.1',
    last_update:'2026-04-15',
    server_state: 'متصل',
}