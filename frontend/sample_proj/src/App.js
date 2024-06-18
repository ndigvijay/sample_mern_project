import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://sample-mern-project-backend.onrender.com/')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={handleSearch} 
        />
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <div className="product-card" key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;