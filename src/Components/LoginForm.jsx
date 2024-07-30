import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import HeroDrone from "/src/assets/Drones/Hero_Drone.png";
import { Toaster } from "sonner";
import { toast } from "sonner";
import notie from "notie";
import "notie/dist/notie.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    let role = activeTab === "user" ? "User" : "Admin";
    let requestData = {
      eventID: "1001",
      addInfo: {
        Role: role,
        UserId: email,
        UserPassword: password,
      },
    };

    try {
      const response = await fetch("http://localhost:2005/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      console.log(data, "Api response data");

      if (response.ok && data.rData.Token !== null && data.rData.rCode === 0) {
        let token = data.rData.Token;
        let userid = data.rData.UserId;
        console.log("This is JWT token", token);
        sessionStorage.setItem("token", token);
        console.log("This is JWT token", userid);
        sessionStorage.setItem("UserId", userid);

        notie.alert({ type: "success", text: "Login Successfully!" });
        setIsLoggedIn(true);
      } else {
        notie.alert({ type: "warning", text: "Invalid Credentials!" });
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error:", error);
      notie.alert({
        type: "error",
        text: "An error occurred while trying to log in.",
      });
    }
  };

  if (isLoggedIn === true) {
    if (activeTab === "user") {
      return <Navigate to="/UserDashboard" />;
    } else {
      return <Navigate to="/AdminDashboard1" />;
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div className="w-full p-8 lg:w-1/2">
            <img
              className="w-full h-1/2 bg-cover mt-24"
              src={HeroDrone}
              alt="HeroDrone"
            ></img>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <div className="flex justify-center mb-4">
              <button
                className={`px-4 py-2 ${
                  activeTab === "user"
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200"
                } rounded-l`}
                onClick={() => setActiveTab("user")}
              >
                User Login
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "admin"
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200"
                } rounded-r`}
                onClick={() => setActiveTab("admin")}
              >
                Admin Login
              </button>
            </div>
            <p className="text-xl text-gray-600 text-center">
              {activeTab === "user" ? "User Login" : "Admin Login"}
            </p>
            <form
              onSubmit={handleLogin}
              name="login-form"
              autoComplete="on"
              spellCheck="true"
            >
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  minLength={5}
                  autoComplete="on"
                  title="Must contain @gmail.com"
                  required
                />
              </div>
              <div className="mt-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  // minLength={5}
                  autoComplete="on"
                  title="Must contain at least one number, one uppercase, one lowercase letter and at least 8 or more characters"
                  required
                />
                 <button
                      type="button"
                      className="absolute top-10 ml-[90%]"
                      onClick={togglePasswordVisibility}
                      aria-label="Toggle Password Visibility"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
              </div>
              <Link
                to="/ResetPage"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forget Password?
              </Link>
              <div className="mt-8 mb-5">
                <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                  Login
                </button>
              </div>
              Do Not Have an Account?
              <Link to="/Signup" className="text-blue-600">&nbsp;Register Here</Link>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </>
  );
};

export default LoginForm;
