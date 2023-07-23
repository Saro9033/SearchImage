import React from 'react';
import Home from './Components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import contact from './Components/contact';
import about from './Components/about';
import './App.css'
import Navbar from './Components/Navbar';

class App extends React.Component{


  render(){
    return(
      <div>
        <BrowserRouter>
        <Navbar/> 
        <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={about}></Route>
        <Route path='/contact' Component={contact}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }

  };

export default App;
