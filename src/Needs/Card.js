import React from "react";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom"
//end

function Card (props){
  const navigate =useNavigate();
    return (
      <>
        <div className="wrapper">
          <div className="card">
            <div className="card-img">
              <img src={props.img} alt={props.alt} />
            </div>
            <div className="card-matter">
              <h2 className="card-title">Card Title</h2>
              <p>{props.matter}</p>
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