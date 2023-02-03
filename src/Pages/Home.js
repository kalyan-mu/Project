import React from "react";
import Banner from "../Assets/Main-Banner1.png"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../Needs/Card";
import TopProduct from "./TopProduct";
import Pickel from "../Assets/unnamed.png";
import "../styles/Home.css";
import Offers from "../Needs/Offers";

function Home() {
    return (
      <>
        <Navbar />
        <div className="border">
          <img src={Banner} alt="banner" />
        </div>
        <div className="top">
          <div className="top-1">
            <h1>TOP PRODUCTS</h1>
          </div>
          <div className="left">
            <TopProduct pickel={Pickel} alt="image1" btn="Select Options" />
            <TopProduct pickel={Pickel} alt="image1" btn="Select Options" />
            <TopProduct pickel={Pickel} alt="image1" btn="Select Options" />
            <TopProduct pickel={Pickel} alt="image1" btn="Select Options" />
          </div>
        </div>
        <Offers /><br />
        <div className="product">
          <h1>PICKLES</h1>
        </div>
        <div className="left">
          <Card
            pickel={Pickel}
            alt="image1"
            matter="150.00"
            btn="Select Options"
          />
          <Card
            pickel={Pickel}
            alt="image1"
            matter="150.00"
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
        </div>
        <div className="left">
          <Card
            pickel={Pickel}
            alt="image1"
            matter="150.00"
            btn="Select Options"
          />
          <Card
            pickel={Pickel}
            alt="image1"
            matter="150.00"
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
        </div>
        <div className="left">
          <div className="BG_img">
            <div className="ground">
              <h1>New Arrivals</h1>
              <h1>of Pickles</h1>
              <button className="btn_1">VIEW MORE</button>
            </div>
          </div>
          <div className="BG_img2">
            <div className="ground">
              <h1>New Arrivals</h1>
              <h1>of Powders</h1>
              <button className="btn_1">VIEW MORE</button>
            </div>
          </div>
        </div>
        <div className="product">
          <h1>POWDERS</h1>
        </div>
        <div className="left">
          <Card
            pickel={Pickel}
            alt="image1"
            matter="150.00"
            btn="Select Options"
          />
          <Card
            pickel={Pickel}
            alt="image1"
            matter="150.00"
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
        </div>
        <div className="left">
          <Card
            pickel={Pickel}
            alt="image1"
            matter="150.00"
            btn="Select Options"
          />
          <Card
            pickel={Pickel}
            alt="image1"
            matter="150.00"
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
        </div>
        <div className="top">
          <div className="top-1">
            <h1>RECENTLY VIEWED</h1>
          </div>
          <div className="left">
            <TopProduct pickel={Pickel} alt="image1" btn="Select Options" />
            <TopProduct pickel={Pickel} alt="image1" btn="Select Options" />
            <TopProduct pickel={Pickel} alt="image1" btn="Select Options" />
            <TopProduct pickel={Pickel} alt="image1" btn="Select Options" />
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Home;