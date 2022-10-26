import React from "react";
import { Link, useLoaderData } from "react-router-dom";
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
      <div className='md:grid grid-cols-6 m-5 md:m-10'>
        {/* Left Nav Container */}
        <div className='col-span-2'>
          <h2 className="text-xl font-bold my-5">We have total {courses.length} Course</h2>
          {
            courses.map((course) => (
              <p
                className="text-lg font-semibold mb-3"
                key={course.id}
              >
                <Link to={`/course/${course.id}`}>{course.title}</Link>
              </p>
            ))
          }
        </div>
        {/* Courses Container */}
        <div className='col-span-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
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
