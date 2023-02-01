import React from "react";
import Logo from "../Needs/Logo";
import "../styles/Footer.css"
//end

function Footer () {

    return (
      <>
        <div className="length">
          <div className="box1">
            <div className="leftSide2">
              <Logo />
            </div>
            <div className="RightSide2">
              <a href="#."> Communit </a>
              <a href="#."> Getting Started </a>
              <a href="#."> Resources </a>
            </div>
          </div>
            <div className="Inline1">
              <ul>
                <li>About</li>
                <li>Submit an issue</li>
                <li>GitHub Repo</li>
                <li>Slack</li>
              </ul>
            </div>
            <div className="Inline2">
              <ul>
                <li>Introduction</li>
                <li>Documentation</li>
                <li>Usage</li>
                <li>Globals</li>
                <li>Elements</li>
                <li>Collection</li>
                <li>Themes</li>
              </ul>
            </div>
            <div className="Inline3">
              <ul>
                <li>API</li>
                <li>Form ValidationsProducts</li>
                <li>Visibility</li>
                <li>Accessibility</li>
                <li>Community</li>
                <li>Design Defined</li>
                <li>Marketplace</li>
              </ul>
            </div>
        </div>
      </>
    );
}

export default Footer;