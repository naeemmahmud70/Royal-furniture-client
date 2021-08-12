import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-9 col-sm-12 bg-light'>
                <h2 className="fw-bold">Your Profile</h2>
                <h5>Dear {loggedInUser.name}, Welcome to Royal Furniture!</h5>
                <hr />
                <div className="text-center shadow col-md-8 p-5 rounded">
                    <img className="rounded-circle" src={loggedInUser.photo} alt="" />
                    <h3 className="fw-bold p-2">{loggedInUser.name}</h3>
                    <Link onClick={handleLogOut} to="/"> <button className="fw-bold submit-button ">LogOut <FontAwesomeIcon className="text-white" icon={faSignOutAlt} /></button></Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Dashboard;