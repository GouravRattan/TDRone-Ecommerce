// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center py-4 border-b">
      <img className="w-24 h-24 object-cover rounded" src={product.image} alt={product.name} />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.color} | {product.size}</p>
        <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
        <p className={`text-sm ${product.stock ? 'text-green-500' : 'text-gray-500'}`}>
          {product.stock ? 'In stock' : `Ships in ${product.shippingTime}`}
        </p>
      </div>
      <div className="ml-4 flex items-center">
        <button 
          className="px-2 py-1 border rounded" 
          onClick={() => onQuantityChange(product.id, product.quantity - 1)} 
          disabled={product.quantity <= 1}
        >
          -
        </button>
        <span className="mx-2">{product.quantity}</span>
        <button 
          className="px-2 py-1 border rounded" 
          onClick={() => onQuantityChange(product.id, product.quantity + 1)}
        >
          +
        </button>
        <button className="ml-4 text-red-500" onClick={() => onRemove(product.id)}>×</button>
      </div>
    </div>
  );
};

export default ProductCard;
