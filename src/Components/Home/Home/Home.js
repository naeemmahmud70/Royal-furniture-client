import React from 'react';
import Blogs from '../Blogs/Blogs';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import InteriorIdea from '../InteriorIdea/InteriorIdea';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Products></Products>
            <InteriorIdea></InteriorIdea>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;