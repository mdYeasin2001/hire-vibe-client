import { useContext, useState } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const AddJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (formData) => {
        const jobData = {
            job_title: formData.job_title,
            picture_url: formData.pictureURL,
            description: formData.description,
            job_type: formData.category,
            salary: formData.salary,
            posting_date: formData.postingDate,
            deadline: startDate,
            applicants_number: 0,
            creator_email: user?.email,
            creator_name: user?.displayName,
        }

        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/jobs`,
                jobData,
                { withCredentials: true }
            );
            toast.success("Job Added Successfully");
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
                        Add a New Job
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* User Info Section */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user?.displayName}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    defaultValue={user?.email}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                            </div>

                            {/* Job Details Section */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Job Title
                                </label>
                                <input
                                    {...register("job_title", {
                                        required: "Job title is required",
                                        minLength: {
                                            value: 3,
                                            message: "Title must be at least 3 characters"
                                        }
                                    })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.job_title && (
                                    <p className="text-red-500 text-sm mt-1">{errors.job_title.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Picture URL
                                </label>
                                <input
                                    {...register("pictureURL", {
                                        required: "Picture URL is required",
                                        pattern: {
                                            value: /^https?:\/\/.+/i,
                                            message: "Enter a valid URL"
                                        }
                                    })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.pictureURL && (
                                    <p className="text-red-500 text-sm mt-1">{errors.pictureURL.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Job Description
                                </label>
                                <textarea
                                    {...register("description", {
                                        required: "Description is required",
                                        minLength: {
                                            value: 50,
                                            message: "Description must be at least 50 characters"
                                        }
                                    })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                                    rows="3"
                                />
                                {errors.description && (
                                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Job Category
                                </label>
                                <select
                                    {...register("category", { required: "Category is required" })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Select a category</option>
                                    <option value="On-Site">On-Site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Part-Time">Part-Time</option>
                                </select>
                                {errors.category && (
                                    <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Salary Range
                                </label>
                                <input
                                    {...register("salary", {
                                        required: "Salary range is required",
                                        pattern: {
                                            value: /^\$[\d,]+-\$[\d,]+$/,
                                            message: "Format: $min-$max (e.g. $50,000-$80,000)"
                                        }
                                    })}
                                    placeholder="$50,000-$80,000"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.salary && (
                                    <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Posting Date
                                </label>
                                <input
                                    type="date"
                                    {...register("postingDate", { required: "Posting date is required" })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.postingDate && (
                                    <p className="text-red-500 text-sm mt-1">{errors.postingDate.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Application Deadline
                                </label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    minDate={new Date()}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Post Job
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;