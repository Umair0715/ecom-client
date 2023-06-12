import ProductImg from 'assets/images/p.png';

const TopCategories = () => {
    return (
        <div className='container mx-auto px-12 py-12'>
            <div className='text-center'>
                <h1 className='section-heading'>Top Categories</h1>
                <p className='text-grayText'>Easiest way to healthy life by buying your favourite Item’s </p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-12'>
                {
                    [...Array(4).keys()].map((item , i) => (
                        <div 
                        className='border border-grayText rounded-md p-3 ' 
                        key={i}
                        >
                            <div>
                                <img 
                                src={ProductImg} 
                                alt="Product image" 
                                className='w-full'
                                />   
                            </div>
                            <div className='my-5'>
                                <h6 className='font-semibold'>Royal Grey Cement</h6>
                                <p className='text-grayText text-[15px] mt-1'>₱ 1,400.00</p>
                            </div>
                            <div>
                                <button className="btn-primary py-2 px-6 w-full items-center justify-center">
                                    <p>Add To Cart</p>
                                    <i className="uil uil-shopping-cart text-lg"></i>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-center mt-10'>
                <button className="btn-primary py-2 px-12">
                    <span>Explore</span>
                    <i className="uil uil-arrow-right text-xl"></i> 
                </button>
            </div>
        </div>
    )
}

export default TopCategories