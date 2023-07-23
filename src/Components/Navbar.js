import React from "react";

const Navbar  = () =>{

    return(
        <div>
            <div className="navContainer"> 
              <h3>Search Images </h3>    
                <ul className="navList">
                <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li ><a href="/contact">Contact</a></li>
                </ul>
            </div>
       </div>
    )
}


export default Navbar