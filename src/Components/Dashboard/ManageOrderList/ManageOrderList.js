import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ManageOrderTable from './ManageOrderTable/ManageOrderTable';

const ManageOrderList = () => {

    const [orderList, setOrderList] = useState([]);
    const [IsStatusUpdate, setStatusUpdate] = useState(false);

    useEffect(() => {
        fetch(' https://aqueous-taiga-74185.herokuapp.com/manageOrders')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [IsStatusUpdate]);

    const handleUpdate = (id, orderStatus) => {
        setStatusUpdate(true)
        axios.patch(` https://aqueous-taiga-74185.herokuapp.com/update/${id}`, { status: orderStatus })
            .then(res => {
                res.data.modifiedCount && setStatusUpdate(false)
                console.log("responding", res)
            });
    };

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-light">
                <h2 className="fw-bold p-2">Manage Order</h2>
                <hr />
                <div className="shadow p-5">
                    <ManageOrderTable orderList={orderList} key={orderList._id} handleUpdate={handleUpdate}></ManageOrderTable>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderList;