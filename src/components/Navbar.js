import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Love from "../Assets/heart.png";
import Before from "../Assets/before-after.png";
import Bag from "../Assets/bag.png";
import Menu from "../Assets/menu.png";
//end


function Navbar () {
    return (
      <>
        <div className="Nav__5">
          <div className="Nav__1">
            <p>FREE SHIPPING FOR ALL ORDERS OF 150/-</p>
          </div>
          <div className="Nav__4">
            <div className="Nav__3">
              <div className="Nav__6">
                <PersonIcon />
              </div>
              <a className="Nav__2" href="#.">
                My Account
              </a>
              <div className="Nav__6">
                <LoginIcon />
              </div>
              <a className="Nav__2" href="#.">
                Login / Register
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="Nav__7">
          <div className="Nav__8">
            <h4 className="Nav__9">LOGO</h4>
          </div>
          <div className="Nav__10">
            <div className="Nav__11">
              <input className="Nav__12" placeholder="Search for Products" />
              <input className="Nav__14" placeholder="Select Category" />
              <KeyboardArrowDownIcon className="Nav__15" />
              <SearchIcon className="Nav__13" />
            </div>
          </div>
          <div className="Nav__16">
            <div className="Nav__17-1">
              <img src={Love} alt="Love" />
            </div>
            <div className="Nav__17-2">
              <img src={Before} alt="Love" />
            </div>
            <div className="Nav__17-3">
              <img src={Bag} alt="Love" />
            </div>
            <div className="Nav__17">
              <p>300.00/-</p>
            </div>
          </div>
        </div>
        <br />
        <div className="navbar">
          <div className="Nav__18">
            <div>
              <img src={Menu} alt="memu" />
              <p>Browse Categories</p>
              <KeyboardArrowDownIcon className="Nav__19" />
            </div>
          </div>
          <div className="RightSide">
            <Link to="/home"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/products"> Products </Link>
            <Link to="/exports"> Exports </Link>
            <Link to="/blogs"> Blogs </Link>
            <Link to="/contact"> Contact Us </Link>
            <div className="Nav__20">
              <Link to="/special offers">SPECIAL OFFERS</Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar;