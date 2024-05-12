import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()
    }, [])
    return (
        <div className="m-8 p-4">
            <h2 className="text-3xl text-center font-bold mb-4">All Jobs</h2>
            <p className="text-center text-gray-500 text-lg mb-8">Explore diverse remote opportunities in tech: development, design, management, and more.</p>
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