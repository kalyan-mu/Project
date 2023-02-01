import React from "react";
import { useState } from "react";
import "../styles/Inputs.css"


function Inputs(props) {
    const [user, setUser] = useState("");
    console.log(user);


    return (
      <>
        <div className="text">
          <input
            onChange={(e) => setUser(e.target.id)}
            id={props.id}
            className="input-1"
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </>
    );
}

export default Inputs;
