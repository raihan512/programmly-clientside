import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, thumbnail } = courseDetails;
    return (
        <div>
            <img src={thumbnail} alt="" />
            <h4>{title}</h4>
        </div>
    );
};

export default CourseDetails;