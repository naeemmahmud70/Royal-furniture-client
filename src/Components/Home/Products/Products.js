import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data => setProducts(data))
    })
    return (
        <div>
            <h1>products {products.length}</h1>
        </div>
    );
};

export default Products;