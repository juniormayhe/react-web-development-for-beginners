import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h3>Product Details</h3>
      <p>Product ID: {productId}!</p>
    </div>
  );
};

export default ProductDetails;
