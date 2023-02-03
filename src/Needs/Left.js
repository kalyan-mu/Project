import React from "react";
import "../styles/Left.css";
import Pickle from "../Assets/unnamed.png";

function Left() {
    return (
      <>
        <div className="Left__5">
          <div className="Left__1">
            <div>
              <h1 className="Left__2">
                <strong>1.</strong>Home Delivery
              </h1>
              <br />
              <p>
                Dummy text is text that is used <br />
                in the publishing industry or by <br />
                web designers to occupy the <br />
                space which will later be filled <br />
                with'real' content.
              </p>
            </div>
          </div>
          <div className="Left__4">
            <h1 className="Left__2">
              <strong>2.</strong>Order Your Favorite
            </h1>
            <br />
            <p>
              Dummy text is text that is used <br />
              in the publishing industry or by <br />
              web designers to occupy the <br />
              space which will later be filled <br />
              with'real' content.
            </p>
          </div>
          <br />
          <div className="Left__3">
            <div>
              <h1 className="Left__2">
                <strong>3.</strong>High Quality
              </h1>
              <br />
              <p>
                Dummy text is text that is used <br />
                in the publishing industry or by <br />
                web designers to occupy the <br />
                space which will later be filled <br />
                with'real' content.
              </p>
            </div>
          </div>
          <div className="Left__4">
            <h1 className="Left__2">
              <strong>4.</strong>Buy With Love
            </h1>
            <br />
            <p>
              Dummy text is text that is used <br />
              in the publishing industry or by <br />
              web designers to occupy the <br />
              space which will later be filled <br />
              with'real' content.
            </p>
          </div>
        </div>
        <div className="Box__1">
          <h2 className="Box__2">SPECIAL OFFERS</h2>
          <img src={Pickle} alt="pickle" />
          <h4>Mango Pickle</h4>
          <h3>
            <b>150.00</b> 120.00
          </h3>
        </div>
      </>
    );
}

export default Left;