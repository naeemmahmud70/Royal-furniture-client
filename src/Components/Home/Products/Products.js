import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div>
            <div className="text-center m-3">
                <h2>Popular Products</h2>
                <h5>Checkout our latest collections.</h5>
            </div>
            <div className="card-flex">
                {
                    products.map(product => <Product product={product} key={product.name}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;