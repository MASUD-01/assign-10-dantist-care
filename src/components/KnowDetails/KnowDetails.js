import React from 'react';
import { useNavigate } from 'react-router-dom';

const KnowDetails = () => {
    const navigate = useNavigate()
    const handlecheckouts = () => {
        navigate('checkouts')
    }
    return (
        <div>
            <h1>This is details about service</h1>
            <button onClick={handlecheckouts} className='btn btn-primary'>Proceed Checkouts</button>
        </div>
    );
};

export default KnowDetails;