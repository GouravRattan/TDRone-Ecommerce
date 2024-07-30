import { Button } from "bootstrap";
import { useState } from "react";

const SearchDrones = () => {
  const [searchTerm, setSearchTerm] = useState({
    DroneId: "",
    Name: "",
    ProductType: "",
  });

  const [DroneRecords, setDroneRecords] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchTerm((prevTerm) => ({
      ...prevTerm,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const requestData = {
      eventID: "1004",
      addInfo: {
        DroneId: searchTerm.DroneId,
        Name: searchTerm.Name,
        ProductType: searchTerm.ProductType,
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
        alert(data.rData.rMessage || "Drone found successfully");
        setDroneRecords([data.rData] || []);
      } else {
        alert(data.rData.rMessage || "Drone not found!");
        setDroneRecords([]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to search Drone.");
    }
  };

  return (
    <div className="container mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-between border border-gray-300 p-4 rounded-md shadow-sm"
      >
        <label
          htmlFor="SearchDrones"
          className="font-bold text-primary text-xl"
        >
          Search:
        </label>
        <input
          id="SearchDrones"
          name="DroneId"
          className="form-input rounded-md w-1/4 h-10 px-3 ml-2"
          type="search"
          placeholder="Drone ID"
          value={searchTerm.DroneId}
          onChange={handleInputChange}
        />

        <input
          name="Name"
          className="form-input rounded-md w-1/4 h-10 px-3 ml-2"
          type="search"
          placeholder="Name"
          value={searchTerm.Name}
          onChange={handleInputChange}
        />
        <input
          name="ProductType"
          className="form-input rounded-md w-1/4 h-10 px-3 ml-2"
          type="search"
          placeholder="Product Type"
          value={searchTerm.ProductType}
          onChange={handleInputChange}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 ml-2 rounded-md"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {DroneRecords.map((Dronesdata, index) => (
          <div
            key={index || Dronesdata.DroneId}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <a href="#">
              <img
                className="object-cover w-full h-64"
                src={Dronesdata.ImageUrl || "/path/to/default/image.jpg"}
                alt={Dronesdata.Name}
              />
            </a>
            <h2 className="text-xl font-bold text-gray-800">
              {Dronesdata.Name}
            </h2>
            <p className="text-sm text-gray-600">{Dronesdata.Description}</p>
            <div className="mt-4 flex justify-between">
              <button type="button" className="text-black ">
                Edit
              </button>
              <button type="button" className="text-black">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDrones;
