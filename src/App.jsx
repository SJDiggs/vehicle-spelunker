import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
//Components
import Header from './Header.jsx'

//Pages
import Vehicle from './vehicle.jsx'
import VehicleDetails from './VehicleDetails.jsx'


import './App.css'

function App() {

  return (
    <>
      <div className = "App">
        <Header />
      
        <main>
          <Routes>
            <Route path="/" element={<Vehicle />} />
            <Route path="/details/" element={<VehicleDetails />} />
            {/* <Route path="/details/:id" element={<VehicleDetails />} /> */}
          </Routes>
        </main>;
      </div>
    </>
  );
}

export default App
