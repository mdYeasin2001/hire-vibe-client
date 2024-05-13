import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/FirebaseProvider";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyJobs = () => {
    const { user } = useContext(AuthContext);

    const [jobs, setJobs] = useState([])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`, { withCredentials: true })
        setJobs(data)
    }

    useEffect(() => {
        getData()
    }, [user])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/jobs/${id}`)
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        getData()
                    }


                }
                catch (err) {
                    console.log(err)
                    toast.error(err.message)
                }

            }
        })
    }


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
                                        <Link to={`/update-job/${job._id}`}>
                                            <FaRegEdit className="cursor-pointer"></FaRegEdit>
                                        </Link>
                                        <MdDeleteOutline onClick={() => handleDelete(job._id)} className="text-red-500 cursor-pointer"></MdDeleteOutline>
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