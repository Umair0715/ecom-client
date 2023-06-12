import { Link } from "react-router-dom";
import ProductImg from 'assets/images/p2.png';


const TrendingOffers = () => {
    return (
        <div className="container mx-auto px-8 pb-10">
            <div className="flex items-center justify-between">
                <h1 className="section-heading">Trending Offers</h1>
                <Link 
                to='#' 
                className="underline hover:text-primary"
                >
                    View All Products
                </Link>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8'>
                {
                    [...Array(4).keys()].map((item , i) => (
                        <div 
                        className='border border-grayText rounded-md p-3 relative' 
                        key={i}
                        >
                            <div className="absolute top-0 left-0 flex flex-col px-2 py-2 text-xs font-semibold
                            rounded-tl-md items-center justify-center bg-primary text-dark">
                                <span>25% <br /> OFF</span>
                            </div>
                            <div className="flex items-center justify-center py-4">
                                <img 
                                src={ProductImg} 
                                alt="Product image" 
                                className='w-[150px]'
                                />   
                            </div>
                            <div className='my-5'>
                                <div className="flex items-center gap-1 text-sm">
                                    <i className="uil uil-award text-primary text-base"></i>
                                    <span>230</span>

                                </div>
                                <h6 className='font-semibold mt-1'>
                                    White Cement
                                </h6>
                                <p className='text-grayText text-[15px] mt-1'>
                                    ₹120.00 /1kg
                                </p>
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
        </div>
    )
}

export default TrendingOffers