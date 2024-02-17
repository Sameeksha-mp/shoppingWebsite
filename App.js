// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Product from './components/Product';
{/* <link src="product.html"> */}
<link rel="stylesheet" href="App.css"></link>

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, rating: 4, image:'product1.jpeg', quantity: 0 },
    { id: 2, name: 'Product 2', price: 20, rating: 3, image: 'product2.jpeg', quantity: 0 },
    // Add more products as needed
  ]);

  const handleIncrement = (id) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    }));
  };

  const handleDecrement = (id) => {
    setProducts(products.map(product => {
      if (product.id === id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
  };

  const handleAddToCart = (id) => {
    // Add logic to add product to cart
    console.log(`Product with ID ${id} added to cart`);
  };

  return (
    <div className="App">
      <Navbar />
      <Categories />
      <div className="products">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
