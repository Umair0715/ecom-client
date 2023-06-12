import { debounce } from 'lodash';
import { UilSearch } from '@iconscout/react-unicons';


const Search = ({ fetcher , timeout = 500 , setSearch , placeholder = 'Search...' }) => {

    const handleInputChange = debounce((event) => {
        const value = event.target.value;
        setSearch(value);
        fetcher(value);
    }, timeout );


    return (
        <div className='flex items-center justify-between bg-white py-1.5 px-2 rounded-lg w-[400px]' >
            <input 
            type="text" 
            placeholder={placeholder} 
            className='outline-none border-none bg-transparent'
            // onChange={handleInputChange}
            />
            <div className='bg-dark px-2.5 py-2 text-white rounded-lg cursor-pointer' >
                <UilSearch />
            </div>
        </div>
    )
}

export default Search