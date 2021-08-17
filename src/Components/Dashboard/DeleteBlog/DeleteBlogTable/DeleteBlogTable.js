import React from 'react';
import DeleteIcon from '../../../../image/delete-icon.jpg'
import Loading from '../../../Shared/Loading/Loading';

const DeleteBlogTable = ({ blogs, setIsDeleted }) => {

    const handleDelete = id => {
        setIsDeleted(true)
        fetch(` https://aqueous-taiga-74185.herokuapp.com/deleteBlog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                result.deletedCount && setIsDeleted(false);
            });
    };

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
            <div className="m-5">
                {blogs.length === 0 && <Loading></Loading>}
            </div>
        </div>
    );
};

export default DeleteBlogTable;