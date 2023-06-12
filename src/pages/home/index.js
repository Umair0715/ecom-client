import Filter from "components/home/Filter"
import Hero from "components/home/Hero";
import AddBannerImg from 'assets/images/addBanner.png';
import AddBannerImg2 from 'assets/images/addBanner2.png';
import About from "components/home/About";
import TopCategories from "components/home/TopCategories";
import Categories from "components/home/Categories";
import HotDeals from "components/home/HotDeals";
import Testimonials from "components/home/Testimonials";
import TrendingOffers from "components/home/TrendingOffers";
import Footer from "components/home/Footer";


const Home = () => {
    return (
        <div>
            <Hero />
            <Filter />
            <div>
                <img
                src={AddBannerImg}
                className="w-full object-cover"
                />
            </div>
            <TopCategories />
            <About />
            <Categories />
            <div className="my-10">
                <img
                src={AddBannerImg}
                className="w-full object-cover"
                />
            </div>
            <HotDeals />
            <div className="my-20">
                <img
                src={AddBannerImg2}
                className="w-full object-cover"
                />
            </div>
            {/* <Testimonials /> */}
            <TrendingOffers />
            <Footer />
        </div>
    )
}

export default Home