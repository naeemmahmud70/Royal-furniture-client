import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './SeeOrderList.css'
import SeeOrderListCard from './SeeOrderListCard/SeeOrderListCard';

const SeeOrderList = () => {

    const [orderList, setOrderList] = useState([]);
    const [isCanceled, setIsCanceled] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(' https://aqueous-taiga-74185.herokuapp.com/seeOrders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [loggedInUser.email, isCanceled]);

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-light">
                <h2 className="fw-bold p-2">Order List</h2>
                <hr />
                <div className="shadow p-5">
                    <SeeOrderListCard orderList={orderList} key={orderList._id} setIsCanceled={setIsCanceled}></SeeOrderListCard>
                </div>
            </div>
        </div>
    );
};

export default SeeOrderList;