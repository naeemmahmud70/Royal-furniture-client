import React, { useEffect, useState } from 'react';
import './Products.css'
import ProductCard from './ProductCard/ProductCard'

const Products = () => {
    const [products, setProducts] = useState([]);

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
                    products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;