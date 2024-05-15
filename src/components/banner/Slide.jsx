import PropTypes from 'prop-types';
import { motion } from "framer-motion"
const Slide = ({ image }) => {
    return (
        <div className="w-full bg-center bg-cover md:h-[750px]" style={{ backgroundImage: `url(${image})` }}>

            <div className="flex items-center justify-center w-full h-full bg-gray-900/30">
                <div className="text-center">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="text-2xl lg:text-6xl font-semibold text-white">Empowering Your Career Journey</motion.h1>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className='text-lg text-gray-300 mt-4'>Empowering careers, connecting talent, shaping futures with personalized job matches.</motion.p>
                    <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs mt-10 md:rounded-tr-none md:rounded-br-none" />
                    <button className='text-white bg-[#2B32B2] px-6 py-3 md:rounded-tr-lg md:rounded-br-lg font-semibold'>Search</button>
                </div>


            </div>

        </div>
    );
};

Slide.propTypes = {
    image: PropTypes.string
}

export default Slide;