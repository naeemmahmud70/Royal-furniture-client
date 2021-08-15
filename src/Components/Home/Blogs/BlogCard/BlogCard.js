import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogCard = ({ blog }) => {
    const { title, date, imageURL, _id } = blog;

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])

    return (
        <div data-aos="zoom-in-up" className="shadow bg-light blog-card" >
            
                <Link to={"/fullBlog/" + _id}>
                    <div className="blog-image text-center">
                        <img className="img-fluid" src={imageURL} alt="" />
                    </div>
                    <div>
                        <h5 className="pt-3">{date}</h5>
                        <h3 className="fw-bold">{title}</h3>
                    </div>
                </Link>
         
        </div>
    );
};

export default BlogCard;