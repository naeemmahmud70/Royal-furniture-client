import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import "./Categories.css"

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Chair",
            img: "https://i.postimg.cc/m2QmVw5j/Category-chair.png"
        },
        {
            id: 2,
            name: "Sofa",
            img: "https://i.postimg.cc/GtjsTHXF/category-sofa.png"
        },
        {
            id: 3,
            name: "Bed",
            img: "https://i.postimg.cc/pVB9Z5B8/category-bed.png"
        }
    ]
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="under-line text-center ">
                    <h1 className="name-color fw-bold ">Categories</h1>
                    <span className="animate-border"></span>
                </div>
            </div>
            <div id="category-flex-div">
                {
                    categories.map(category => <CategoryCard category={category} key={category.id}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;