import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../asset/dantist-banner.jpg'
import banner2 from '../../asset/banner2.jpeg'
import banner3 from '../../asset/banner3.jpg'

const Banner = () => {
    return (
        // <div className='banner-div row m-0 mx-auto'>
        //     <div className='p-3'>
        //         <img width='100%' height='350px' src='https://i.ibb.co/PjT2b3L/Screenshot-6.png' alt="" />
        //         <h1 className='banner text-white'><span className='display-1'>Clean</span> Your Teeth</h1>
        //     </div>
        // </div>

        <Carousel fade>
            <Carousel.Item>
                {/* <h1 className='banner text-white'><span className='display-1'>Clean</span> Your Teeth</h1> */}
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;