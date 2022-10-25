import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-4/12 bg-gray-100 p-5 md:p-10 rounded-md mt-5 md:mt-20'>
        <h3 className='text-2xl font-bold text-center mb-5'>Login</h3>
        <form onSubmit={handleLogin}>
          <div className='flex flex-col mb-5'>
            <label className='text-xl md:text-2xl font-bold mb-2'>Email</label>
            <input
              className='py-2 px-5 rounded-md text-lg md:text-xl font-semibold'
              type='email'
              name='email'
              placeholder='Enter your Email'
              required
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label className='text-xl md:text-2xl font-bold mb-2'>
              Password
            </label>
            <input
              className='py-2 px-5 rounded-md text-lg md:text-xl font-semibold'
              type='password'
              name='password'
              placeholder='Enter your Password'
              required
            />
          </div>
          <button className='py-2 px-10 bg-black rounded-md text-white font-semibold'>
            Login
          </button>
        </form>
        {/* Toggle to Register Page */}
        <p className='text-lg font-normal text-black my-2'>
          New User?{" "}
          <Link to='/register' className='text-green-600'>
            Register
          </Link>
        </p>
        {/* Login With Provider */}
        <div>
          <button className='flex justify-center items-center w-full bg-red-400 rounded-md py-2 mb-2 text-black font-semibold text-xl'>
            <FaGoogle className='text-xl mr-2' /> Login With Google
          </button>
          <button className='flex justify-center items-center w-full bg-black rounded-md py-2 mb-2 text-white font-semibold text-xl'>
            <FaGithub className='text-xl mr-2' /> Login With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
