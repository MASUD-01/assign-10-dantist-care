import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigateRegister = () => {
        navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home')

    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }
    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-primary text-center'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>

                <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p>Create Dantist new User? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;