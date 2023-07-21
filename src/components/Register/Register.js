import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlightIcon from "@mui/icons-material/Flight";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";
import "./Register.css";
import { ReactComponent as Icon } from "../../assets/fly-to-sky.svg";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    // const auth = auth();

    if (
      email == "" &&
      username == "" &&
      password == "" &&
      ConfirmPassword == ""
    ) {
      return;
    }

    if (password !== ConfirmPassword) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        res.user.displayName = username;
        console.log(res);
        navigate("/landingPage");
      })
      .catch((err) => console.log(err));
    navigate(`/login`);
  };
  return (
    <div className="register">
      <div className="register__intro">
        <h1> FLY TO SKY</h1>
        <Icon style={{ margin: "auto" }} />
      </div>
      <div className="register__details">
        <h2>Register</h2>
        <div className="register__container">
          <p>Enter The Sky...!!</p>

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
          <input
            type="password"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={login}>
            <p>Fly </p>{" "}
            <FlightIcon style={{ transform: "rotate(45deg)", height: "3vh" }} />
          </button>
        </div>
      </div>
    </div>
  );
};
