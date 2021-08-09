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
        <section className="mt-4">
            <div className="d-flex justify-content-center">
                <div className="text-center under-line">
                    <h1 className="fw-bold">Products</h1>
                    <h5>Checkout our latest collections</h5>
                    <span className=""></span>
                </div>
            </div>
            <div className="card-flex mt-3">
                {
                    products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default Products;