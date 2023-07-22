import React, { useState } from "react";
import "./Intro.css";
import { Support } from "../Support/Support";
import FlightIcon from "@mui/icons-material/Flight";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


export const Intro = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/booking`);
  };

  return (
    <div>
      <div className="intro">
        <div clas className="intro__header">
          <div className="intro__icon">
            <FlightIcon
              fontSize="large"
              color="primary"
              style={{ transform: "rotate(45deg)" }}
              width={45}
              height={45}
            />
            <p className="icon__name">FLY TO SKY</p>
          </div>
          <div className="intro__username"></div>
        </div>
        <div className="intro__container">
          <div className="intro__info">
            <p>
              To Find<br></br>
              <span>
                THE BEST VALUE <br></br> FLIGHTS
              </span>
              
            </p>
          </div>
          <div className="intro__booking">
            <h2>Start your booking !! 🚀</h2>
            <h3>
              "Booking flight tickets is not just about reaching a destination;
              it's about embarking on a journey that leads to unforgettable
              experiences and cherished memories."
            </h3>
            <Button
              variant="contained"
              type="submit"
              onClick={handleButtonClick}
            >
              View booking details
            </Button>{" "}

            <p></p>
          </div>
        </div>
      </div>
      <Support />
    </div>
  );
};
