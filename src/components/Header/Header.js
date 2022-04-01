import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Produts</Link>
                <Link to="/products/add">Add Product</Link>
            </nav>
        </div>
    );
};

export default Header;