import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import icon from "../../../image/lamp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEject, faShoppingCart, faBlog, faChalkboardTeacher, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top nav-bg">
            <div class="container-fluid">
                <h3><img id="brand-icon" src={icon} alt="" /><span className="text-white">Royal Furniture</span></h3>
                <button class="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-4 fw-bold nav-hover">
                            <Link class="nav-link text-white" to="/home"><FontAwesomeIcon className="text-white" icon={faHome} /> Home</Link>

                        </li>
                        <li class="nav-item mx-4 fw-bold nav-hover">
                            <Link class="nav-link text-white" to="/about"><FontAwesomeIcon className="text-white" icon={faEject} /> About</Link>
                        </li>
                        <li class="nav-item mx-4 fw-bold nav-hover">
                            <a class="nav-link text-white" href="#shop"><FontAwesomeIcon className="text-white" icon={faShoppingCart} /> Shop</a>
                        </li>
                        <li class="nav-item mx-4 fw-bold nav-hover">
                            <Link class="nav-link text-white" to="/blog"><FontAwesomeIcon className="text-white" icon={faBlog} /> Blog</Link>
                        </li>
                        <li class="nav-item mx-4 fw-bold nav-hover">
                            <Link class="nav-link text-white" to="/dashboard"><FontAwesomeIcon className="text-white" icon={faChalkboardTeacher} /> DashBoard</Link>
                        </li>
                        <li class="nav-item mx-4 fw-bold bg-dark rounded nav-hover">
                            <Link class="nav-link text-white" to="/login"><FontAwesomeIcon className="text-white" icon={faSignInAlt} /> Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;