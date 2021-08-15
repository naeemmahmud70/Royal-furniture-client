import React, { useEffect } from 'react';
import "./CategoryCard.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryCard = ({ category: { name, img } }) => {

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);

    return (
        <div  data-aos="fade-left" className="category-div d-flex justify-content-around ">
            <div className="d-flex align-items-center">
                <h2 className="fw-bold">{name}</h2>
            </div>
            <div>
                <img id="category-img" src={img} alt="" />
            </div>
        </div>
    );
};

export default CategoryCard;