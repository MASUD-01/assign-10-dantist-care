import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const from = location.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const navigateRegister = () => {
        navigate('/register')
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    let errormessage;
    if (error) {

        errormessage = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    const resetpassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        }
        else {
            toast('please enter your email')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-primary text-center'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errormessage}
            <p>Create Dantist new User? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>forget password? <button className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetpassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;