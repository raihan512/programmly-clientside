import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.name.value;
    const photoUrl = form.photUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(fullName, photoUrl, email, password);
  };
  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-4/12 bg-gray-100 p-5 md:p-10 rounded-md mt-5 md:mt-20'>
        <h3 className='text-2xl font-bold text-center mb-5'>Login</h3>
        <form onSubmit={handleRegister}>
          <div className='flex flex-col mb-5'>
            <label className='text-xl md:text-2xl font-bold mb-2'>
              Full Name
            </label>
            <input
              className='py-2 px-5 rounded-md text-lg md:text-xl font-semibold'
              type='text'
              name='name'
              placeholder='Enter your Full Name'
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label className='text-xl md:text-2xl font-bold mb-2'>
              Photo URL
            </label>
            <input
              className='py-2 px-5 rounded-md text-lg md:text-xl font-semibold'
              type='text'
              name='photUrl'
              placeholder='Enter your Photo URL'
              required
            />
          </div>
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
            Register
          </button>
        </form>
        <p className='text-lg font-normal text-black mt-2'>
          Already have an account?{" "}
          <Link to='/login' className='text-green-600'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
