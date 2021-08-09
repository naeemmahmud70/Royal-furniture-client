import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard/BlogCard';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <section className="m-3">
            <div className="d-flex justify-content-center">
                <div className="text-center under-line">
                    <h1 className="fw-bold">BLOGS</h1>
                    <h5>Latest news from the blog</h5>
                    <span className=""></span>
                </div>
            </div>
            <div className="card-flex">
                {
                    blogs.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)
                }
            </div>
        </section>
    );
};

export default Blogs;