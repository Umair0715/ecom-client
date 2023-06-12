import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto px-12 py-12 pb-20'>
            <div className='text-center'>
                <h1 className='section-heading'>About us</h1>
                <p className='text-grayText'>Order now and appreciate the beauty of nature</p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-8'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-primary rounded-full flex items-center justify-center w-[70px] h-[70px] text-3xl'>
                        <i className="uil uil-trees"></i>
                    </div>
                    <h4 className='font-semibold text-lg'>Large Assortment</h4>
                    <p className='text-sm text-grayText text-center'>we offer many different types of products with fewer variations in each category.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-primary rounded-full flex items-center justify-center w-[70px] h-[70px] text-3xl'>
                        <i className="uil uil-box"></i>
                    </div>
                    <h4 className='font-semibold text-lg'>Fast Shipping</h4>
                    <p className='text-sm text-grayText text-center'>4-day or less delivery time, shipping and an expedited delivery option.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-primary rounded-full flex items-center justify-center w-[70px] h-[70px] text-3xl'>
                        <i className="uil uil-phone"></i>
                    </div>
                    <h4 className='font-semibold text-lg'>24/7 Support</h4>
                    <p className='text-sm text-grayText text-center'>answers to any business related inquiry 24/7 and in real-time.</p>
                </div>
            </div>
        </div>
    )
}

export default About