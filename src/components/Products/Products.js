import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/products')
        .then(res =>setProducts(res.data))
    },[]);
    return (
        <div>
           <h1>Product Available : {products.length} </h1>
           <ul>
            {
                products.map(product => <li key={product._id}>{product.newProduct?.name} : {product.newProduct?.price} : {product.newProduct?.brand} </li>)
            }
           </ul>
        </div>
    );
};

export default Products;