export interface SystemSettings {
    language:string[];
    timezone:string[];
    currency:string[];
    measuring_unit:string[];

}


export interface Backup {
    auto_backup:'مفعل' | 'غير مفعل';
    last_backup_date:Date;
}



export interface SystemInfo {
    app_version:string;
    last_update:string;
    server_state: 'متصل' | 'غير متصل';
}

