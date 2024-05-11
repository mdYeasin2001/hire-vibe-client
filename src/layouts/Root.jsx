import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-364px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;