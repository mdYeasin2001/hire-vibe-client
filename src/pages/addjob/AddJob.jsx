import { useContext, useState } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";

const AddJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const job_title = form.job_title.value;
        const pictureURL = form.pictureURL.value;
        const description = form.description.value;
        const job_type = form.category.value;
        const salary = form.salary.value;
        const posting_Date = form.postingDate.value;
        const deadline = startDate;
        const applicants_number = form.applicants.value 

        const jobData = {
            job_title,
            pictureURL,
            description,
            job_type,
            salary,
            posting_Date,
            deadline,
            applicants_number,
            employer: {
                email,
                name,
            }
        }
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/job`, jobData
            )
            console.log(data)
            toast.success("Job Added Successfully")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="py-24 px-10 md:px-24 lg:px-96">
            <h2 className="text-4xl font-extrabold text-center mb-6">Add a Job</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={user?.displayName}
                                name="name" placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email"
                                defaultValue={user?.email}
                                name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="job_title" placeholder="Job Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pictureURL" placeholder="Picture URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Job Description" className="input input-bordered w-full" />
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
                                className='border p-3 rounded-md w-full'
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
                            <input type="text" name="salary" placeholder="Salary" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Job Posting Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="postingDate" placeholder="Job Posting Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <label className="input-group">
                            <DatePicker className="border w-full p-3 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Job Applicants Number</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="applicants" placeholder="Applicants Number" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Item" className="btn btn-block bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white" />

            </form>
        </div>
    );
};

export default AddJob;