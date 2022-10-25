import React from 'react';
import { FaArrowCircleRight, FaChartLine, FaStar, FaStopwatch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, title, thumbnail, level, rating, duration, fee } = course;
    return (
        <div className='bg-gray-400 pt-5 pb-12 px-5 rounded-md relative'>
            <img src={thumbnail} alt="" className='rounded-md mb-5' />
            <h3 className='text-xl md:text-2xl font-bold text-white'>{title}</h3>
            <div className='flex justify-between items-center my-3'>
                <span className='flex items-center text-lg font-semibold'><FaChartLine className='text-yellow-300 text-xl mr-1' /> {level}</span>
                <span className='flex items-center text-lg font-semibold'><FaStopwatch className='text-yellow-300 text-xl mr-1' /> {duration}</span>
                <span className='flex items-center text-lg font-semibold'><FaStar className='text-yellow-300 text-xl mr-1' /> {rating}</span>
            </div>
            <div className='absolute bottom-2 md:w-96 leftt-0 w-64'>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl font-black text-black'>${fee}</p>
                    <Link to={`/course/${id}`}>
                        <button className='flex items-center text-lg font-normal text-black'>View Course <FaArrowCircleRight className='ml-2' /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;