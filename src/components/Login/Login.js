import React, { useEffect, useState } from "react";
import "./Login.css";
import FlightIcon from "@mui/icons-material/Flight";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ReactComponent as Icon } from "../../assets/fly-to-sky.svg";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { set_username } from "../../features/userSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginfunction = () => {
    if (invalidEmail) {
      setTimeout(() => {
        setInvalidEmail(false);
      }, 3000);
    } else if (incorrectPassword) {
      setTimeout(() => {
        setIncorrectPassword(false);
      }, 3000);
    } else if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  useEffect(() => {
    loginfunction();
  }, [incorrectPassword, invalidEmail, success]);

  const login = () => {
    loginfunction();

    if (email == "" && password == "") {
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccess(true);
        const user = userCredential.user;
        console.log(
          "User authenticated:",
          user,
          userCredential,
          user.auth,
          user.displayName
        );
        dispatch(set_username(user.displayName));
        navigate("/intro");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Authentication error:", errorCode, errorMessage);

        if (errorCode === "auth/user-not-found") {
          setInvalidEmail(true);
        } else if (errorCode === "auth/invalid-email") {
          setInvalidEmail(true);
        } else if (errorCode === "auth/wrong-password") {
          setIncorrectPassword(true);
        } else {
        }
      });
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
          <form>
            <p>Enter To Sky...!!</p>
            <TextField
              helperText=""
              label="Email"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              size="small"
              variant="outlined"
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="contained"
              onClick={login}
            >
              Fly
              <FlightIcon
                style={{ transform: "rotate(45deg)", height: "3vh" }}
              />
            </Button>
          </form>
        </div>
        <div>
          {invalidEmail === true ? (
            <p className="popup__show">Invalid Email</p>
          ) : incorrectPassword === true ? (
            <p className="popup__show">Incorrect Password</p>
          ) : success === true ? (
            <p className="popup__show">Login Successfully</p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
