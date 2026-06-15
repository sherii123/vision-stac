import {BrowserRouter ,Routes ,Route  } from "react-router-dom";
import React from 'react'
import Navbar  from './components/shared/Navbar'
import Home from "./pages/Home.jsx";

import About from './pages/About.jsx'
import Footer from './components/shared/Footer.jsx'
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


