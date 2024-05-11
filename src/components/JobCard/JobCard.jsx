import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const JobCard = ({ job }) => {
    const { _id, job_title, job_type, posting_date, deadline, salary_range, applicants_number, email } = job
    return (
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md ">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600 ">Job Posted Date: {posting_date}</p>
                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gradient-to-r from-[#1488CC] to-[#2B32B2] rounded cursor-pointer" tabIndex="0" role="button">{job_type}</a>

            </div>
            <h2 className="text-xl font-bold text-[#2B32B2]">{job_title}</h2>

            <div className="flex items-center justify-between">

                <p className='text-gray-600 mt-2'>Employer Name: Maynul Islam</p>
                <p className='text-gray-600 mt-2'>Employer Email: {email}</p>
            </div>
            <div className="flex items-center justify-between">

                <p className='text-gray-600 mt-2'>Salary: {salary_range}</p>
                <p className='text-gray-600 mt-2'>Applicants No: <span className='font-bold'>{applicants_number}</span></p>
            </div>
            <p className='text-gray-600 mt-2 text-center'>Deadline: {deadline}</p>
            <div>
                <Link to={`/jobDetails/${_id}`}><button className='font-medium bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white px-4 py-2 rounded-lg'>View Details</button></Link>
            </div>


        </div>

    );
};
JobCard.propTypes = {
    job: PropTypes.object.isRequired
}
export default JobCard;