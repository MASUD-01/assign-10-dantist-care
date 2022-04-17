import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-primary row text-white m-0 mt-5 dantist' style={{ height: '350px' }}>
            <div className='col-md-4 d-flex align-items-center '>
                <p className='p-5 fs-2'>Dantist Care</p>
            </div>
            <div className='col-md-4 d-flex align-items-center'>
                <p>&copy; <small>by Dantist Care</small> 2022</p>
            </div>
            <div className='col-md-4 d-flex align-items-center'>
                <p className='fs-1'>Services <br />Periodontitis <br />Sensitive teeth</p>

            </div>
        </div>
    );
};

export default Footer;