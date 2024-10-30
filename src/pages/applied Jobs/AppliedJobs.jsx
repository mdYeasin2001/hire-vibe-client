import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext)
    const [filter, setFilter] = useState("")
    const [displayJobs, setDisplayJobs] = useState([])

    const handleFilterItem = (filter) => {
        setFilter(filter)
    }

    useEffect(() => {
        (async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/applications/${user?.email}${filter ? '?job_type=' + filter : ""}`, { withCredentials: true })
            setDisplayJobs(data)
        })()
    }, [user, filter])



    return (
        <div className="m-8 p-4">
            <h2 className="text-3xl text-center font-bold mb-4">My Jobs</h2>
            <p className="text-center text-gray-500 text-lg mb-8">Jobs that you posted to hire employees</p>
            <div className="dropdown mb-4 flex items-center justify-center w-full">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#2B32B2] text-white hover:bg-[#2f36c6]">Filter-Job Category</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={() => handleFilterItem('')}>All</button></li>
                    <li><button onClick={() => handleFilterItem('On-Site')}>On-Site</button></li>
                    <li><button onClick={() => handleFilterItem('Remote')}>Remote</button></li>
                    <li><button onClick={() => handleFilterItem('Hybrid')}>Hybrid</button></li>
                    <li><button onClick={() => handleFilterItem('Part-Time')}>Part-Time</button></li>
                </ul>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Type</th>
                            <th>Application Deadline</th>
                            <th>Salary range</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayJobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td className="font-semibold text-lg text-[#2B32B2]">{job?.job?.job_title}</td>
                                <td>{job.job?.job_type}</td>
                                <td>{new Date(job?.job?.deadline).toLocaleDateString()}</td>
                                <td>{job?.job?.salary}</td>
                                <td>
                                    <div className="flex items-center">
                                        <Link className="btn btn-ghost" to={`/appliedJob/${job._id}`}>View Details</Link>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;