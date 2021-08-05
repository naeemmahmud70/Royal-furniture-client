import React from 'react';
import { useParams } from 'react-router-dom';

const OrderProduct = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            <h1>Order Page.</h1>
        </div>
    );
};

export default OrderProduct;