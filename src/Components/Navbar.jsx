import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full px-6 py-4 md:px-20 md:py-8 font-['Neue Montreal'] flex justify-between items-center bg-neutral-100">
      <div className="logo">{/* Your logo SVG */}</div>
      <div className="links flex gap-5 md:gap-10">
        <div
          className="relative group"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/" className="text-md md:text-xl font-regular capitalize">
            Services
          </Link>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg mt-2 py-2 w-48 rounded-lg z-10 transition duration-300 ease-in-out">
              <Link
                to="/drones"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                Drones
              </Link>
              <Link
                to="/handheld"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                Handheld
              </Link>
              <Link
                to="/PilotList"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                Pilots
              </Link>
              <Link
                to="/PriceCalculator"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                Prices
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/OurWork"
          className="text-md md:text-xl font-regular capitalize"
        >
          Our Work
        </Link>
        <Link
          to="/AboutUs"
          className="text-md md:text-xl font-regular capitalize"
        >
          About Us
        </Link>
        <Link
          to="/Products"
          className="text-md md:text-xl font-regular capitalize"
        >
          Insights
        </Link>
        <Link
          to="/ContactUs"
          className="text-md md:text-xl font-regular capitalize"
        >
          Contacts
        </Link>
        <Link
          to="/LoginForm"
          className="text-md md:text-xl font-regular capitalize ml-8 md:ml-32"
        >
          <button className="bg-[#004D43] text-white py-2 px-4 w-full rounded hover:bg-green-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
