import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = ({ blog }) => {
    const { title, date, imageURL, _id } = blog;
    
    return (
        <div className="blog-card shadow bg-light" >
            <Link to={"/fullBlog/" + _id}>
                <div className="blog-image text-center">
                    <img className="" src={imageURL} alt="" />
                </div>
                <div>
                    <h5>{date}</h5>
                    <h3 className="fw-bold">{title}</h3>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;