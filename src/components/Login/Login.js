import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/fly.png";
import FlightIcon from "@mui/icons-material/Flight";
import { Support } from "../Support/Support";
import auth from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    // const auth = auth();

    if (email == "" && username == "" && password == "") {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        res.user.displayName = username;
        console.log(res);
        navigate("/booking");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login__info">
        <p>
          To Find<br></br>
          <span>
            THE BEST VALUE <br></br> FLIGHTS
          </span>
        </p>
      </div>
      <div>
        {/* <div className="login__logo">
          <img src={logo} />
        </div> */}
        <div className="login__container">
          <p>Enter To Sky...!!</p>
          <input
            type="email"
            placeholder="E-mail of passenger"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>
            <p>Fly </p>{" "}
            <FlightIcon style={{ transform: "rotate(45deg)", height: "3vh" }} />
          </button>
        </div>
      </div>
      <Support />
    </div>
  );
};
