import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { title } = course;
    return (
        <div className='text-center mt-20'>
            <h3 className='text-black text-4xl'>{title}</h3>
        </div>
    );
};

export default Checkout;