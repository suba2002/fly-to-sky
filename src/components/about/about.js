import React from "react";
import "./about.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const About = () => {
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div className="about">
      <div className="about__content">
        <h1 className="about__fly">FLY</h1>
        <p className="about__nonstop">NON-STOP!!</p>
        <p className="about__para">
          Experience our non stop flights to USA, Europe, UK, Australia,
          Far-East, SEA and other international destinations with seamless
          connectivity in India.
        </p>
      </div>
      <div className="about__me">
        <KeyboardArrowUpIcon onClick={top} style={{color:"#ffffff",cursor:"pointer"}}/>
        <p>© 2023 SUBASHINI</p>
      </div>
    </div>
  );
};
