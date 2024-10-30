import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
            }}
            className="container mx-auto px-4 py-20"
        >
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
                >
                    Contact Us
                </motion.h2>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
                >
                    Got questions or feedback? Reach out to us! Our team is here to assist you promptly with any inquiries
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl text-indigo-600 dark:text-indigo-400">
                                <FaHome />
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Address</h3>
                                <p className="text-gray-600 dark:text-gray-300">222-house new york</p>
                                <p className="text-gray-600 dark:text-gray-300">USA</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl text-indigo-600 dark:text-indigo-400">
                                <FaPhoneAlt />
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Phone</h3>
                                <p className="text-gray-600 dark:text-gray-300">+000000009</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl text-indigo-600 dark:text-indigo-400">
                                <MdEmail />
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Email</h3>
                                <p className="text-gray-600 dark:text-gray-300">demo@email.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                >
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Send Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                placeholder="Type your message"
                                rows="4"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-200"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;