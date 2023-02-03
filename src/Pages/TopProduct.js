import React from "react";
import "../styles/TopProduct.css";
import { useNavigate } from "react-router-dom";


function TopProduct(props) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="card1">
          <div className="card-img1">
            <img className="IMG1" src={props.pickel} alt={props.alt} />
          </div>
          <div className="card-matter1">
            <h2 className="card-title_1">Mango Pickel</h2>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="card-btn"
          >
            {props.btn}
          </button>
        </div>
      </div>
    </>
  );
}

export default TopProduct;
