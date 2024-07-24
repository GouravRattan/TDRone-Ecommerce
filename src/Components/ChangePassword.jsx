import React, { useState } from "react";
import Icon from "../assets/Icons/DroneIcon.png"
const ChangePassword = () => {
  const [userPassword, setUserPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordChange = async (e) => {
      e.preventDefault();
      
      let requestData = {
          eventID: "1001",
          addInfo: {
              UserId: "gouravrattan90@gmail.com",
              UserPassword: userPassword,
              NewPassword: newPassword
            },
        };

    try {
      const response = await fetch("http://localhost:2005/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response data");

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert("Password changed successfully!");
        setUserPassword("");
        setNewPassword("");
      } else {
        alert("Invalid Credentials!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to change the password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-black rounded-full p-4">
            <img className="w-16" src={Icon} alt="" />
            
            {/* Optionally, add an icon here */}
          </div>
          <h1 className="text-xl font-semibold mt-2">Change Password</h1>
        </div>
        <form onSubmit={handlePasswordChange}>
          <div className="mb-4">
            <label
              htmlFor="userPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Current Password
            </label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Enter New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
