import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetails, { ProductList } from "./ProductList";

function ProductLouter() {
  return (
    <div>
      <Routes>
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default ProductLouter;
