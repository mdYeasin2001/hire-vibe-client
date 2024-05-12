import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/FirebaseProvider";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const MyJobs = () => {
    const { user } = useContext(AuthContext);

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`)
            setJobs(data)
        }
        getData()
    }, [user])

    return (
        <div className="m-8 p-4">
            <h2 className="text-3xl text-center font-bold mb-4">My Jobs: {jobs.length}</h2>
            <p className="text-center text-gray-500 text-lg mb-8">Jobs that you posted to hire employees</p>
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
                                <td><div>
                                    <Link to={`/jobDetails/${job._id}`}><button className=" px-3 text-white rounded-lg py-2 bg-gradient-to-r from-[#1488CC] to-[#2B32B2] cursor-pointer">View Details</button></Link>
                                    <div className="flex items-center mt-4 text-xl space-x-8">
                                        <FaRegEdit></FaRegEdit>
                                        <MdDeleteOutline></MdDeleteOutline>
                                    </div>

                                </div></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;