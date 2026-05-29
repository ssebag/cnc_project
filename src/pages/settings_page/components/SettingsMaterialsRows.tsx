import { mockSettingsMaterialsData } from '../../../data/mockSettingsMaterialsData'
import StatusBadge from '../../inventory_page/components/StatusBadge'

function SettingsMaterialsRows() {
  return (
    <tbody className='w-full'>
        {
            mockSettingsMaterialsData.map(material => (
                <tr className='sm:w-full p-2 text-center border-t border-gray-300 hover:bg-gray-100'>
                    <td className='px-1 lg:px-5 py-5'>{material.material_name}</td>  
                    <td className='px-1 lg:px-5 py-5'>{material.price_per_kg}</td>  
                    <td className='px-1 lg:px-5 py-5'>{material.available_quantity} كجم</td>  
                    <td className='px-1 lg:px-5 py-5'>{material.warning_limit} كجم</td>  
                    <td className='px-1 lg:px-5 py-5'><StatusBadge status={material.status} /></td>  
                </tr>
            ))
        }
    </tbody>
  )
}

export default SettingsMaterialsRows