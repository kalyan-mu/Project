import React from "react";
import "../styles/Footer.css"
import Apps from "../Assets/icons.png"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

function Footer () {

    return (
      <>
        <div className="BORDER__1">
          <div className="footer_nav">
            <h1>Registered Office</h1>
            <div>
              <ul>
                <li>
                  <LocationOnIcon className="left__2" />
                  <div className="PARA__2">
                    <p>It is a long established fact that</p>
                    <p>a reader will be distracted by the</p>
                    <p>readable content of a page.</p>
                  </div>
                </li>
                <li>
                  <PhoneIcon className="left__2" />
                  <p className="PARA__2">040 - 456 789 000</p>
                </li>
                <li>
                  <LocationOnIcon className="left__2" />
                  <p className="PARA__2">picklehouse@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_nav1">
            <h1>Useful Links</h1>
            <div>
              <ul>
                <li>About Us</li>
                <li>Terms and Condition</li>
                <li>Privacy and Policy</li>
                <li>Return and Cancellation & Refund Policy</li>
                <li>Shopping and Delivery Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer_nav2">
            <h1>Get Connected</h1>
            <div>
              <img className="App1" src={Apps} alt="kkk" />
            </div>
          </div>
        </div>
        <div className="Border__2">
          <p>@PICKLEHOUSE, All Right Reserved 2022</p>
        </div>
      </>
    );
}

export default Footer;