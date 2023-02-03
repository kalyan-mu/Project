import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/cart.css"

function Cart () {
    return (
      <>
      <Navbar />
        <div className="cart">
          <p>Cart</p>
        </div>
        <div className="nav">
          <div className="leftSide1">
            <p>PRODUCT</p>
          </div>
          <div className="RightSide1">
            <a href="#."> PRICE </a>
            <a href="#."> QUANTIY </a>
            <a href="#."> TOTAL </a>
          </div>
        </div>
        <Footer />
      </>
    );
}


export default Cart;