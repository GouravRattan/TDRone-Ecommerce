import React from 'react';

const OrderHistory = () => {
  // Mock data for all users' orders
  const allUsersOrders = [
    {
      userId: 1,
      userName: 'John Doe',
      orders: [
        {
          id: 1,
          date: '2023-01-10',
          items: [
            { name: 'Drone Model A', quantity: 1, price: 500 },
            { name: 'Drone Model B', quantity: 2, price: 750 },
          ],
          total: 2000,
        },
        {
          id: 2,
          date: '2023-02-15',
          items: [
            { name: 'Drone Model C', quantity: 1, price: 1000 },
          ],
          total: 1000,
        },
      ],
    },
    {
      userId: 2,
      userName: 'Jane Smith',
      orders: [
        {
          id: 3,
          date: '2023-03-05',
          items: [
            { name: 'Drone Model D', quantity: 1, price: 1500 },
          ],
          total: 1500,
        },
      ],
    },
    // More users...
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Users' Order History</h2>
      {allUsersOrders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul>
          {allUsersOrders.map(user => (
            <li key={user.userId} className="mb-6">
              <h3 className="text-xl font-semibold">{user.userName}</h3>
              <ul className="mt-2">
                {user.orders.map(order => (
                  <li key={order.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                    <h4 className="text-lg font-medium">Order #{order.id}</h4>
                    <p className="text-gray-600">Date: {order.date}</p>
                    <ul className="mt-2">
                      {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{item.quantity} x {item.name}</span>
                          <span>${item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-right font-bold mt-2">Total: ${order.total}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
