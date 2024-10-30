import { useContext, useState } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateJobs = () => {
    const job = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { _id, job_title, job_type,
        deadline, salary, description, posting_date,
        picture_url } = job;

    const [startDate, setStartDate] = useState(new Date(deadline) || new Date());


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const job_title = form.job_title.value;
        const picture_url = form.pictureURL.value;
        const description = form.description.value;
        const job_type = form.category.value;
        const salary = form.salary.value;
        const posting_date = form.postingDate.value;
        const deadline = startDate;

        const jobData = {
            job_title,
            picture_url,
            description,
            job_type,
            salary,
            posting_date,
            deadline,
        }

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/jobs/${_id}`, jobData)
            console.log(data)
            toast.success('Job Data Updated Successfully')
            navigate('/my-jobs')
        }
        catch (err) {
            console.error(err)
            toast.error(err.message)
        }
    }

    return (
        <div className="py-24 px-10 md:px-24 lg:px-96">
            <h2 className="text-4xl font-extrabold text-center mb-6">Update Your Job</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                name="name" placeholder="User Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email"
                                defaultValue={user?.email}
                                readOnly
                                name="email" placeholder="Email" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="job_title"
                                defaultValue={job_title}
                                placeholder="Job Title" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pictureURL"
                                defaultValue={picture_url}
                                placeholder="Picture URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description"
                                defaultValue={description}
                                placeholder="Job Description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <label className="input-group">
                            <select
                                name='category'
                                id='category'
                                defaultValue={job_type}
                                className='border p-3 rounded-md w-full' required
                            >
                                <option value='On-Site'>On-Site</option>
                                <option value='Remote'>Remote</option>
                                <option value='Hybrid'>Hybrid</option>
                                <option value='Part-Time'>Part-Time</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">SalaryRange</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salary"
                                defaultValue={salary}
                                placeholder="Salary" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Job Posting Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="postingDate"
                                defaultValue={posting_date}
                                placeholder="Job Posting Date" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <label className="input-group">
                            <DatePicker className="border w-full p-3 rounded-lg"
                                selected={startDate} onChange={(date) => setStartDate(date)} required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update" className="btn btn-block bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white" />

            </form>
        </div>
    );
};

export default UpdateJobs;