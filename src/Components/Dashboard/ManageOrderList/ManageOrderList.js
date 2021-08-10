import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ManageOrderTable from './ManageOrderTable/ManageOrderTable';

const ManageOrderList = () => {

    const [orderList, setOrderList] = useState([]);
    const [IsStatusUpdate, setStatusUpdate] = useState({});


    useEffect(() => {
        fetch('http://localhost:5000/manageOrders')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, []);

    const handleUpdate = (id, orderStatus) => {

        axios.patch(`http://localhost:5000/update/${id}`, { status: orderStatus })
            .then(result => {
                console.log("responding", result)
            })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-9 bg-light">
                <h4 className="fw-bold mt-2">Manage Order</h4>
                <hr />
                <div className="shadow p-5">
                    <ManageOrderTable orderList={orderList} key={orderList._id} handleUpdate={handleUpdate}></ManageOrderTable>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderList;