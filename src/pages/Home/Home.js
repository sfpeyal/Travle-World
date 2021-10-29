import React from 'react';
import Record from '../../Record/Record';
import Booking from '../Booking/Booking';
import OurStaff from '../OurStaff/OurStaff';


const Home = () => {
    return (
        <div>
            <OurStaff></OurStaff>
            <Booking></Booking>
            <Record></Record>
        </div>
    );
};

export default Home;