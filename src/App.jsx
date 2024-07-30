import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import ResetPage from "./Pages/ResetPage";
import UserDashboard from "./Components/UserDashboard";
// import AdminDashboard from "./Components/AdminDashboard";
import UserProfileCard from "./Pages/UserComponent/UserProfileCard";
import ChangePassword from "./Components/ChangePassword";
import UpdateProfile from "./Components/UpdateProfile";
import AddDrone from "./Components/AddDrone";
import AllProUserDashboard from "./Components/AllProUserDashboard";
// import Display from "./Pages/CartDisplay";
import AdminDashboard1 from "./Pages/AdminDashboard1";
import AllUsers from "./Pages/AllUsers";
import EditDrone from "./Components/EditDrone";
import Panel from "./Pages/Panel";
import DeleteDrone from "./Components/DeleteDrone";

const App = () => {
  const location = useLocation();
  const hideNavPaths = [
    "/admindashboard",
    "/userdashboard",
    "/userprofilecard",
    "/changepassword",
    "/updateprofile",
    "/allprouserdashboard",
    "/admindashboard1",
    "/allusers",
    "/panel"
  ]; // Converted to lowercase

  console.log("Current Pathname: ", location.pathname);

  return (
    <div className="w-full min-h-screen bg-white text-black">
      {!hideNavPaths.includes(location.pathname.toLowerCase()) && <Navbar />}{" "}
      {/* Convert pathname to lowercase */}
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
        <Route path="/ResetPage" element={<ResetPage />} />
        {/* <Route path="/AdminDashboard" element={<AdminDashboard />} /> */}
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserProfileCard" element={<UserProfileCard />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/UpdateProfile" element={<UpdateProfile />} />
        <Route path="/AddDrone" element={<AddDrone />} />
        <Route path="/AllProUserDashboard" element={<AllProUserDashboard />} />
        {/* <Route path="/Display" element={<Display />} /> */}
        <Route path="/AdminDashBoard1" element={<AdminDashboard1 />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/EditDrone" element={<EditDrone />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/DeleteDrone" element={<DeleteDrone />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
