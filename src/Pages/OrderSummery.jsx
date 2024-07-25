// src/components/OrderSummary.js
import React from 'react';

const OrderSummary = ({ subtotal, shipping, tax }) => {
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Order summary</h2>
      <div className="mb-2 flex justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="mb-2 flex justify-between">
        <span>Shipping estimate</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <span>Tax estimate</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="mb-4 flex justify-between font-bold">
        <span>Order total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
