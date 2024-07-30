import React, { useState } from "react";
import Modal from "react-modal";

const DeleteDrone = () => {
  const [showDrone, setShowDrone] = useState(""); // Correct initialization
  const [searchTerm, setSearchTerm] = useState({
    DroneId: "",
    Name: "",
  });
  const [droneRecords, setDroneRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);

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
      eventID: "1003",
      addInfo: {
        DroneId: searchTerm.DroneId,
        Name: searchTerm.Name,
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
        setDroneRecords(data.rData.drones || []);
      } else {
        alert(data.rData.rMessage || "Drone not found!");
        setDroneRecords([]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to search drone.");
    }
  };

  const openModal = (drone) => {
    setSelectedDrone(drone);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDrone(null);
  };

  const handleDelete = () => {
    // Add your delete logic here
    console.log("Deleting drone:", selectedDrone);
    closeModal();
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSearch} className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="DroneId"
            value={searchTerm.DroneId}
            onChange={handleInputChange}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by Drone ID"
          />
          <input
            type="text"
            name="Name"
            value={searchTerm.Name}
            onChange={handleInputChange}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
            placeholder="Search by Drone Name"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10">
        {droneRecords.map((item, index) => (
          <div
            key={index}
            className="relative text-gray-700 bg-white rounded-xl shadow-lg"
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <img
                src={item.imageUrl}
                alt="drone-image"
                className="object-cover w-full h-full"
              />
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
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                {item.desc}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
                onClick={() => openModal(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Drone Confirmation"
        ariaHideApp={false}
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this drone?</p>
          {selectedDrone && (
            <div>
              <p className="mt-2">
                <strong>ID:</strong> {selectedDrone.DroneId}
              </p>
              <p>
                <strong>Name:</strong> {selectedDrone.name}
              </p>
            </div>
          )}
          <div className="mt-6 flex justify-end">
            <button
              onClick={closeModal}
              className="mr-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteDrone;
