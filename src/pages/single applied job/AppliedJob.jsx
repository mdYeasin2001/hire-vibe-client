import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
    const appliedJob = useLoaderData()
    const { name, email, resumeLink, job_title, job_type, deadline, salary, description } = appliedJob

    return (
        <div className="flex items-center justify-center h-screen max-w-96 mx-auto">
        <div className="bg-gray-100 rounded-lg shadow-md p-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">{job_title}</h1>
                <p className="text-gray-600">{job_type}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Contact Information</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p className="overflow-x-auto w-48"><strong>Resume Link:</strong> <a href={resumeLink} className="text-blue-500 hover:underline">{resumeLink}</a></p>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2">Job Details</h2>
                <p><strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}</p>
                <p><strong>Salary:</strong> {salary}</p>
                <h3 className="text-lg font-bold mb-2">Description</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
    );
};

export default AppliedJob;