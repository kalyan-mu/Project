import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../Needs/Card";
import "../styles/Products.css"

function Products() {
  return (
    <>
      <Navbar />
      <div className="product1">
        <h1>Products</h1>
      </div>
      <div className="row">
        <Card matter="150.00" alt="image1" btn="Select Options" />
        <Card alt="image2" matter="150.00" btn="Select Options" />

        <Card alt="image3" matter="150.00" btn="Select Options" />
        <Card alt="image3" matter="150.00" btn="Select Options" />
      </div>
      <div className="row">
        <Card alt="image4" matter="150.00" btn="Select Options" />
        <Card alt="image5" matter="150.00" btn="Select Options" />
        <Card alt="image6" matter="150.00" btn="Select Options" />
        <Card alt="image3" matter="150.00" btn="Select Options" />
      </div>
      <Footer />
    </>
  );
}

export default Products;
