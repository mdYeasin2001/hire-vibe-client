import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext)
    const [appliedJobs, setAppliedJobs] = useState([])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/appliedJobs/${user?.email}`)
        setAppliedJobs(data)
    }
    useEffect(() => {
        getData()
    }, [user])

    return (
        <div className="m-8 p-4">
            <h2 className="text-3xl text-center font-bold mb-4">My Jobs: {appliedJobs.length}</h2>
            <p className="text-center text-gray-500 text-lg mb-8">Jobs that you posted to hire employees</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Employer Email</th>
                            <th>Application Deadline</th>
                            <th>Salary range</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appliedJobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td className="font-semibold text-lg text-[#2B32B2]">{job.job_title}</td>
                                <td>{job.employer?.email}</td>
                                <td>{new Date(job.deadline).toLocaleDateString()}</td>
                                <td>{job.salary}</td>
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