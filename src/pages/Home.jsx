import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Services from "../components/Services";


const Home = () => {
    return (
        <div>
            <div className="my-24">
           <Banner/>
        </div>
        <div className="mb-24">
            <AboutUs/>
        </div>

        <div className="my-24">
            <Services/>
        </div>
        </div>
    );
};

export default Home;