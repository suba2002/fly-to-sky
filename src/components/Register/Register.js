import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlightIcon from "@mui/icons-material/Flight";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";
import "./Register.css";
import { ReactComponent as Icon } from "../../assets/fly-to-sky.svg";
import Button from "@mui/material/Button";
import { updateProfile } from "firebase/auth";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [success, isSuccess] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const registerfunction = () => {
    if (passwordMatch) {
      setTimeout(() => {
        setPasswordMatch(false);
      }, 5000);
    } else if (invalidUsername) {
      setTimeout(() => {
        setInvalidUsername(false);
      }, 5000);
    } else if (invalidEmail) {
      setTimeout(() => {
        setInvalidEmail(false);
      }, 5000);
    } else if (success) {
      setTimeout(() => {
        isSuccess(false);
      }, 3000);
    } else {
    }
  };

  useEffect(() => {
    registerfunction();
  }, [passwordMatch, invalidEmail, invalidUsername, success]);

  const register = () => {
    // const auth = auth();
    registerfunction();

    if (
      email === "" &&
      username === "" &&
      password === "" &&
      ConfirmPassword === ""
    ) {
      return;
    }

    if (!/^[a-zA-Z0-9_.]+$/.test(username)) {
      setInvalidUsername(true);
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      setInvalidEmail(true);
      return;
    }
    if (password !== ConfirmPassword) {
      setPasswordMatch(true);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      isSuccess(true);
      const user = result.user;

      updateProfile(user, { displayName: username })
        .then(() => {
          
          console.log("successs");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleLogin = () => {
    navigate("/login");
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
          <form>
            <p>Enter The Sky...!!</p>

            <TextField
              helperText=""
              label="Email"
              size="small"
              style={{ width: "40vh" }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              helperText=""
              label="Username"
              size="small"
              style={{ width: "40vh" }}
              onChange={(e) => setUsername(e.target.value)}
            />

            <FormControl
              sx={{ m: 1, width: "25ch" }}
              size="small"
              style={{ width: "40vh" }}
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

            <FormControl
              sx={{ m: 1, width: "25ch" }}
              size="small"
              style={{ width: "40vh" }}
              variant="outlined"
            >
              <InputLabel>Confirm password</InputLabel>
              <OutlinedInput
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="confirm Password"
              />
            </FormControl>

            <Button
              variant="contained"
              onClick={register}
              style={{ width: "30vh" }}
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
            <p className="popup__show">invalid Email</p>
          ) : invalidUsername === true ? (
            <p className="popup__show">Invalid username</p>
          ) : passwordMatch === true ? (
            <p className="popup__show">password do not match</p>
          ) : success ===true?(
            <p className="popup__show">Registered Successfully</p>
          ):
          
          (
            <p style={{ fontSize: "20px" }}>
              Existing User?{" "}
              <button
                type="submit"
                onClick={handleLogin}
                style={{
                  outline: "none",
                  border: "none",
                  color: "blue",
                  backgroundColor: "none",
                }}
              >
                LOGIN
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
