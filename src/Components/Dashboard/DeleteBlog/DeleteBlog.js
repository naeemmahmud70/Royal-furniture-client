import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DeleteBlogTable from './DeleteBlogTable/DeleteBlogTable';

const DeleteBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-4  bg-light">
                <h2 className="fw-bold">Delete Product</h2>
                <hr />
                <div className="shadow p-5">
                    <DeleteBlogTable blogs={blogs}></DeleteBlogTable>
                </div>
            </div>
        </div>
    );
};

export default DeleteBlog;