import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import Home from './pages/Home';
import Footer from './pages/Footer';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
      <div id="bg"></div>
    </div>
  );
}

export default App;
