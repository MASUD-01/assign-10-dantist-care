import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-div row m-0 mx-auto'>
            <div className='p-3'>
                <img width='100%' height='350px' src='https://i.ibb.co/PjT2b3L/Screenshot-6.png' alt="" />
                <h1 className='banner text-white'><span className='display-1'>Clean</span> Your Teeth</h1>
            </div>
        </div>
    );
};

export default Banner;