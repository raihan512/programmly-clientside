import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { desc, title, thumbnail, level, rating, duration, fee, istructor, enrolled } = courseDetails;
    return (
        <div className='bg-gray-500 py-5 px-12 md:px-40'>
            {/* Course Title */}
            <h3 className='text-xl md:text-2xl lg:text-4xl font-bold text-white'>{title}</h3>
            <img src={thumbnail} alt="" className='mt-2 mb-5 rounded-md' />
            {/* Instructor Details */}
            <div className="flex items-center my-5">
                <img src={istructor.image} alt="" className='rounded-full' />
                <div className='ml-3'>
                    <h5 className='text-lg text-white font-bold'>{istructor.name}</h5>
                    <p className='text-white'>{istructor.about}</p>
                </div>
            </div>
            {/* About Course */}
            <div className='md:flex text-white text-lg font-semibold'>
                <p className='mr-2'>Level: {level}</p>
                <p className='mr-2'>Duration: {duration}</p>
                <p className='mr-2'>Fee: {fee}</p>
            </div>
            <div className='text-lime-500 text-xl'>
                <p>Total Enrolled Student {enrolled}</p>
                <p className='flex items-center text-yellow-400'> <FaStar />{rating}</p>
            </div>
            {/* Course Details */}
            <p className='text-lg text-white mt-5'>
                Description: {desc}
            </p>
            <button className='py-2 px-5 bg-red-300 text-black rounded-sm font-bold text-right'><Link to='/courses' className='flex items-center'><FaEye /> See all Courses</Link></button>
        </div>
    );
};

export default CourseDetails;