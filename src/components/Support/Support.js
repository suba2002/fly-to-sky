import React from "react";
import "./Support.css";
import logo1 from "../../assets/customer_support.jpg";
import logo2 from "../../assets/Flying-returns.png";
import logo3 from "../../assets/Bid-Upfront.png";
import { About } from "../about/about";

export const Support = () => {
  return (
    <div className="support">
      <div className="support__content">
        <h3>Plan your trip and travel with confidence </h3>
        <p>
          From booking services to help in travel plans,you can expect a lot
          along your journey
        </p>
      </div>
      <div className="support__container">
        <div className="support__images">
          <img src={logo1} alt="customer_support" />
          <div className="inner__text">
            <h3>Customer Support</h3>
            <span>
              State-of-the-art-flying with more entertainment and comfort
            </span>
          </div>
        </div>
        <div className="support__images">
          <img src={logo2} alt="Bid.fly.Enjoy" />
          <div className="inner__text">
            <h3>Bid-Fly-Enjoy !!</h3>
            <span>
              Bid upfront to enjoy travelling in our business or first class{" "}
            </span>
          </div>
        </div>
        <div className="support__images">
          <img src={logo3} alt="Experience Dreamliner" />
          <div className="inner__text">
            <h3>Experience Dreamliner</h3>
            <span>
              Click here for us to help quikly and Easily with your queries
            </span>
          </div>
        </div>
      </div>
      <About/>
    </div>
  );
};
