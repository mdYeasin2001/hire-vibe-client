import Faq from "../../components/Faq/Faq";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import GetStarted from "../../components/get start/GetStarted";
import TabCategories from "../../components/tab/TabCategories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabCategories></TabCategories>
            <GetStarted></GetStarted>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;