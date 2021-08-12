import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import icon from "../../../image/lamp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEject, faShoppingCart, faBlog, faChalkboardTeacher, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import jwt_decode from "jwt-decode";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const isSignOut = () => {
        const token = sessionStorage.removeItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        return decodedToken.exp > currentTime;
    }

    const handleLogOut = () => {
        console.log('clicked')
        firebase.auth().signOut()
            .then(() => {
                isSignOut()
                const signOutUser = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setLoggedInUser(signOutUser);

            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top t-0 nav-bg">
            <div class="container-fluid">
                <h3><img id="brand-icon" src={icon} alt="" /><span className="text-white">Royal Furniture</span></h3>
                <button class="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-4 fw-bold nav-hover ">
                            <Link class="nav-link text-white" to="/home"><FontAwesomeIcon className="text-white" icon={faHome} /> Home</Link>

                        </li>
                        <li class="nav-item mx-4  fw-bold nav-hover">
                            <a class="nav-link text-white" href="#aboutUs"><FontAwesomeIcon className="text-white" icon={faEject} /> About</a>
                        </li>
                        <li class="nav-item mx-4  fw-bold nav-hover">
                            <a class="nav-link text-white" href="#shop"><FontAwesomeIcon className="text-white" icon={faShoppingCart} /> Shop</a>
                        </li>
                        <li class="nav-item mx-4  fw-bold nav-hover">
                            <a class="nav-link text-white" href="#blog"><FontAwesomeIcon className="text-white" icon={faBlog} /> Blog</a>
                        </li>
                        <li class="nav-item mx-4  fw-bold nav-hover">
                            <Link class="nav-link text-white" to="/dashboard"><FontAwesomeIcon className="text-white" icon={faChalkboardTeacher} /> DashBoard</Link>
                        </li>
                        <li class="nav-item mx-4  fw-bold bg-dark rounded nav-hover">
                            <Link class="nav-link text-white" to="/login"> {loggedInUser.email ? <span onClick={handleLogOut}> LogOut <FontAwesomeIcon className="text-white" icon={faSignOutAlt} /></span> : <span><FontAwesomeIcon className="text-white" icon={faSignInAlt} /> LogIn</span>} </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;