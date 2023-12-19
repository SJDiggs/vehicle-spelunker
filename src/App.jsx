import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
//Components
import Header from './Header.jsx'
// import { Carousel } from './Carousel.jsx'
// import {slides} from "./data/carouselData.json"

//Pages
import Vehicle from './vehicle.jsx'
import VehicleDetails from './VehicleDetails.jsx'

import './App.css'
import SlideShow from './components/SlideShow.jsx'


function App() {

  return (
    <>
      <div className = "App">
        <Header />
       
        <main>
          <Routes>
            <Route path="/" element={<Vehicle />} />
            {/* <Route path="/details" element={<VehicleDetails />} /> */}
            <Route path="/details" element={<VehicleDetailsWrapper />} />
          </Routes>
          <SlideShow />
          {/* <Carousel data={slides} /> */}
        </main>;
      </div>
    </>
  );
}

// Wrap VehicleDetails with a wrapper component to access location state
const VehicleDetailsWrapper = () => {
  const location = useLocation();
  const apiData = location.state ? location.state.apiData : null;

  return <VehicleDetails apiData={apiData} />;
};

export default App;
