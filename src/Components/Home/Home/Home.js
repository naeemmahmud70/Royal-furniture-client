import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Categories></Categories>
            <Products></Products>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;