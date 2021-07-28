import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MainHeader from './MainHeader/MainHeader';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Header;