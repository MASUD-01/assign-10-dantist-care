import React from 'react';
import { Button, Card } from 'react-bootstrap';
import cavity from '../../asset/cavity.png'
import './Servicesection.css'

const Servicesection = () => {
    return (
        <div className='mainboss'>
            <p>Our Dental services</p>
            <span>Our services</span>
            <div className='maindiv'>
                <Card className='cardshadow' style={{ width: '14rem', border: 'none' }}>
                    <Card.Img variant="top" src={cavity} className='cavity' />
                    <Card.Body>
                        <p>Cavity <br /> Protection</p>
                        <Button variant="">More Info</Button>
                    </Card.Body>
                </Card>
                <Card className='cardshadow' style={{ width: '14rem', border: 'none' }}>
                    <Card.Img variant="top" src={cavity} className='cavity' />
                    <Card.Body>
                        <p>Cavity <br /> Protection</p>
                        <Button variant="">More Info</Button>
                    </Card.Body>
                </Card>
                <Card className='cardshadow' style={{ width: '14rem', border: 'none' }}>
                    <Card.Img variant="top" src={cavity} className='cavity' />
                    <Card.Body>
                        <p>Cavity <br /> Protection</p>
                        <Button variant="">More Info</Button>
                    </Card.Body>
                </Card>
                <Card className='cardshadow' style={{ width: '14rem', border: 'none' }}>
                    <Card.Img variant="top" src={cavity} className='cavity' />
                    <Card.Body>
                        <p>Cavity <br /> Protection</p>
                        <Button variant="">More Info</Button>
                    </Card.Body>
                </Card>
            </div>
            <button className='btnservice'>More service...</button>
        </div>
    );
};

export default Servicesection;