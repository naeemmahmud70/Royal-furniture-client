import React, { useEffect, useState } from 'react';
import './Products.css'
import ProductCard from './ProductCard/ProductCard'
import Loading from '../../Shared/Loading/Loading';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(' https://aqueous-taiga-74185.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <section id="shop" className="mt-4">
            <div className="d-flex justify-content-center">
                <div className="text-center under-line">
                    <h1 className="fw-bold">Products</h1>
                    <h5>Checkout our latest collections</h5>
                    <span className=""></span>
                </div>
            </div>

            <div className="m-5">
                {products.length === 0 && <Loading></Loading>}
            </div>
            <div className="d-flex justify-content-center">
                <div className="card-flex mt-3">
                    {
                        products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;