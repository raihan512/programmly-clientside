import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Assets/Brand/Programmly.png";

const Header = () => {
  return (
    <div className='md:flex justify-between items-center bg-black px-5 md:px-40 py-2 shadow-md md:sticky md:top-0'>
      {/* Website Logo And Name */}
      <div className='flex items-center text-white'>
        <img src={Logo} alt='' className='' />
        <p className='text-2xl font-bold'>Programmly</p>
      </div>
      {/* Menu */}
      <div className='flex md:flex-row flex-col'>
        <NavLink
          to='/'
          className='text-white text-xl font-semibold uppercase mr-5 border-b-2 border-transparent hover:border-white'
        >
          Home
        </NavLink>

        <NavLink
          to='/courses'
          className='text-white text-xl font-semibold uppercase mr-5 border-b-2 border-transparent hover:border-white'
        >
          Courses
        </NavLink>
        <NavLink
          to='/faq'
          className='text-white text-xl font-semibold uppercase mr-5 border-b-2 border-transparent hover:border-white'
        >
          FAQ
        </NavLink>
        <NavLink
          to='/blog'
          className='text-white text-xl font-semibold uppercase mr-5 border-b-2 border-transparent hover:border-white'
        >
          Blog
        </NavLink>
      </div>
      {/* Authentication */}
      <div className='text-white flex'>
        <Link
          to='login'
          className='mr-2 md:ml-4 text-xl font-semibold uppercase'
        >
          Login
        </Link>
        <Link
          to='register'
          className='mr-2 md:ml-4 text-xl font-semibold uppercase'
        >
          Register
        </Link>
      </div>
      {/* Toggle Theme */}

      <div className='absolute top-2 right-2'>
        <button>
          <FaMoon className='text-white' />
        </button>
        <button>
          <FaSun className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default Header;
