import logo from '../../assets/Logo.png'
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-base-content">
            <div className='flex justify-around w-full'>
                <img className='w-40' src={logo} alt="" />
                <div>
                    <h2 className='text-2xl font-medium mb-2'>Social links</h2>
                    <div className='flex items-center gap-4 text-2xl'>
                        <FaFacebook></FaFacebook>
                        <FaGithub></FaGithub>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;