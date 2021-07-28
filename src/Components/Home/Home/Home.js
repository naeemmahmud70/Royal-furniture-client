import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Categories></Categories>
            <Footer></Footer>
        </div>
    );
};

export default Home;