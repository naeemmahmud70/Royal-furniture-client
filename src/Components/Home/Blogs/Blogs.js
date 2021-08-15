import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
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
        <section id="blog" className="mt-5">
            <div className="d-flex justify-content-center">
                <div className="text-center under-line">
                    <h1 className="fw-bold">BLOGS</h1>
                    <h5>Latest news from the blog</h5>
                    <span className=""></span>
                </div>
            </div>
            <div className="m-5">
                {blogs.length === 0 && <Loading></Loading>}
            </div>
            <div className="d-flex justify-content-center">
                <div className="card-flex mt-3">
                    {
                        blogs.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;