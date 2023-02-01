import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import Inputs from "../Needs/Inputs";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

function Signup () {
    const [formkey, setFormkey] = useState(10);

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormkey(formkey + 1);
    };
    const navigate = useNavigate();




    return (
      <>
        <div className="welcome">
          <h1>Welcome </h1>
          <p className="welcome-1">Welcome! Please enter your details</p>
        </div>
        <div className="center">
          <button className="btn1">
            <GoogleIcon />
            Log in with Google
          </button>
        </div>
        <div className="welcome-2">
          <p className="welcome-2">or</p>
        </div>
        <form key={formkey} onSubmit={handleSubmit}>
          <Inputs id="text" type="text" placeholder="Name" />
          <Inputs id="email" type="email" placeholder="Email" />
          <Inputs id="password" type="password" placeholder="Password" />
          <div className="box2">
            <div className="text1">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a href="#.">Forgot password</a>
          </div>
          <div className="center">
            <button onClick={() => navigate("/")} className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </>
    );
}

export default Signup;