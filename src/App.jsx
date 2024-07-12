import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Drones from './Pages/Drones';
import Handheld from './Pages/Handheld';
import Products from '../src/Pages/ProductsParent/Products';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-white text-black'>
      <Navbar />
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Drones' element={<Drones />} />
          <Route path='/Handheld' element={<Handheld />} />
          <Route path='/Products' element={<Products />} />
        </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
