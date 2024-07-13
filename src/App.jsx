import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Drones from './Pages/Drones';
import Handheld from './Pages/Handheld';
import Products from '../src/Pages/ProductsParent/Products';
import DroneData from './Components/DroneData';
import Footer from './Components/Footer';
import OurWork from './Pages/OurWork';
import AboutUs from './Pages/AboutUs';

const App = () => {
  return (
    <> 
    <div className='w-full min-h-screen bg-white text-black'>
      {/* <DroneData /> */}
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Drones' element={<Drones />} />
          <Route path='/Handheld' element={<Handheld />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/OurWork' element={<OurWork />} />
          <Route path='/AboutUs' element={<AboutUs />} />
        </Routes>
    </BrowserRouter>  
      </div>
      </>
  );
}

export default App;
