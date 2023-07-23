import React from "react";
import {Link} from "react-router-dom"

const Navbar  = () =>{

    return(
        <div>
            <div className="navContainer"> 
              <h3>Search Images </h3>    
                <div className="navList">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
       </div>
    )
}


export default Navbar