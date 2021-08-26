import React, { useEffect, useState } from 'react';
import './OrderSummary.css'

const OrderSummary = ({ orderList, IsStatusUpdate }) => {

    const [todaysDate, setTodaysDate] = useState(new Date());
    const [todaysOrder, setTodaysOrder] = useState([]);
    const [pendingOrder, setPendingOrder] = useState([]);

    useEffect(() => {
        fetch(' https://aqueous-taiga-74185.herokuapp.com/todaysOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: todaysDate.toDateString() })
        })
            .then(res => res.json())
            .then(data => {
                setTodaysOrder(data)
            })
    }, []);

    useEffect(() => {
        fetch(' https://aqueous-taiga-74185.herokuapp.com/pendingOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: "Pending" })
        })
            .then(res => res.json())
            .then(data => {
                setPendingOrder(data)
            })
    }, [IsStatusUpdate]);

    return (
        <div className="d-flex justify-content-center mb-4 ">
            <div className="summary-div-style">
                <h4>Todays Order: {todaysOrder.length}</h4>
            </div>
            <div className="summary-div-style">
                <h4>Pending Order: {pendingOrder.length}</h4>
            </div>
            <div className="summary-div-style">
                <h4>Total Order: {orderList.length}</h4>
            </div>
        </div>
    );
};

export default OrderSummary;