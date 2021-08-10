import React from 'react';
import DeleteIcon from '../../../../image/delete-icon.jpg'

const DeleteTable = ({products}) => {

    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result)
            })
    }

    return (
        <table className="table table-borderless table-light table-striped">
        <thead>
            <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Product</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product, index) =>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td><button onClick={() => handleDelete(product._id)}> <img style={{width: "35px"}} src={DeleteIcon} alt=""/> </button></td>
                    </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default DeleteTable;