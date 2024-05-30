import React from 'react';
import SweaterCard from './components/sweatercard';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-11/12 max-w-5xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ADORABLE KITTEN ACCESSORIES STORE</h1>
          <p className="text-lg text-gray-200">
          Transform your home into a haven of warmth and charm with an adorable kitten. Shop now for top-quality kitten accessories that ensure your pet's comfort and happiness. Visit our store today and discover everything you need to pamper your furry friend!
          </p>
        </header>
        <div className="bg-flush-200 p-6 rounded-lg shadow-lg">
          <SweaterCard />
        </div>
      </div>
    </div>
  );
}

export default App;
