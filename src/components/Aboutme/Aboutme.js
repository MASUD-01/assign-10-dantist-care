import React from 'react';
import './Aboutme.css'

const Aboutme = () => {
    return (
        <div>
            <div className='w-50 mx-auto about-div  align-items-center'>
                <div>
                    <h1>Md.Masud Rana</h1>
                    <p className='fs-5 text-justify'>I am WebDevloper.My mission is to learn webdevelopent and build up my carrier on this.Now I am continue learning this and acvhiving more skills. Sothat I can be a professional Web developer.
                        continue doing hardwork and fullfil my task and practise daily.  </p>
                </div>
                <div className='text-center'>
                    <img className='img-fluid' src="https://i.ibb.co/mq1GSHZ/Untitled-1-psd-masud-tie.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;