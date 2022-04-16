import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, Price, img } = service
    const navigate = useNavigate()
    const handledetails = () => {
        navigate('/knowdetails')
    }
    return (
        <div className='col-md-4 mx-auto'>
            <Card style={{ width: '18rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{Price}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button onClick={handledetails} variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;