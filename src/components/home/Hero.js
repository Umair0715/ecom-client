import Search from 'components/global/Search'
import React from 'react'
import { Link } from 'react-router-dom';
import HeroImg from 'assets/images/hero.png';
import CurveArrow from 'assets/svgs/CurveArrow';
import CurveArrow2 from 'assets/svgs/CurveArrow2';

const Hero = () => {
    return (
        <div className='container mx-auto mt-6 px-12'>
            <div className='bg-primary flex  justify-between rounded-[20px]'>
                <div className='flex-1 flex flex-col gap-12 p-8 pb-12'>
                    <h1 className='text-dark text-[56px] font-bold leading-[1.1]'>Buy Your <br /> Dream Product </h1>
                    <div className='flex items-center gap-8 '>
                        <div>
                            <span className='text-xl font-semibold'>50+</span>
                            <p>Vendors Species</p>
                        </div>
                        <div className='w-0.5 rounded-full h-10 bg-dark'></div>
                        <div>
                            <span className='text-xl font-semibold'>100+</span>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <Search 
                        placeholder='What are you looking for?'
                        />
                        <div className='absolute -right-20 -bottom-8'>
                            <CurveArrow />
                        </div>
                    </div>
                    <Link to='#' className='flex items-center gap-2 font-semibold'>
                        <span>Explore Now </span>
                        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6875 11.5001C1.6875 11.3094 1.77639 11.1266 1.93463 10.9918C2.09286 10.857 2.30747 10.7813 2.53125 10.7813H22.4319L17.1214 6.25893C16.9629 6.12397 16.8739 5.94092 16.8739 5.75005C16.8739 5.55919 16.9629 5.37614 17.1214 5.24118C17.2798 5.10622 17.4947 5.0304 17.7188 5.0304C17.9428 5.0304 18.1577 5.10622 18.3161 5.24118L25.0661 10.9912C25.1447 11.0579 25.207 11.1373 25.2496 11.2246C25.2921 11.3119 25.314 11.4055 25.314 11.5001C25.314 11.5946 25.2921 11.6882 25.2496 11.7755C25.207 11.8628 25.1447 11.9422 25.0661 12.0089L18.3161 17.7589C18.1577 17.8939 17.9428 17.9697 17.7188 17.9697C17.4947 17.9697 17.2798 17.8939 17.1214 17.7589C16.9629 17.624 16.8739 17.4409 16.8739 17.2501C16.8739 17.0592 16.9629 16.8761 17.1214 16.7412L22.4319 12.2188H2.53125C2.30747 12.2188 2.09286 12.1431 1.93463 12.0083C1.77639 11.8735 1.6875 11.6907 1.6875 11.5001Z" fill="#1E1E1E"/>
                        </svg>

                    </Link>

                </div>
                <div className='pr-20 relative flex-1'>
                    <div className='absolute top-2 right-8'>
                        <CurveArrow2 />
                    </div>
                    <div className='flex h-full items-end justify-end'>
                        <div className='bg-dark w-[350px] h-[350px] flex items-center justify-center rounded-full '
                        style={{
                            borderRadius: '200px 200px 0px 200px'
                        }}
                        >
                            <img 
                            src={HeroImg} 
                            alt="" 
                            className='w-[340px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero