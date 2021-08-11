import React from 'react';
import './ManageOrderTable.css'

const ManageOrderTable = ({ orderList, handleUpdate }) => {

    return (
        <table className="table table-borderless table-light table-striped">
            <thead>
                <tr>
                    <th className="text-secondary text-center" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Product</th>
                    <th className="text-secondary" scope="col">Price</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">email</th>
                    <th className="text-secondary" scope="col">Status</th>
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
                            <td>{order.order.email}</td>
                            <td>

                                <div class="dropdown">
                                    <button class="drop-down-btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        {order.orderStatus}
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li><button onClick={() => handleUpdate(order._id, 'Pending')} class="dropdown-item selection-option" type="button">Pending</button></li>
                                        <li><button onClick={() => handleUpdate(order._id, 'On Going')} class="dropdown-item selection-option" type="button">On Going</button></li>
                                        <li><button onClick={() => handleUpdate(order._id, 'Done')} class="dropdown-item selection-option" type="button">Done</button></li>
                                    </ul>
                                </div>

                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ManageOrderTable;