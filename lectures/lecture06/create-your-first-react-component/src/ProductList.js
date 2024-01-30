import React from "react";  

const products = [
    {name: "Apple", price: 1},
    {name: "Grapes", price: 3.5},
    {name: "Orange", price: 2},
];

function ProductList(){
    return (
        <div>
            <h1>Product list</h1>
            <ul>
                {products.map((product)=>(
                    <li key={product.name}>
                        {product.name}, {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;