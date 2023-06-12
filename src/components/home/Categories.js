import C1Img from 'assets/images/c1.png';
import C2Img from 'assets/images/c2.png';
import C3Img from 'assets/images/c3.png';

const Categories = () => {
    return (
        <div className='w-full bg-primary py-12 '>
            <div className="container mx-auto px-10">
                <div className='text-center'>
                    <h1 className="section-heading">
                        Categories
                    </h1>
                    <p>Find what you are looking for</p>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12'>
                    {
                        [...Array(3).keys()].map((item , i) => (
                            <div key={i} >
                                <div>
                                    <img 
                                    src={i=== 0 ? C2Img : i === 1 ? C1Img :  C3Img} 
                                    alt="category"
                                    className={`${i=== 0 ? 'w-[90%]' : i === 1 ? C1Img :  'w-[90%] ml-8'} h-[60vh]`}
                                     
                                    />
                                </div>
                                <h4 className='text-center font-semibold text-lg mt-4'>Bharti Cement</h4>
                            </div>
                        ))
                    }
                </div>
                <div className='mt-10 flex justify-center'>
                    <button className="bg-white py-2 px-10 rounded-md text-dark flex items-center gap-1 hover:text-primary">
                        <span>Explore</span>
                        <i className="uil uil-arrow-right text-lg translate-y-[1px]"></i> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories