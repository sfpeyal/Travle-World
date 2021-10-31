import React from 'react';
import Booking from '../Booking/Booking';
import OurStaff from '../OurStaff/OurStaff';
import Banner from '../Banner/Banner';
import TripsHistory from '../TripsHistory/TripsHistory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurStaff></OurStaff>
            <Booking></Booking>
            <TripsHistory></TripsHistory>
        </div>
    );
};

export default Home;