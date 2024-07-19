import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Drones from "./Pages/Drones";
import Handheld from "./Pages/Handheld";
import Products from "../src/Pages/ProductsParent/Products";
import OurWork from "./Pages/OurWork";
import AboutUs from "./Pages/AboutUs";
import PilotsList from "./Pages/PilotsList";
import ContactUs from "./Pages/ContactUs";
import PriceCalculator from "./Pages/PriceCalculator";
import LoginForm from "./Components/LoginForm";
import SignUp from "./Components/SignUp";
// import AdminDashboard from "./Components/AdminDashboard";
// import UserDashbord from "./Components/UserDashboard";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-black">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Drones" element={<Drones />} />
            <Route path="/Handheld" element={<Handheld />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/OurWork" element={<OurWork />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/PilotList" element={<PilotsList />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/PriceCalculator" element={<PriceCalculator />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        {/* <AdminDashboard /> */}
        {/* <UserDashbord /> */}
      </div>
    </>
  );
};

export default App;
