import React, { useState } from "react";
import "./Intro.css";
import { Support } from "../Support/Support";
import FlightIcon from "@mui/icons-material/Flight";

export const Intro = () => {
  return (
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
        <div className="intro__username">
          <nav>
            <a href="#support">support</a>
          </nav>
        </div>
      </div>
      <div className="intro_container">
        <div className="intro__info">
          <p>
            To Find<br></br>
            <span>
              THE BEST VALUE <br></br> FLIGHTS
            </span>
          </p>
        </div>
        <div>can you hear mee!!</div>
      </div>

      <Support />
    </div>
  );
};
