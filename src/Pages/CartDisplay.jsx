// // src/App.js
// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import OrderSummary from './OrderSummery';

// const initialProducts = [
//   {
//     id: 1,
//     name: 'Basic Tee',
//     color: 'Sienna',
//     size: 'Large',
//     price: 32.00,
//     quantity: 1,
//     stock: true,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     name: 'Basic Tee',
//     color: 'Black',
//     size: 'Large',
//     price: 32.00,
//     quantity: 1,
//     stock: false,
//     shippingTime: '3-4 weeks',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 3,
//     name: 'Nomad Tumbler',
//     color: 'White',
//     size: '',
//     price: 35.00,
//     quantity: 1,
//     stock: true,
//     image: 'https://via.placeholder.com/150',
//   },
// ];

// const Display = () => {
//   const [products, setProducts] = useState(initialProducts);

//   const handleQuantityChange = (id, newQuantity) => {
//     setProducts(products.map(product =>
//       product.id === id ? { ...product, quantity: newQuantity } : product
//     ));
//   };

//   const handleRemove = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
//   const shipping = 5.00;
//   const tax = 8.32;

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
//       <div className="flex">
//         <div className="w-2/3">
//           {products.map(product => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onQuantityChange={handleQuantityChange}
//               onRemove={handleRemove}
//             />
//           ))}
//         </div>
//         <div className="w-1/3 ml-8">
//           <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Display;
