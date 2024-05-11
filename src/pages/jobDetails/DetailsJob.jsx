import { useLoaderData } from 'react-router-dom';
import img from '../../assets/slider2.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/FirebaseProvider';
const DetailsJob = () => {
    const job = useLoaderData()
    const {user} = useContext(AuthContext)

    const { job_title, job_type, deadline, salary_range, applicants_number, description } = job
    return (
        <div className="border-2 my-10 p-10 container mx-auto flex items-center justify-between gap-10">
            <div className='flex-1'>
                <img className='' src={img} alt="" />
            </div>
            <div className='flex-1 space-y-4'>
                <h2 className='text-4xl font-semibold'>{job_title}</h2>
                <p><span className='font-bold'>Job Type:</span> {job_type}</p>
                <p ><span className='font-bold'>Description:</span> {description}</p>
                <div className='flex items-center justify-between'>
                    <p><span className='font-bold'>Salary:</span> {salary_range}</p>
                    <p><span className='font-bold'>Applicant Number:</span> {applicants_number}</p>
                </div>
                <p><span className='font-bold'>Buyer Email:</span> ....@email.com</p>
                <p><span className='font-bold'>Deadline:</span> {deadline}</p>
                <button className='font-medium bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white px-4 py-2 rounded-md' onClick={() => document.getElementById('my_modal_3').showModal()}>Apply Now</button>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='p-4'>
                        <form>
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

        </div>
    );
};

export default DetailsJob;