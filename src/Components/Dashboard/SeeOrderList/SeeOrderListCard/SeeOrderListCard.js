import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const SeeOrderListCard = ({ orderList, setIsCanceled }) => {

    const handleCancel = id => {
        setIsCanceled(true);
        fetch(` https://aqueous-taiga-74185.herokuapp.com/cancel/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                result.deletedCount && setIsCanceled();
                console.log('deleted successfully', result.deletedCount);
            })
    };

    return (
        <div className="table-responsive">
            <table className="table table-borderless table-light table-striped">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Product</th>
                        <th className="text-secondary" scope="col">Price</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone No.</th>
                        <th className="text-secondary" scope="col">Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map((order, index) =>
                            <tr>
                                <td>{index + 1}.</td>
                                <td>{order.order.productName}</td>
                                <td>${order.order.price}</td>
                                <td>{order.order.userName}</td>
                                <td>{order.order.phoneNumber}</td>
                                <td><button className="cancelButton fw-bold" onClick={() => handleCancel(order._id)}>Cancel</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="m-5">
                {orderList.length === 0 && <Loading></Loading>}
            </div>
        </div>
    );
};

export default SeeOrderListCard;