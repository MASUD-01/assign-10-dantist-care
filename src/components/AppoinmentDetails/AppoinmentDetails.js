import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './AppoinmentDetails.css'

const AppoinmentDetails = () => {
    return (
        <div className='appoinment-section'>
            <div className='section1'>
                <div style={{ width: '400px' }}>
                    <span>Welcome to Dentist Care!</span>
                    <h5>Welcome to a Family Dental Clinic</h5>
                    <p>
                        Professional dental clinic ProDent offers the whole range of dentistry services: treatment of caries, gum diseases, tooth whitening, implantation, dentures (crowns installation), surgery, occlusion correction (braces) etc. Our dentists will help you solve any dental problem painless and carefully
                    </p>
                </div>
            </div>
            <div className='section2'>

                <Card className='cardDetailsMain' style={{ width: '', height: '' }}>
                    <div className='card-heading'><p>Make an appoinment Today!</p></div>
                    <Card.Body className='cardDetails'>
                        <form action="" className='form-data'>
                            <input type="text" placeholder='Your name' />
                            <input type="text" placeholder='Your email' />
                            <input type="text" placeholder='phone' />
                            <input type="text" placeholder='Doctor name' />
                        </form>
                        <p>
                            <input type="checkbox" name="" id="" />
                            I agree that my submitted data is being collected and stored.
                        </p>
                        <Button className='btnDetails' variant="primary">Submit info</Button>
                    </Card.Body>

                </Card>
            </div>
        </div>
    );
};

export default AppoinmentDetails;