import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/footer/Footer';
import Navbar from '../component/navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            
                <Outlet></Outlet>
              
            <Footer></Footer>
        </div>
    );
};

export default Main;