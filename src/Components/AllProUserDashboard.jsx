import React, { useState, useEffect } from 'react';

const AllProUserDashboard = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const [DronesRecord, setDronesRecord] = useState([]);

  useEffect(() => {
    fetchDronesRecord();
  }, []);

  const fetchDronesRecord = async () => {
    const requestData = {
      eventID: "1005",
      addInfo: {
        DroneId: "",
        Name: "",
        Price: "",
        ImageUrl: "",
        Description: "",
      },
    };
    try {
      const response = await fetch("http://localhost:2005/drones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, "API response data");

      if (data.rData && data.rData.rCode === 0) {
        setDronesRecord(data.rData.Drones || []);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch Drones: ${error}`);
      setDronesRecord([]);
    }
  };

  return (
    <>
      <div className='w-full h-[20vh] flex-col justify-center items-center text-center mt-20'>
        <h1 className='text-bold text-6xl leading-loose max-w-8xl'>All Products</h1>
        <p className='text-[18px] mx-auto max-w-md text-gray-600'>Capture your moments from above with a mini drone, FPV, or professional aerial camera.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10">
        {
          DronesRecord.map((item, index) => {
            return (
              <div key={index} className="relative text-gray-700 bg-white rounded-xl shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                  <img
                    src={item.imageUrl}
                    alt="card-image" className="object-cover w-full h-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 text-bold rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {item.name}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {item.price}
                    </p>
                  </div>
                  <p className="block w-full  p-100 text-center font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {item.description}
                  </p>
                </div>

                <div>
                  <p className="text-2xl">{item.Disc}</p>
                </div>

                <div className="p-6 pt-0 flex ">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button"
                    onClick={() => handleAddToCart(item)} >
                    Add to Cart
                  </button>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 text-bold rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button"
                    onClick={() => handleAddToCart(item)} >
                   Buy Now
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="m-10">
        <h2 className="text-2xl mb-4">Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AllProUserDashboard;
