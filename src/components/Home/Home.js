import React from 'react';
import AppoinmentDetails from '../AppoinmentDetails/AppoinmentDetails';
import Banner from '../Banner/Banner';
import Services from '../Banner/Services/Services';
import Footer from '../Footer/Footer';
import Servicesection from '../Servicesection/Servicesection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AppoinmentDetails></AppoinmentDetails>
            <Servicesection></Servicesection>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;