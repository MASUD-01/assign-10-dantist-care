import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='w-50 mx-auto mt-3 mb-4'>
                <h3>Q: Difference between authentication and athorization?</h3>
                <span className='text-danger fs-4'>Ans:</span> Authentication is the first step to check user identity.Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Otherhand,
                Authorization determines what resources a user can access.Authorization  are implemented and maintained any organization.
                Authorization always takes place after authentication.
            </div>
            <div className='w-50 mx-auto mt-3 mb-4'>
                <h3>Q: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <span className='text-danger fs-4'>Ans:</span> I am using firebase to use authentication to user identity. For this we know actual user who visited our sites.
                There many option to implement authentication. such as, email address verification, reset password, email adress change, and sms verification. firse base provides a lot of option.
            </div>
            <div className='w-50 mx-auto mt-3 mb-4'>
                <h3>Q: What other services does firebase provide other than authentication</h3>
                <span className='text-danger fs-4'>Ans:</span> without authentication firebase provide many other services, like as,
                Realtime database, storage, Hosting, Functions and Machene Learning
            </div>

        </div>
    );
};

export default Blogs;