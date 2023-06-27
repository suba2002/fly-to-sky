import React, { useState } from "react";
import "./Login.css";
import FlightIcon from "@mui/icons-material/Flight";
import { Support } from "../Support/Support";
import { useNavigate } from "react-router-dom";
// import { firebase } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    navigate("/booking");
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
