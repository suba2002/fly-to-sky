import React from "react";
import "./Payment.css";


export const Payment = () => {


  
  return (
    <div className="payment">
      <div className="payment__container">
        <form>
          <div className="payment__details">
            <h1>PAYMENT DETAILS</h1>
            <label>CARDHOLDER'S NAME</label>
            <input
              style={{ width: "350px", height: "47px", outline: "none" }}
            />
          </div>
          <div className="payment__details">
            <label>CARD NUMBER</label>
            <input
              style={{ width: "350px", height: "47px", outline: "none" }}
            />
          </div>
          <div className="payment__details">
            <label>EXPIRATION DATE</label>
            <input
              style={{ width: "350px", height: "47px", outline: "none" }}
            />
          </div>
          <div className="payment__details">
            <label>CVV</label>
            <input
              style={{ width: "350px", height: "47px", outline: "none" }}
            />
          </div>
          <button type="submit" >Proceed</button>
        </form>
      </div>
    </div>
  );
};
