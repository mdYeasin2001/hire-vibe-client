import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png"

const Navbar = () => {
    const navLinks = <>
        <li className="text-black lg:text-white font-medium text-lg"><Link to="/">Home</Link></li>
        <li className="text-black lg:text-white font-medium text-lg"><Link>All Jobs</Link></li>
        <li className="text-black lg:text-white font-medium text-lg"><Link>Applied Jobs</Link></li>
        <li className="text-black lg:text-white font-medium text-lg"><Link>Add a Job</Link></li>
        <li className="text-black lg:text-white font-medium text-lg"><Link>My Job</Link></li>
        <li className="text-black lg:text-white font-medium text-lg block lg:hidden"><Link to="/login"><button>Login</button></Link></li>
    </>
    return (
        <>
            <div className="navbar bg-gradient-to-r from-[#1488CC] to-[#2B32B2] px-2 md:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-32" src={logo} alt="" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    <Link to="/login"><button className="text-white font-bold border px-4 py-2 hover:text-black hover:bg-white rounded-sm transition-all duration-500">Login</button></Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;