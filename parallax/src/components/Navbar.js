import React from "react";
import "../styles/Navbar.css";

function Navbar(){
    return (
        <div className="Navbar">
            <a href="#" className="logo"> Logo </a>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;