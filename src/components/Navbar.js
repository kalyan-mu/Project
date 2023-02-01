import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Needs/Logo";
import "../styles/Navbar.css"
//end


function Navbar () {
    return (
      <>
        <div className="navbar">
          <div className="leftSide">
            <Logo />
          </div>
          <div className="RightSide">
            <Link to="/home"> Home </Link>
            <Link to="/services"> Services </Link>
            <Link to="/products"> Products </Link>
            <Link to="/contact"> Contact Us </Link>
          </div>
        </div>
      </>
    );
}

export default Navbar;