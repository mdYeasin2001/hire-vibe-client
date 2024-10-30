import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/Logo.png';
import regImg from '../../assets/reg.jpg'
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IoMdPhotos } from "react-icons/io";
import { AuthContext } from "../../provider/FirebaseProvider";
const Registration = () => {

    const [error, setError] = useState('')
    const { createUser, updateUser, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { fullName, email, image, password } = data

        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer');
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Must have an Uppercase letter in the password');
            return
        }
        else if (!/[a-z]/.test(password)) {
            setError('Must have a Lowercase letter in the password')
            return
        }

        setError('')

        //creating user
        createUser(email, password)
            .then(() => {
                updateUser(fullName, image)
                    .then(() => {
                        toast.success('Registration Successful');
                        logout();
                        navigate('/login')
                    })
            })
            .catch(() => {
                setError("email already in use")
            })
    }


    return (
        <div className='flex justify-center items-center my-12'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img className='w-auto h-7 sm:h-8' src={logo} alt='' />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Get Your Free Account Now.
                    </p>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text"
                                    {...register("fullName", { required: true })}
                                    className="grow" placeholder="Name" />
                            </label>
                            {errors.fullName && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email"
                                    {...register("email", { required: true })}
                                    className="grow" placeholder="Email" />
                            </label>
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <IoMdPhotos></IoMdPhotos>
                                <input type="text"
                                    {...register("image", { required: true })}
                                    className="grow" placeholder="PhotoUrl" />
                            </label>
                            {errors.image && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password"
                                    {...register("password", { required: true })}
                                    placeholder="password"
                                    className="grow" />
                            </label>
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                        {
                            error && <p className="text-red-600 text-center mb-2">{error}</p>
                        }
                        <div>

                            <input type="submit" value="Register" className="text-lg font-semibold text-center w-full bg-amber-300 py-3 rounded-xl hover:bg-amber-200" />
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${regImg})`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Registration;