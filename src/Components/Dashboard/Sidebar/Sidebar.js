import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPen, faPenAlt, faAd, faUsers, faTrash, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=" sidebar d-flex flex-column justify-content-between  col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/seeOrderList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Your Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to="/giveReview" className="text-white">
                        <FontAwesomeIcon icon={faPen} /> <span>Review</span>
                    </Link>
                </li>

                <li>
                    <Link to="/manageOrderList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Manage Orders</span>
                    </Link>
                </li>

                <li>
                    <Link to="/addProduct" className="text-white">
                        <FontAwesomeIcon icon={faAd} /> <span>Add Product</span>
                    </Link>
                </li>
                <li>
                    <Link to="/deleteProduct" className="text-white" >
                        <FontAwesomeIcon icon={faTrash} /> <span>Manage Products</span>
                    </Link>
                </li>
                <li>
                    <Link to="/postBlog" className="text-white" >
                        <FontAwesomeIcon icon={faPenAlt} /> <span>Post Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="/deleteBlog" className="text-white" >
                        <FontAwesomeIcon icon={faTrash} /> <span>Manage Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-white" >
                        <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                    </Link>
                </li>

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;