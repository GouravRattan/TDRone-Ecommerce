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
import AdminDashboard from "./Components/AdminDashboard";
import UserProfileCard from "./Pages/UserComponent/UserProfileCard";

const App = () => {
  // const location = useLocation();
  // const hideNavPaths = ["/AdminDashboard", "/UserDashboard"]; // Add more paths if needed

  // console.log("Current Pathname: ", location.pathname);

  return (
    // <div className="w-full min-h-screen bg-white text-black">
    //   {!hideNavPaths.includes(location.pathname) && <Navbar />}
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="/Drones" element={<Drones />} />
    //     <Route path="/Handheld" element={<Handheld />} />
    //     <Route path="/Products" element={<Products />} />
    //     <Route path="/OurWork" element={<OurWork />} />
    //     <Route path="/AboutUs" element={<AboutUs />} />
    //     <Route path="/PilotList" element={<PilotsList />} />
    //     <Route path="/ContactUs" element={<ContactUs />} />
    //     <Route path="/PriceCalculator" element={<PriceCalculator />} />
    //     <Route path="/LoginForm" element={<LoginForm />} />
    //     <Route path="/SignUp" element={<SignUp />} />
    //     <Route path="/ResetPage" element={<ResetPage />} />
    //     <Route path="/AdminDashboard" element={<AdminDashboard />} />
    //     <Route path="/UserDashboard" element={<UserDashboard />} />
    //     <Route path="/UserProfileCard" element={<UserProfileCard />} />
    //     <Route path="/UserProfileCard" element={<UserProfileCard />} /> {/* Add this line if you want to support /MyProfile */}
    //   </Routes>
    // </div>
    <UserProfileCard />
  );
};

// const AppWrapper = () => (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// export default AppWrapper;
export default App;
