import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-9 col-sm-12'>
                <h1>this is profile.</h1>
            </div>
        </div>
    );
};

export default Dashboard;