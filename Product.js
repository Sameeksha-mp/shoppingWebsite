// components/Product.js
import React from 'react';
<link rel="stylesheet" href="App.css"></link>
function Product({ product, onIncrement, onDecrement, onAddToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <div className="quantity">
          <button onClick={() => onDecrement(product.id)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => onIncrement(product.id)}>+</button>
        </div>
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
