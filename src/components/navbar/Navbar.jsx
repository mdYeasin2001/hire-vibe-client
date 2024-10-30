import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";
import ToggleTheme from "../togglemode/ToggleTheme";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const navLinks = <>
        <li><Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-lg transition-colors duration-300">Home</Link></li>
        <li><Link to="/all-jobs" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-lg transition-colors duration-300">All Jobs</Link></li>
        {
            user && <div className="lg:flex gap-6">
                <li><Link to="/applied-jobs" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-lg transition-colors duration-300">Applied Jobs</Link></li>
                <li><Link to="/add-job" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-lg transition-colors duration-300">Add a Job</Link></li>
                <li><Link to="/my-jobs" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-lg transition-colors duration-300">My Jobs</Link></li>
            </div>
        }
        <li><Link to="/blogs" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-lg transition-colors duration-300">Blogs</Link></li>
        <li><ToggleTheme /></li>
    </>

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            Hire<span className="text-gray-800 dark:text-gray-200">Vibe</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-4 mt-3 shadow-lg bg-white dark:bg-gray-800 rounded-xl w-64 space-y-2">
                                {navLinks}
                                {user ? (
                                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <div className="flex items-center gap-4 mb-4">
                                            <img className="w-10 h-10 rounded-full" referrerPolicy='no-referrer' src={user?.photoURL || "https://i.ibb.co/Wyry2pC/user.png"} alt={user?.displayName} />
                                            <span className="text-gray-700 dark:text-gray-200">{user?.displayName}</span>
                                        </div>
                                        <button onClick={logout} className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link to="/login" className="block px-4 py-2 text-center text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                        Login
                                    </Link>
                                )}
                            </ul>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex lg:items-center lg:gap-12">
                        <ul className="flex items-center gap-12">
                            {navLinks}
                        </ul>

                        {user ? (
                            <div className="dropdown dropdown-end ml-6">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-11 rounded-full ring-2 ring-indigo-600 dark:ring-indigo-400">
                                        <img referrerPolicy='no-referrer' title={user?.displayName} src={user?.photoURL || "https://i.ibb.co/Wyry2pC/user.png"} alt={user?.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu mt-3 p-2 shadow-lg bg-white dark:bg-gray-800 rounded-xl w-52">
                                    <li className="px-4 py-2 text-gray-700 dark:text-gray-200">{user?.displayName}</li>
                                    <li className="border-t border-gray-200 dark:border-gray-700">
                                        <button onClick={logout} className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;