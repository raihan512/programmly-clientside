import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Assets/images/courses-page-banner.webp";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      {/* Banner */}
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-10 lg:py-36'>
        <h3 className='text-center text-xl md:text-2xl lg:text-4xl text-white font-black uppercase'>
          LEARN FROM PROFESSIONALS
        </h3>
        <p className='text-center mt-5 lg:px-80 text-lg md:text-xl text-white font-normal'>
          Online courses are planned by industry professionals to make sure that
          you have the knowledge to build professional software
        </p>
      </div>
      {/* Grid And Courses Container */}
      <div className='grid grid-cols-5 m-5 md:m-10'>
        {/* List Container */}
        <div className='col-span-1'>
          <ul>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
          </ul>
        </div>
        {/* Courses Container */}
        <div className='col-span-4'>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-3 m-5'>
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
