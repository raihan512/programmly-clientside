import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const Checkout = () => {
    const course = useLoaderData();
    const { title, desc } = course;
    const ref = React.createRef();
    return (
        <div>
            <div ref={ref} className='text-center mt-20 px-20' style={{ width: 1200, height: 500 }}>
                <h3 className='text-black text-4xl'>{title}</h3>
                <p>{desc}</p>
            </div>
            <Pdf targetRef={ref} filename="CourseDetails.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='bg-green-300 mt-5 py-2 px-10 rounded-md'>Generate Pdf</button>}
            </Pdf>
        </div>
    );
};

export default Checkout;