import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DeleteBlogTable from './DeleteBlogTable/DeleteBlogTable';

const DeleteBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        fetch(' https://aqueous-taiga-74185.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [isDeleted])

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9  bg-light">
                <h2 className="fw-bold p-2">Delete Blog</h2>
                <hr />
                <div className="shadow p-5">
                    <DeleteBlogTable blogs={blogs} setIsDeleted={setIsDeleted}></DeleteBlogTable>
                </div>
            </div>
        </div>
    );
};

export default DeleteBlog;