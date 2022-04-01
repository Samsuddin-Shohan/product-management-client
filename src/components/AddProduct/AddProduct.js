import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const AddProduct = () => {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [brand,setBrand]=useState('');
    const handleNameChange = (e)=>{
        setName(e.target.value);
    }
    const handlePriceChange = (e)=>{
        setPrice(e.target.value);
    }
    const handleBrandChange = (e)=>{
        setBrand(e.target.value);
    }

    const  handleAddProduct = (e)=>{
        const newProduct = {name,price,brand};
        axios.post('http://localhost:5000/products',{newProduct})
        .then(res => console.log(res.data))
        alert('your product is added');
        e.target.reset();
        e.preventDefault();
    }
    return (
        <div>
            <h1>Please add your product</h1>
            <form onSubmit={handleAddProduct}>
                <input type="text" onChange={handleNameChange}  placeholder='name' />
                <input type="text" onChange={handlePriceChange} placeholder='price' />
                <input type="text" onChange={handleBrandChange} placeholder='brand' />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;