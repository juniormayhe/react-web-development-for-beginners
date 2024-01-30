import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Products = () => {
    const products = [
        { id: 1, name: 'Product 1', description: 'Description for Product 1' },
        { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    ];

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>

            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route path=":productId" element={<ProductDetails />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Products;
