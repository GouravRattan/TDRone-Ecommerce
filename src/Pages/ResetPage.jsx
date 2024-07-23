import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import rst from "../images/rst1.jpg";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "../App.css";
import { Navigate } from "react-router-dom";

const ResetPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    // Implement OTP sending logic here
    setConfirmationResult(true); // Simulate OTP sending
    alert("OTP sent to your phone number!");
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    // Implement OTP verification logic here
    setOtpVerified(true); // Simulate OTP verification
    alert("OTP verified. Proceeding to reset password!");
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const requestData = {
      eventID: "1005",
      addInfo: {
        UserId: phoneNumber,
        NewPassword: newPassword,
        ConfirmPassword: confirmPassword,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/resetPassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response data");

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Password reset successfully!");
        setResetSuccess(true);
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert(data.rData.rMessage || "Failed to reset password!!");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error resetting password: ${error.message}`);
    }
  };

  if (resetSuccess === true) {
    return <Navigate to="/LoginScreen" />;
  }

  return (
    <>
      {!confirmationResult ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-sm p-6 bg-white shadow-lg">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-blue-500 rounded-full p-2">
                {/* Add any relevant icon here */}
              </div>
              <h1 className="text-xl font-semibold mt-2">Forgot Password</h1>
            </div>
            <form onSubmit={handleSendOTP}>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Registered Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      ) : !otpVerified ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-sm p-6 bg-white shadow-lg">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-blue-500 rounded-full p-2">
                {/* Optionally, add an icon here */}
              </div>
              <h1 className="text-xl font-semibold mt-2">Verify OTP</h1>
            </div>
            <form onSubmit={handleVerifyOTP}>
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
                  onChange={(e) => setOTP(e.target.value)}
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
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-sm p-6 bg-white shadow-lg">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-blue-500 rounded-full p-2">
                {/* Add any relevant icon here */}
              </div>
              <h1 className="text-xl font-semibold mt-2">Reset Password</h1>
            </div>
            <form onSubmit={handlePasswordReset}>
              <div className="mb-4">
                <label
                  htmlFor="newpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newpassword"
                  name="newpassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPage;
