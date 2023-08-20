import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Graduates from "./pages/Graduats/Graduates"
import GraduatesDetail from "./pages/Graduats/GraduatesDetail"

import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostGraduatesInst from "./pages/Host/HostGraduatesInst"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import HostGratuCgpa from "./pages/Host/HostGratuCgpa"

import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Graduats" element={<Graduates />} />
          <Route path="Graduats/:id" element={<GraduatesDetail />} />
          
          <Route path="host" element={<HostLayout />}>
           
            <Route path="Graduats" element={<HostVans />} />
            <Route path="Graduats/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="GratuCGPA" element={<HostGratuCgpa />} />
              <Route path="instName" element={<HostGraduatesInst />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);