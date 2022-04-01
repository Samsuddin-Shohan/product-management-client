import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/products')
        .then(res =>setProducts(res.data))
    },[]);
    const handleDelete = (id) =>{
       const proceed = window.confirm('Are you sure want Delete?');
       if(proceed){
        axios.delete(`http://localhost:5000/products/${id}`)
        .then(res => {
            if(res.data.deletedCount>0){
                const remainingProducts = products.filter(product => product._id !== id);
                setProducts(remainingProducts);
                console.log(products);
            }
        })
       }
    }
    return (
        <div>
           <h1>Product Available : {products.length} </h1>
           <ul>
            {
                products.map(product => <li key={product._id}>{product.newProduct?.name} : {product.newProduct?.price} : {product.newProduct?.brand} <button onClick={()=> handleDelete(product._id)} >X</button> <Link to={`/products/update/${product._id}`}><button>Update</button></Link> </li>)
            }
           </ul>
        </div>
    );
};

export default Products;