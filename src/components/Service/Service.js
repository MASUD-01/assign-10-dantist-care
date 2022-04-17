import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, Price, img, des } = service
    const navigate = useNavigate()
    const handledetails = () => {
        navigate('/knowdetails')
    }
    return (
        <div className='col-md-4 mx-auto mt-5 h-100'>
            <Card style={{ width: '18rem', margin: '0 auto', height: '100%' }}>
                <Card.Img variant="top h-50" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{Price}</Card.Title>
                    <Card.Text>
                        {des}
                    </Card.Text>
                    <Button onClick={handledetails} variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;