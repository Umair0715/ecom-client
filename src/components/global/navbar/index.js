import { UilShoppingCart  , UilLocationPoint  , UilUser } from '@iconscout/react-unicons';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();

    const isActive = (path , home) => {
        if (home) return location.pathname === '/' ;
        return location.pathname.split('/').includes(path);
    }


    return (
        <nav className='py-3'>
            <div className='flex items-center justify-between container mx-auto'>
                <div className='text-3xl font-semibold'>
                    <Link to='/'>
                        Logo
                    </Link>
                </div>
                <ul className='flex items-center gap-6 text-grayText ml-10'>
                    <li 
                    className={`${isActive('' , true) ? 'text-primary hover:text-primary' : 'hover:text-primaryHover'} text-grayText `}
                    >
                        <Link to='/'>  
                            Home 
                        </Link>
                    </li>
                    <li 
                    className={`${isActive('categories') ? 'text-primary hover:text-primary' : 'hover:text-primaryHover'} text-grayText `}
                    >
                        <Link to='/categories'>  
                            Categories 
                        </Link>
                    </li>
                    <li 
                    className={`${isActive('products') ? 'text-primary hover:text-primary' : 'hover:text-primaryHover'} text-grayText `}
                    >
                        <Link to='/products'>  
                            Products 
                        </Link>
                    </li>
                    <li 
                    className={`${isActive('about') ? 'text-primary hover:text-primary' : 'hover:text-primaryHover'} text-grayText `}
                    >
                        <Link to='/about'>  
                            About us 
                        </Link>
                    </li>
                    <li 
                    className={`${isActive('contact') ? 'text-primary hover:text-primary' : 'hover:text-primaryHover'} text-grayText `}
                    >
                        <Link to='/contact'>  
                            Contact us
                        </Link>
                    </li>
                </ul>

                <div className='flex items-center gap-6'>
                    <div className='hover:text-primary w-fit cursor-pointer'>
                        <UilLocationPoint  />
                    </div>
                    <div className='hover:text-primary w-fit cursor-pointer'>
                        <Link to='/cart'>
                            <UilShoppingCart  />
                        </Link>
                    </div>
                    <div className='hover:text-primary w-fit cursor-pointer'>
                        <UilUser />
                    </div>
                    <div className='w-0.5 h-6 bg-dark'></div>
                    <div className='hover:text-primary w-fit cursor-pointer'>
                        <button 
                        className="btn-secondary py-2 px-6" 
                        style={{ borderRadius : '20px'}}
                        >
                            Become A Seller
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar