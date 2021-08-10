import React from 'react';
import DeleteIcon from '../../../../image/delete-icon.jpg'

const DeleteBlogTable = ({ blogs }) => {

    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/deleteBlog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result)
            })
    }

    return (
        <table className="table table-borderless table-light table-striped">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Blog</th>
                    <th className="text-secondary" scope="col"> Posted Date</th>
                    <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogs.map((blog, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.date}</td>
                            <td><button onClick={() => handleDelete(blog._id)}> <img style={{ width: "35px" }} src={DeleteIcon} alt="" /> </button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default DeleteBlogTable;