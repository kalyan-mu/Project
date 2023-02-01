import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../Needs/Card";
import "../styles/Products.css"
//end

function Products() {
  return (
    <>
    <Navbar />
      <div className="product1">
        <h1>Products</h1>
      </div>
      <div className="row">
        <Card
          img="#.jpj"
          alt="image1"
          matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
          btn="Add Cart"
        />
        <Card
          img="#.jpj"
          alt="image2"
          matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
          btn="Add Cart"
        />
        <Card
          img="#.jpj"
          alt="image3"
          matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
          btn="Add Cart"
        />
      </div>
      <div className="row">
        <Card
          img="#.jpj"
          alt="image4"
          matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
          btn="Add Cart"
        />
        <Card
          img="#.jpj"
          alt="image5"
          matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
          btn="Add Cart"
        />
        <Card
          img="#.jpj"
          alt="image6"
          matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
          btn="Add Cart"
        />
      </div>
      <Footer />
    </>
  );
}

export default Products;
