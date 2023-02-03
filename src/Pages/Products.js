import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../Needs/Card";
import Pickel from "../Assets/unnamed.png";
import "../styles/Products.css"

function Products() {
  return (
    <>
      <Navbar />
      <div className="product1">
        <h1>Products</h1>
      </div>
      <div className="row">
        <Card
          pickel={Pickel}
          matter="150.00"
          alt="image1"
          btn="Select Options"
        />
        <Card
          pickel={Pickel}
          alt="image2"
          matter="150.00"
          btn="Select Options"
        />
        <Card
          pickel={Pickel}
          alt="image3"
          matter="150.00"
          btn="Select Options"
        />
        <Card
          pickel={Pickel}
          alt="image3"
          matter="150.00"
          btn="Select Options"
        />
      </div>
      <div className="row">
        <Card
          pickel={Pickel}
          alt="image4"
          matter="150.00"
          btn="Select Options"
        />
        <Card
          pickel={Pickel}
          alt="image5"
          matter="150.00"
          btn="Select Options"
        />
        <Card
          pickel={Pickel}
          alt="image6"
          matter="150.00"
          btn="Select Options"
        />
        <Card
          pickel={Pickel}
          alt="image3"
          matter="150.00"
          btn="Select Options"
        />
      </div>
      <Footer />
    </>
  );
}

export default Products;
