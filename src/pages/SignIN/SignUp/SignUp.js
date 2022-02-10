import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { registerUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        registerUser(data.email, data.password, data.name, navigate);
    };

    return (
        <div className="max-w-7xl px-4 sm:px-6 mx-auto py-6">
            <Link to="/">
                <div className="flex items-center justify-center">
                    {/* <img
                        className="h-8 w-auto sm:h-10"
                        src="https://upload.wikimedia.org/wikipedia/commons/archive/e/ec/20140815011948%21Go_on_Logo.svg"
                        alt=""
                    /> */}
                    <h2 className='text-green-500 font-mono font-bold text-2xl'>yooda</h2>
                </div>
            </Link>
            <h2 className="text-2xl pt-4 font-bold text-green-600">Create an Account</h2>
            <div className="flex justify-around items-center bg-gray-50 rounded-xl mt-8">
                <form className="flex flex-col space-y-4 mt-8" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="ring-2 ring-green-600 outline-green-600 rounded-md p-2"
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                    />
                    {/* errors will return when field validation fails  */}
                    {
                        errors.name && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>
                    }

                    <input
                        className="ring-2 ring-green-600 rounded-md p-2 outline-green-600"
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Your Email"
                    />
                    {/* errors will return when field validation fails  */}
                    {
                        errors.email && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>
                    }
                    <input
                        className="ring-2 ring-green-600 rounded-md p-2 outline-green-600"
                        type="password"
                        {...register("password", { required: true, minLength: 6 })}
                        placeholder="password (password at least 6 character long"
                    />
                    {errors.password && errors.password.type === "required" && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>}
                    {errors.password && errors.password.type === "minLength" && <span className="bg-red-50 text-red-500 rounded-md">password must be 6 character long</span>}

                    <input className="bg-green-600 hover:bg-white hover:text-green-600 border-2 border-green-600 text-white rounded-md p-2" type="submit" value="Sign up" />
                    <p>Already have an Account? <span className="text-green-600"><Link to="/signin">Please Sign in</Link></span></p>
                </form>
                <img className="" src="https://blog.hubspot.com/hubfs/registration-form-template.jpg" alt="" />
            </div>
        </div>
    );
};

export default SignUp;