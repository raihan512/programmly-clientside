import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='flex justify-center'>
      <form className='w-6/12 bg-gray-100 p-20 rounded-md mt-20'>
        <div className='flex flex-col mb-5'>
          <label className='text-2xl font-bold mb-2'>Full Name</label>
          <input
            className='py-2 px-5 rounded-md text-xl font-semibold text-gray-300'
            type='text'
            name='name'
            placeholder='Enter your Full Name'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label className='text-2xl font-bold mb-2'>Photo URL</label>
          <input
            className='py-2 px-5 rounded-md text-xl font-semibold text-gray-300'
            type='text'
            name='photUrl'
            placeholder='Enter your Photo URL'
            required
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label className='text-2xl font-bold mb-2'>Email</label>
          <input
            className='py-2 px-5 rounded-md text-xl font-semibold text-gray-300'
            type='email'
            name='email'
            placeholder='Enter your Email'
            required
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label className='text-2xl font-bold mb-2'>Password</label>
          <input
            className='py-2 px-5 rounded-md text-xl font-semibold text-gray-300'
            type='password'
            name='password'
            placeholder='Enter your Password'
            required
          />
        </div>
        <button className='py-2 px-10 bg-black rounded-md text-white font-semibold'>
          Register
        </button>
        <p className='text-lg font-normal text-black MT-2'>
          Already have an account?{" "}
          <Link to='/login' className='text-green-600'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
