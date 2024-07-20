import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { toast } from "react-toastify";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const ForgotPassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let requestData = {
      eventID: "1001",
      addInfo: {
        Role: "User",
        UserId: email,
        // NewPassword: "",
        // ConfirmPassword: "",
      },
    };

    try {
      const response = await fetch("http://localhost:2005/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");
      // toast.loading({ data }, "Api response data");

      if (response.ok && data.rData.Token != null) {
        let token = data.rData.Token;
        console.log("This is JWT token", token);
        sessionStorage.setItem("token", token);
        alert(data.rData.rMessage || "Login Successfully!");
        //   toast.success(res.data.message, {
        //     autoClose: 5000,
        //     position: "top-center",
        //   });
        setIsLoggedIn(true);
      } else {
        alert(data.rData.rMessage || "Invalid Credentials!");
        // toast.warning("Invalid Credentials!");
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to log in.");
      //   toast.error("An error occurred while trying to log in.");
      //   toast.error(data.rData.rMessage, {
      //     autoClose: 5000,
      //     position: "top-center",
      //   });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-blue-500 rounded-full p-2">
            {/* <LockOutlinedIcon className="text-white" /> */}
          </div>
          <h1 className="text-xl font-semibold mt-2">Forgot Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              //   value={email}
              //   onChange={handleSubmit()}
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <Link to="/resetPassword">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
            >
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
