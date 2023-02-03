import React from "react";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom"
import Pickel from "../Assets/unnamed.png"
function Card (props){
  const navigate =useNavigate();
    return (
      <>
        <div className="wrapper">
          <div className="card">
            <div className="card-img">
              <img className="IMG" src={Pickel} alt={props.alt} />
            </div>
            <div className="card-matter">
              <h2 className="card-title">Mango Pickel</h2>
              <p className="price">{props.matter}</p>
            </div>
            <button onClick={() => navigate("/products/cart")} className="card-btn">
              {props.btn}
            </button>
          </div>
        </div>
      </>
    );
}


export default Card;