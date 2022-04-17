import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        return (
            navigate('/home')
        );
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 mx-auto my-2 d-block'>
                <div className='' style={{ marginLeft: '' }}>
                    <img width='30px' height='30px' src="https://i.ibb.co/VBzdG0P/gooogle.png" alt="" />
                    <span className='ps-2'>Google sign In</span>
                </div>
            </button >
        </div>
    );
};

export default SocialLogin;