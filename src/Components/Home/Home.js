import React from 'react';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;