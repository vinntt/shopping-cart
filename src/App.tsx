import React from 'react';
import './App.css';
import ProductsList from './Products/ProductsList';
import ProductForm from './Products/ProductForm';

function App() {
  return (
    <div className="App">
      <ProductsList/>
      <ProductForm/>
    </div>
  );
}

export default App;
