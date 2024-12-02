import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';

// Mock Product Data
const products = [
  { id: '1', name: 'Product One', description: 'This is the first product', price: '$10' },
  { id: '2', name: 'Product Two', description: 'This is the second product', price: '$20' },
  { id: '3', name: 'Product Three', description: 'This is the third product', price: '$30' },
];

// ProductDetails Component
const ProductDetails = () => {
  const { productId } = useParams(); // Get productId from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching product data
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>; // Show loading state
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <Link to="/">Back to Product List</Link>
    </div>
  );
};

// ProductList Component
export const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductDetails;
