import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs${searchValue ? `?search=${searchValue}` : ''}`)
            setJobs(data)
        }
        getData()
    }, [searchValue])

    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target;
        const searchValue = form.search.value.trim();
        if (searchValue) {
            setSearchValue(searchValue)
        }
    }

    return (
        <div className="m-8 p-4">
            <h2 className="text-3xl text-center font-bold mb-4">All Jobs</h2>
            <p className="text-center text-gray-500 text-lg mb-8">Explore diverse remote opportunities in tech: development, design, management, and more.</p>
            <form className="flex max-w-[400px] gap-2 items-center justify-center mx-auto my-10" onSubmit={handleSearch}>
                <input type="text"
                    name="search"
                    placeholder="Search" className="input input-bordered w-full" />
                <div className="flex items-center justify-center">
                    <input type="submit" className='text-white bg-[#2B32B2] px-6 py-3 rounded-lg cursor-pointer font-semibold' value="Search" />
                </div>
            </form>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary range</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td className="font-semibold text-lg text-[#2B32B2]">{job.job_title}</td>
                                <td>{job.posting_Date}</td>
                                <td>{new Date(job.deadline).toLocaleDateString()}</td>
                                <td>{job.salary}</td>
                                <td><Link to={`/jobDetails/${job._id}`}><button className=" px-3 text-white rounded-lg py-2 bg-gradient-to-r from-[#1488CC] to-[#2B32B2] cursor-pointer">View Details</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;