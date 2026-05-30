import { useState } from 'react';
import SettingsAccount from './SettingsAccount';
import SettingsNotifications from './SettingsNotifications';
import SettingsMachine from './SettingsMachine';
import SettingsPricing from './SettingsPricing';
import SettingsMaterials from './SettingsMaterials';
import SettingsSystem from './SettingsSystem';
import Header from '../../component/Header';

import {
  Bell,
  Cog,
  Database,
  DollarSign,
  Package,
  User,
} from 'lucide-react'

function Settings() {
  
  const [activeTab , setActiveTab] = useState('الحساب');

  const changeSettingsType = (e) => {
    setActiveTab(e.target.textContent)
  }

  return (
  <div className='bg-[#F5F7FA] p-5' dir='rtl'> 
    <Header 
      title="الإعدادات"
      description="إدارة إعدادات النظام والحساب"
    />
      
    <div className='w-full flex flex-col md:flex-row'>
      
      <div className='w-full md:w-full lg:w-[20%] xl:w-[20%] border border-[#E5E7EB] rounded-lg h-fit p-2 ml-2 mt-5 bg-white'>
        <div className={`flex flex-row-reverse gap-2 justify-end hover:bg-gray-100 cursor-pointer text-right w-[100%] font-medium rounded-md p-2 ${activeTab === 'الحساب' && 'bg-sky-500 hover:bg-sky-500 text-white' }`} onClick={changeSettingsType}>الحساب
          <User/>
        </div> 
        
        <div className={`flex flex-row-reverse gap-2 justify-end hover:bg-gray-100 cursor-pointer text-right w-[100%] font-medium rounded-md p-2 ${activeTab === 'الإشعارات' && 'bg-sky-500 hover:bg-sky-500 text-white' }`} onClick={changeSettingsType}>الإشعارات 
          <Bell/>
        </div> 
        
        <div className={`flex flex-row-reverse gap-2 justify-end hover:bg-gray-100 cursor-pointer text-right w-[100%] font-medium rounded-md p-2 ${activeTab === 'الماكينة' && 'bg-sky-500 hover:bg-sky-500 text-white' }`} onClick={changeSettingsType}>الماكينة
          <Cog/>
        </div> 
        
        <div className={`flex flex-row-reverse gap-2 justify-end hover:bg-gray-100 cursor-pointer text-right w-[100%] font-medium rounded-md p-2 ${activeTab === 'التسعير' && 'bg-sky-500 hover:bg-sky-500 text-white' }`} onClick={changeSettingsType}>التسعير
          <DollarSign/>
        </div> 

        <div className={`flex flex-row-reverse gap-2 justify-end hover:bg-gray-100 cursor-pointer text-right w-[100%] font-medium rounded-md p-2 ${activeTab === 'المواد' && 'bg-sky-500 hover:bg-sky-500 text-white' }`} onClick={changeSettingsType}>المواد
          <Package/>
        </div> 
        
        <div className={`flex flex-row-reverse gap-2 justify-end hover:bg-gray-100 cursor-pointer text-right w-[100%] font-medium rounded-md p-2 ${activeTab === 'النظام' && 'bg-sky-500 hover:bg-sky-500 text-white' }`} onClick={changeSettingsType}>النظام
          <Database/>
        </div> 
        
      </div>
      
      {
        (() => {
          switch (activeTab) {
            
            case 'الحساب':
              return <SettingsAccount/>
            
            case 'الإشعارات':
              return <SettingsNotifications/>   
            
            case 'الماكينة':
              return <SettingsMachine/>
            
            case 'التسعير':
              return <SettingsPricing/>
            
            case 'المواد':
              return <SettingsMaterials/>
            
            case 'النظام':
              return <SettingsSystem/>

          }
        }) ()

      }

    </div>
    

  </div>
  )
}

export default Settings