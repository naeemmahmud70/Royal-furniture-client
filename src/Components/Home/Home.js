import React from 'react';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Products></Products>
        </div>
    );
};

export default Home;