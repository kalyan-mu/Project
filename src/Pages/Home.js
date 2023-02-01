import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../Needs/Card";
import "../styles/Home.css";
//end

function Home() {
    return (
      <>
      <Navbar />
        <div className="border">
          <h2>Banner</h2>
        </div>
        <div>
          <div className="product">
            <h1>Products</h1>
          </div>
          <div className="left">
            <Card
              img="#.jpj"
              alt="image1"
              matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
              btn="Know More"
            />
            <Card
              img="#.jpj"
              alt="image2"
              matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
              btn="Know More"
            />
            <Card
              img="#.jpj"
              alt="image3"
              matter="The react-router-dom package contains bindings 
              for using React Router in web applications.The react-router-dom 
              package contains bindings for using React Router in web applications."
              btn="Know More"
            />
          </div>
          <div className="product">
            <h1>Services</h1>
            <div className="services-img">
              <img src="#.jpj" alt="image1" />
            </div>
            <div className="heading">
              <h1>Heading</h1>
            </div>
            <div className="para">
              <p>
                Like a scene in a movie or a verse in a song, paragraphs are the
                building blocks of any good piece of writing. Paragraphs lend a
                natural rhythm to your writing that makes it a joy to read. The
                question is, how do you handle them successfully Below, we take
                a close look at what makes up an effective paragraph and explain
                how to write one that suits your needs. We also cover some
                advanced tips. But first, let’s start with the fundamentals.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Home;