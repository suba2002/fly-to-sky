import React from "react";
import "./Login.css";
import logo from "../../assets/fly.png";
import FlightIcon from "@mui/icons-material/Flight";

export const Login = () => {
  return (
    <div className="login">
      <div className="login__info">
        <p>To Find<br></br>
        <span>THE BEST VALUE <br></br> FLIGHTS</span></p>
      </div>
      <div>
        <div className="login__logo">
          <img src={logo} />
        </div>
        <div className="login__container">
          <p>Enter To Sky...!!</p>
          <input type="email" placeholder="E-mail of passenger" />
          <input type="password" placeholder="Password" />
          <button>
            <p>Fly </p> <FlightIcon style={{transform:'rotate(45deg)',height:'3vh'}}/>
          </button>
        </div>
      </div>
    </div>
  );
};
