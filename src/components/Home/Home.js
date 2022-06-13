import React from 'react';
import AppoinmentDetails from '../AppoinmentDetails/AppoinmentDetails';
import Banner from '../Banner/Banner';
import Services from '../Banner/Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AppoinmentDetails></AppoinmentDetails>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;