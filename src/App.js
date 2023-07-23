import React from 'react';
import Home from './Components/home';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/contact';
import About from './Components/about';
import './App.css'
import Navbar from './Components/Navbar';


function App() {
  
    return(
      <>
        <Navbar/> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about "element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>    
      </>
    );
  }



export default App;
