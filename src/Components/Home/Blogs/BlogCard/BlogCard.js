import React from 'react';
import './BlogCard.css'

const BlogCard = ({blog}) => {
    console.log(blog)
    const {title, date, imageURL} = blog;
    console.log(title, date, imageURL)
    return (
        <div className="blog-card shadow bg-light">
            <div className="blog-img text-center">
                <img src={imageURL} alt=""/>
            </div>
            <div>
                <h5>{date}</h5>
                <h3 className="fw-bold">{title}</h3>
            </div>
        </div>
    );
};

export default BlogCard;