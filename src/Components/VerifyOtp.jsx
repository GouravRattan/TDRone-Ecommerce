import React, { useState } from "react";
import { Link } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let requestData = {
      eventID: "1002",
      addInfo: {
        Role: "User",
        OTP: otp,
      },
    };

    try {
      const response = await fetch("http://localhost:2005/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response data");

      if (response.ok && data.rData.isVerified) {
        alert(data.rData.rMessage || "OTP Verified Successfully!");
        // Redirect or perform other actions after successful verification
      } else {
        alert(data.rData.rMessage || "Invalid OTP!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to verify OTP.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-blue-500 rounded-full p-2">
            {/* Optionally, add an icon here */}
          </div>
          <h1 className="text-xl font-semibold mt-2">Verify OTP</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              autoComplete="one-time-code"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
