import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  const sty = {padding:'0 15px 0 15px', textDecoration:'none', color:'white', fontSize:'17px'}
    return (
        <div className="navContainer">
            <h3>Search Images </h3>
            <div className="navList">
                <Link style={sty} to="/">Home</Link>
                <Link style={sty} to="/about">About</Link>
                <Link style={sty} to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;