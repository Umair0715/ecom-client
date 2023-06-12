import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black py-6 text-white'>
            <div className='container mx-auto px-12'>
                <div>
                    <h3 className='text-2xl font-semibold'>Logo</h3>
                    <p className='text-grayText text-sm my-4'>We help you find your dream House</p>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-full border border-grayText flex items-center justify-center text-lg w-[40px] h-[40px]'>
                            <i className="uil uil-facebook-f"></i>
                        </div>
                        <div className='rounded-full border border-grayText flex items-center justify-center text-lg w-[40px] h-[40px]'>
                            <i className="uil uil-twitter"></i>
                        </div>
                        <div className='rounded-full border border-grayText flex items-center justify-center text-lg w-[40px] h-[40px]'>
                            <i className="uil uil-instagram"></i>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>
        </footer>
    )
}

export default Footer