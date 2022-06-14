import React from 'react';
import './Footer.css'
import logo from '../../asset/png.png'

const Footer = () => {
    return (
        <div className='bg-primary row text-white m-0 mt-5 dantist' style={{ height: '350px' }}>
            <div className='col-md-4 d-flex align-items-center justify-content-around'>
                <div>
                    <div><img width='90px' src={logo} alt="" /></div>
                    <p className='fs-5'>Dantist Care</p>
                </div>
            </div>
            <div className='col-md-4 d-flex align-items-center'>
                <p>Dentist Care &copy; <small>by Dantist Care</small> 2022. All right reserved</p>
            </div>
            <div className='col-md-4 d-flex align-items-center'>
                <p className=''>Terms of use privicy policy</p>

            </div>
        </div>
    );
};

export default Footer;