import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Services from "../../components/service/Services";

const Home = () => {
    return (
        <div className="bg-white">
            <Banner />
            <About />
            <Services />
        </div>
    );
};

export default Home;