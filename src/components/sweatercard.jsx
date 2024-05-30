import React from 'react';

const SweaterCard = () => {
  return (
    <div className="flex border-4 border-white rounded-lg overflow-hidden shadow-lg divide-slate-50 > * + *">
      <div className="bg-slate-200 flex flex-col justify-between w-1/2 p-6">
        <div className="text-2xl font-bold mb-4">Soft Fleece Cat Sweater</div>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="ml-2 text-gray-600">345 ratings</span>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Color:</label>
          <select className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>bluish-gray</option>
            <option>dark grayish-blue</option>
            <option>soft pinkish-purple</option>
            <option>golden yellow</option>
            <option>green</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Size:</label>
          <select className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="flex items-center text-lg font-bold mb-4">
          <span className="text-gray-900">$14.99</span>
        </div>
        <div className="flex items-center">
          <button className="flex-1 bg-black text-white font-bold py-2 px-4 rounded hover:bg-indigo-700">
            Order Now
          </button>
          <div className="ml-4 bg-gray-400 p-2 rounded-full flex items-center justify-center">
            <span className="text-black text-xl">❤️</span>
          </div>
        </div>
      </div>
      <div className="bg-none p-4">
        <img src="/cat-is-wearing-white-sweaterpetals.png" alt="Cat in sweater" className="w-full h-10px object-contain" />
      </div>
    </div>
  );
};

export default SweaterCard;
