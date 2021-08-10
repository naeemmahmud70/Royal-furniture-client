import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './SeeOrderList.css'
import SeeOrderListCard from './SeeOrderListCard/SeeOrderListCard';

const SeeOrderList = () => {
    const [orderList, setOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)

    useEffect(() => {
        fetch('http://localhost:5000/seeOrders?email='+ loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, []);

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-9 bg-light">
                <h4 className="fw-bold mt-2">Order List</h4>
                <hr />
                <div className="shadow p-5">
                    <SeeOrderListCard orderList={orderList} key={orderList._id}></SeeOrderListCard>
                </div>
            </div>
        </div>
    );
};

export default SeeOrderList;