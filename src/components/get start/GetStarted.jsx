import { AiOutlineFileSearch } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { RiGuideFill } from "react-icons/ri";
const GetStarted = () => {
    return (
        <div className="container mx-auto mb-10">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-medium text-gray-800 mb-2">How To Get Started</h2>
                <p className="text-gray-600">Launching Your Job Search: A Comprehensive Guide to Getting Started Right</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <div className="bg-[#edf8ff] text-center space-y-4 p-8">
                    <span className="flex items-center justify-center text-6xl"><AiOutlineFileSearch></AiOutlineFileSearch></span>
                    <p className="text-4xl font-medium text-gray-800">Need Any Jobs?</p>
                    <p className="text-gray-600">Seeking Employment? Explore Diverse Opportunities Tailored to Your Skills, Experience, and Career Goals Today</p>
                    <button className="bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white py-2 px-2 rounded-md">Explore More</button>
                </div>
                <div className="bg-[#edf8ff] text-center space-y-4 p-8">
                    <span className="flex items-center justify-center text-6xl"><MdPeopleOutline></MdPeopleOutline></span>
                    <p className="text-4xl font-medium text-gray-800">Job Search Strategies</p>
                    <p className="text-gray-600">Discover effective strategies to navigate the job market and find the right opportunities for you.</p>
                    <button className="bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white py-2 px-2 rounded-md">Explore More</button>
                </div>
                <div className="bg-[#edf8ff] text-center space-y-4 p-8">
                    <span className="flex items-center justify-center text-6xl"><RiGuideFill></RiGuideFill></span>
                    <p className="text-4xl font-medium text-gray-800">Interview Preparation</p>
                    <p className="text-gray-600">Get ready to impress employers with our comprehensive guide to mastering the interview process</p>
                    <button className="bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white py-2 px-2 rounded-md">Explore More</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default GetStarted;