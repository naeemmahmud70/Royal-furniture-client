import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="m-3">
            <div className="text-center">
                <h1 className="fw-bold">BLOG</h1>
                <h5>Latest new from the blog</h5>
            </div>
            <div className="card-flex">
                {
                    blogs.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;