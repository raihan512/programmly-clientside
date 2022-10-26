import React, { useContext, useState } from "react";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Assets/Brand/Programmly.png";
import { AuthProvider } from "../../../Contexts/AuthContext/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthProvider);
  const [darkMode, setDarkMode] = useState(true);
  const darkModeStyle = "bg-black text White";
  const lightModeStayle = "bg-white text-black";

  return (
    <div
      className={`md:flex justify-between items-center bg-black px-5 md:px-40 py-2 shadow-md text-white ${
        darkMode ? darkModeStyle : lightModeStayle
      }`}
    >
      {/* Website Logo And Name */}
      <div className='flex items-center '>
        <img src={Logo} alt='' className='' />
        <p className='text-2xl font-bold'>Programmly</p>
      </div>
      {/* Menu */}
      <div className='flex md:flex-row flex-col'>
        <NavLink
          to='/'
          className=' text-xl font-semibold uppercase mr-5 border-b-2 border-transparent hover:border-white'
        >
          Home
        </NavLink>

        <NavLink
          to='/courses'
          className=' text-xl font-semibold uppercase mr-5 border-b-2 border-transparent hover:border-white'
        >
          Courses
        </NavLink>
        <NavLink
          to='/faq'
          className=' text-xl font-semibold uppercase mr-5 border-b-2 border-transparent hover:border-white'
        >
          FAQ
        </NavLink>
        <NavLink
          to='/blog'
          className=' text-xl font-semibold uppercase mr-5 border-b-2 border-transparent hover:border-white'
        >
          Blog
        </NavLink>
      </div>
      {/* Authentication & Toggle DarkMode */}
      <div className=' flex items-center'>
        {user ? (
          <>
            {user.photoURL ? (
              <img
                className='h-8 rounded-full'
                src={user.photoURL}
                alt='User'
                title={user.displayName ? user.displayName : "User"}
              />
            ) : (
              <FaUser />
            )}
            <button className='ml-5' onClick={logOut}>
              Logout
            </button>
          </>
        ) : (
          <>
            {" "}
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
          </>
        )}

        <button
          className='text-lg ml-5 text-yellow-400'
          onClick={() => setDarkMode((current) => !current)}
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default Header;
