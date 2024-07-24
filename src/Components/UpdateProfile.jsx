import React, { useState, useEffect } from "react";
import droneEdit from "../assets/DroneEditProfile.jpg";
import Icon from "../assets/Logo.png";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    UserId: "3", // Assuming UserId is known or retrieved from authentication
    UserName: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const fetchUser = async () => {
    const requestData = {
      eventID: "1002",
      addInfo: {
        UserId: "75",
        Email: "akpyare9@gmail.com",
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

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, "API response data");

      if (data.rData && data.rData.rCode === 0) {
        setFormData({
          UserId: data.rData.UserId,
          UserName: data.rData.UserName,
          Email: data.rData.Email,
          Phone: data.rData.Phone,
          Address: data.rData.Address,
        });
      } else {
        alert("Failed to get user details!!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to fetch user details.");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let requestData = {
      eventID: "1003", // Assuming a different eventID for profile update
      addInfo: {
        UserId: formData.UserId,
        UserName: formData.UserName,
        Email: formData.Email,
        Phone: formData.Phone,
        Address: formData.Address,
      },
    };

    try {
      const response = await fetch("http://localhost:2005/editProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response data");

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to update the profile.");
    }
  };

  return (
    <div className="">
      <img src={droneEdit} className="absolute" alt="" />

      <form
        onSubmit={handleSubmit}
        className="relative max-w-lg mx-auto p-10 top-60 bg-white rounded shadow-md"
      >
        <img src={Icon} alt="" className="mb-4" />
        <h1 className="w-full h-10 text-2xl font-semibold mb-4">
          User Edit Profile
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            name="UserName"
            value={formData.UserName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
