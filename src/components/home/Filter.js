import { UilSearch , UilCompass , UilMapPinAlt   } from '@iconscout/react-unicons';
import NearbySvg from 'assets/svgs/NearbySvg';

const Filter = () => {
    return (
        <div className='container mx-auto flex items-center justify-center flex-wrap my-12 '>
            <div className='border shadow-md rounded-lg p-6 flex items-center gap-4 flex-[0.3]'>
                <div className='w-[35px] text-primary '>
                    <UilSearch />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm text-grayText'>
                        Product Name
                    </label>
                    <input 
                    type="text" 
                    placeholder='Enter Product name'
                    className='bg-transparent border-none outline-none placeholder:text-dark'
                    />
                </div>
            </div>
            <div className='border shadow-md rounded-lg p-6 flex items-center gap-4 flex-[0.3]'>
                <div className='w-[35px] text-primary'>
                    <UilCompass  />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm text-grayText'>
                        Area
                    </label>
                    <p>Use Nearby Location</p>
                </div>
            </div>
            <div className='border shadow-md rounded-lg p-6 flex items-center gap-4 flex-[0.3]'>
                <div className='w-[35px] text-primary ' >
                    <UilMapPinAlt  />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm text-grayText'>
                        Distance
                    </label>
                    <select 
                    className='bg-transparent border-none outline-none'
                    >
                        <option value="">Within 5Km</option>
                        <option value="">Within 10Km</option>
                        <option value="">Within 15Km</option>
                    </select>
                </div>

            </div>
            <div className='flex-[0.1]'>
                <button className="bg-dark py-9 border-2 border-transparent hover:border-dark hover:bg-transparent duratoin-300 hover:text-dark px-8 h-full text-white rounded-lg">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Filter