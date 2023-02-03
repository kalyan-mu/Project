import React from "react";
import { useState } from "react";
import "../styles/Login.css"
import GoogleIcon from "@mui/icons-material/Google";
import Inputs from "../Needs/Inputs";
import { Link, useNavigate } from "react-router-dom";
//end


function Login () {
    const [formkey, setFormkey] = useState(10);

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormkey(formkey + 1);
    };
const navigate = useNavigate();



  return (
    <>
      <div className="welcome">
        <h1>Welcome back, Olivia</h1>
        <p className="welcome-1">Welcome back! Please enter your details</p>
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
          <button onClick={() => navigate("/home")} className="btn">
            Log in
          </button>
        </div>
        <div className="box2">
          <div className="text2">
            <p>Don't have account?</p>
          </div>
          <Link to={"/signup"} className="link">
            <strong>Sign up for free</strong>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
