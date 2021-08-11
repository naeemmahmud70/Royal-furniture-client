import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
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
                    <button className="fw-bold submit-button ">LogOut <FontAwesomeIcon className="text-white" icon={faSignOutAlt} /></button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;