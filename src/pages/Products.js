import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      products
      <ul>
        <li><Link to="/products/product-1">Product-1</Link></li>
        <li><Link to="/products/product-2">Product-2</Link></li>
        <li><Link to="/products/product-3">Product-3</Link></li>
        <p><Link to="..">Back</Link></p> 
      </ul>
    </div>
  )
}

export default Products;

// "to=".." this will always route to home page and if we pass relative to it with path, it will check last 
//page and route to it. See eg on productDetails page"
