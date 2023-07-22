import React, { useState } from "react";
import "./Login.css";
import FlightIcon from "@mui/icons-material/Flight";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ReactComponent as Icon } from "../../assets/fly-to-sky.svg";
import Button from "@mui/material/Button";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    if (username == "" && email == "" && password == "") {
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User authenticated:", user);
        navigate("/booking");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Authentication error:", errorCode, errorMessage);
      });
    navigate("/intro");
  };
  return (
    <div className="login">
      <div className="register__intro">
        <h1> FLY TO SKY</h1>
        <Icon style={{ margin: "auto" }} />
      </div>
      <div className="login__details">
        <h2>Login</h2>
        <div className="login__container">
          <p>Enter To Sky...!!</p>
          <input
            type="email"
            value={email}
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
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={login} style={{width:"20vw"}}>
            Fly
            <FlightIcon style={{ transform: "rotate(45deg)", height: "3vh" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};
