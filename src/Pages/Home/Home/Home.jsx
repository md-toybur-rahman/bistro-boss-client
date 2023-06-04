import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefServices from "../ChefServices/ChefServices";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
import useHelmet from "../../../Hooks/useHelmet";


const Home = () => {
    return (
        <div>
            {useHelmet("Home")}
            <Banner></Banner>
            <Category></Category>
            <ChefServices></ChefServices>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;