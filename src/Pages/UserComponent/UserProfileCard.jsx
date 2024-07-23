import React, { useEffect, useState } from "react";

const UserProfileCard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    let requestData = {
      eventID: "1002",
      addInfo: {
        UserId: "3",
        Email: "akash581999@gmail.com",
      },
    };

    try {
      const response = await fetch("http://localhost:2005/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        setUserData(data.rData.User || []);
        alert("User details found successfully");
        console.log("user email", data.rData.Email);
      } else {
        alert("User details not found!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to log in.");
    }
  };

  return (
    <>
      <div className="w-full h-auto text-2xl">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-full mx-auto"
          />
          <h2 className="mt-4 text-xl font-semibold">
            UserName: Gourav Rattan
          </h2>
          <p className="text-gray-600">Full Stack Developer</p>
          <p className="text-gray-600">Bay Area, San Francisco, CA</p>
          <div className="mt-4">
            <input type="file" accept="image/*" className="mb-2" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Edit Photo
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded">
              Remove Photo
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg px-16 py-10 mt-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <div className="mt-10 flex flex-col gap-4">
          {userData.length > 0 ? (
            userData.map((item, index) => (
              <p className="flex justify-between" key={index}>
                <span>Full Name:</span>
                <span>{item.Email}</span>
              </p>
            ))
          ) : (
            <p>No user data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
