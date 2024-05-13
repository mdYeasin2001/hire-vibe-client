import image from '../../assets/slider4.jpg'
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div className="my-12 w-full bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className='w-full h-full bg-gray-900/90 py-8 px-10'>
                <div className='mb-4'>
                    <h2 className='text-4xl text-center text-white mb-2'>Contact Us</h2>
                    <p className='text-center text-white'>Got questions or feedback? Reach out to us! Our team is here to assist you promptly with any inquiries</p>
                </div>
                <div className='md:flex items-center justify-around'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <span className='text-2xl text-white'><FaHome></FaHome></span>
                            <div>
                                <p className='text-green-500 font-medium'>Address</p>
                                <p className='text-white'>222-house new york</p>
                                <p className='text-white'>USA</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='text-2xl text-white'><FaPhoneAlt></FaPhoneAlt></span>
                            <div>
                                <p className='text-green-500 font-medium'>Phone</p>
                                <p className='text-white'>+000000009</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='text-2xl text-white'><MdEmail></MdEmail></span>
                            <div>
                                <p className='text-green-500 font-medium'>Email</p>
                                <p className='text-white'>demo@email.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card shrink-0 w-full max-w-sm rounded-none bg-base-100 px-">
                            <h2 className='font-semibold text-2xl mt-2 ml-2'>Send Message</h2>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type Your Message</span>
                                    </label>
                                    <input type="text" placeholder="type your message" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;