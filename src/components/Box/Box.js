import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

export const Box = (props) => {
  const [click, setClick] = useState(true);

  const navigate=useNavigate();
  const handleClick = () =>{
    navigate(`/payment`)
  }
  return (
    <div className="content__fly">
      {click ? (
        <div className="box">
          <div className="booking__header">
            <p>FLIGHT NO: {props.flightNo}</p>
          </div>
          <div className="booking__info">
            <div className="booking__destination">
              <p>
                <span
                  style={{
                    fontWeight: "800",
                    fontSize: "17px",
                    fontFamily: "serif",
                  }}
                >
                  FROM
                </span>
                <br />
                {props.from}
              </p>
            </div>
            <div className="booking__destination">
              <p>
                <span
                  style={{
                    fontWeight: "800",
                    fontSize: "17px",
                    fontFamily: "serif",
                  }}
                >
                  TO
                </span>
                <br />
                {props.to}
              </p>
            </div>
          </div>
          <div className="booking__price">
            <button
              style={{ backgroundColor: "#85e9ff" }}
              onClick={() => {
                setClick(false);
              }}
              className="booking__button1"
            >
              Economy <br /> <span>INR {props.economy}</span>
            </button>
            <button
              style={{ backgroundColor: "#6bbcce" }}
              onClick={() => {
                setClick(false);
              }}
              className="booking__button2"
            >
              Business <br />
              <span>INR {props.business}</span>
            </button>
          </div>
        </div>
      ) : (
        <div style={{ position: "relative" }} className="popUp">
          <button
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              border: "none",
            }}
            onClick={() => setClick(true)}
          >
            <ClearIcon style={{ backgroundColor: "rgba(107,188,206)" }} />
          </button>
          <div className="popUp__content">
            <h1>Click to Fly</h1>
            <button onClick={handleClick}>Proceed</button>
          </div>
        </div>
      )}
    </div>
  );
};
