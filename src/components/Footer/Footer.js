import React from 'react';

const Footer = () => {
    return (
        <div className='bg-primary row text-white m-0' style={{ height: '300px' }}>
            <div className='col-md-4 d-flex align-items-center'>
                <h3 className='p-5'>Dantist Care</h3>
            </div>
            <div className='col-md-4 d-flex align-items-center'>
                <p>&copy; <small>by Dantist Care</small> 2022</p>
            </div>
        </div>
    );
};

export default Footer;