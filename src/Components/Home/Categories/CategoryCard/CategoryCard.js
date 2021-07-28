import React from 'react';
import "./CategoryCard.css"

const CategoryCard = ({ category: {name, img}}) => {
   
    return (
        <div className="category-div d-flex justify-content-around">
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