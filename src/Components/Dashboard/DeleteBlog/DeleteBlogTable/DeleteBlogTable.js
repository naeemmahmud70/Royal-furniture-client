import React from 'react';
import DeleteIcon from '../../../../image/delete-icon.jpg'

const DeleteBlogTable = ({ blogs, setIsDeleted }) => {

    const handleDelete = id => {
        setIsDeleted(true)
        fetch(`http://localhost:5000/deleteBlog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                result.deletedCount && setIsDeleted(false);
                console.log('deleted successfully', result)
            })
    }

    return (
        <div className="table-responsive">
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
        </div>
    );
};

export default DeleteBlogTable;