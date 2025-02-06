import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Car from './pages/car/car';
import Life from './pages/Life/Life';
import Health from './pages/Health/Health';
import Bike from './pages/Bike/Bike';
import '../src/pages/Bike/bike.css';
import Topbar from './components/Navbar/Topbar';
import Home from './pages/Home';
import SubCategories from './pages/SubCategories';


function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path='/car' element={<Car />}></Route>
          <Route path='/life' element={<Life />}></Route>
          <Route path='/health' element={<Health />}></Route>
          <Route path='/bike' element={<Bike/>}></Route>
          <Route path="/subcategory/:subCategory" element={<SubCategories />} />

        </Routes>
        
        <Footer />
      </BrowserRouter>

    </>
  );
}
export default App;
