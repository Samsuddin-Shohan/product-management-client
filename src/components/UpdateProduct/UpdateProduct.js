import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const UpdateProduct = () => {
    const [user,setUser]= useState({_id:'',newProduct:{}});
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`)
        .then(res => setUser(res.data))
    },[]);
    const handleNameChange = e =>{
        let updatedName = e.target.value;
        let updatedUser = {name:updatedName, price: user.newProduct?.price,brand:user.newProduct?.brand};
        setUser({_id:id,newProduct:updatedUser});
        
        
    }
    const handlePriceChange = e =>{
        let updatedPrice = e.target.value;
        let updatedUser = {name:user.newProduct?.name, price:updatedPrice,brand:user.newProduct?.brand};
        setUser({_id:id,newProduct:updatedUser});
        
        
    }
    const handleBrandChange = e =>{
        let updatedBrand = e.target.value;
        let updatedUser = {name:user.newProduct?.name ,price: user.newProduct?.price,brand:updatedBrand};
        setUser({_id:id,newProduct:updatedUser});      
    
    }
    const handleSubmit = (e)=>{
        //console.log('clicked');
        axios.put(`http://localhost:5000/products/${id}`,{user})
        .then(res => console.log(res) )
        e.preventDefault();
    }
   
    return (
        <div>
            <h1>This is Update products</h1>
            <p>{user._id}</p>
            <form  onSubmit={handleSubmit} >
                
             <input type="text" value={user?.newProduct?.name || ''} onChange = {handleNameChange} />
             <input type="text" value={user?.newProduct?.price || ''} onChange = {handlePriceChange} />
             <input type="text" value={user?.newProduct?.brand || ''} onChange = {handleBrandChange} />
             <input type="submit" value="Update" />    
                
            </form>
            
        </div>
    );
};

export default UpdateProduct;