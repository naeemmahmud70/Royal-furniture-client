import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DeleteTable from './DeleteTable/DeleteTable';

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setDeleted] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleted])


    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-4  bg-light">
                <h2 className="fw-bold">Delete Product</h2>
                <hr />
                <div className="shadow p-5">
                    <DeleteTable products={products} setDeleted={setDeleted}></DeleteTable>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;