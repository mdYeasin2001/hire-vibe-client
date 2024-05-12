import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/FirebaseProvider';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const DetailsJob = () => {
    const job = useLoaderData()
    const { user } = useContext(AuthContext)

    const { _id, job_title, job_type, deadline, salary, applicants_number, description,
        pictureURL,employer } = job;


    const handleApplyButtonClick = () => {
        if (isDeadlinePassed()) {
            toast.error('Deadline has expired');
        }
        else if(employer.email === user?.email){
            toast.error('Permission not granted')
        }
        else {
            document.getElementById('my_modal_3').showModal()
        }
    }

    const isDeadlinePassed = () => {
        const deadlineData = new Date(deadline)
        return deadlineData < new Date();
    }


    const handleApplyForm = async (e) => {
        e.preventDefault()
        const form = e.target;
        const jobId = _id
        const email = form.email.value
        const name = form.name.value
        const resumeLink = form.resumeLink.value
        const appliedJobData = {
            jobId, email, name, resumeLink, job_title, job_type, deadline, salary, applicants_number, description,employer
        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/appliedJob`, appliedJobData)
            console.log(data)
            toast.success('Applied Successfully')
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="border-2 my-10 p-10 container mx-auto flex items-center justify-between gap-10">
            <div className='flex-1'>
                <img className='' src={pictureURL} alt="" />
            </div>
            <div className='flex-1 space-y-4'>
                <h2 className='text-4xl font-semibold'>{job_title}</h2>
                <p><span className='font-bold'>Job Type:</span> {job_type}</p>
                <p ><span className='font-bold'>Description:</span> {description}</p>
                <div className='flex items-center justify-between'>
                    <p><span className='font-bold'>Salary:</span> {salary}</p>
                    <p><span className='font-bold'>Applicant Number:</span> {applicants_number}</p>
                </div>
                <p><span className='font-bold'>Buyer Email:</span> {employer?.email}</p>
                <p><span className='font-bold'>Deadline:</span> {new Date(deadline).toLocaleDateString()}</p>
                <button className='font-medium bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white px-4 py-2 rounded-md' onClick={handleApplyButtonClick}>Apply Now</button>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='p-4'>
                        <h2 className='text-center text-3xl font-semibold mb-4'>Apply Now</h2>
                        <form onSubmit={handleApplyForm}>
                            <div className='mb-4'>
                                <label className="input input-bordered flex items-center gap-2">

                                    <input type="text" className="grow"
                                        name='email'
                                        defaultValue={user?.email}
                                        placeholder="Email" />
                                </label>
                            </div>
                            <div className='mb-4'>
                                <label className="input input-bordered flex items-center gap-2">

                                    <input type="text" className="grow"
                                        name='name'
                                        defaultValue={user?.displayName}
                                        placeholder="Username" />
                                </label>
                            </div>
                            <div className='mb-4'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" className="grow"
                                        name='resumeLink'
                                        placeholder="Submit Resume Link" />
                                </label>
                            </div>
                            <div>
                                <input type="submit" value="Submit" className='w-full text-white rounded-lg py-3 bg-gradient-to-r from-[#1488CC] to-[#2B32B2] cursor-pointer' />
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DetailsJob;