import React from "react";
import "./Details.css";
import FlightIcon from "@mui/icons-material/Flight";
import BoltIcon from "@mui/icons-material/Bolt";
import { Box } from "../Box/Box";
import { useSelector } from "react-redux";

export const Details = () => {
  const username=useSelector((state)=>state.user.username)
  
  return (
    <div className="details">
      <div clas className="details__header">
        <div className="header__icon">
          <FlightIcon
            fontSize="large"
            color="primary"
            style={{ transform: "rotate(45deg)" }}
            width={45}
            height={45}
          />
          <p className="icon__name">FLY TO SKY</p>
        </div>
        <div className="user__detail">
          <div className="username">
            <p>
              Welcome!!
              {username}
            </p>
          </div>
          <p className="user__profile"></p>
        </div>
      </div>
      <div className="details__content">
        <div className="content__header" >
          <h1>
            IT’S TIME TO FLY HIGH
            <BoltIcon fontSize="large" style={{ color: "#ffc726" }} />
          </h1>
        </div>
        <div className="Box__Content">
          <Box
            flightNo={"SH1722"}
            from={"Chennai"}
            to={"Mumbai"}
            economy={"6,787"}
            business={"34,565"}
          />
          <Box
            flightNo={"SH2572"}
            from={"Delhi"}
            to={"Coimbatore"}
            economy={"10,290"}
            business={"40,500"}
          />
          <Box
            flightNo={"SH1072"}
            from={"Trichy"}
            to={"Chennai"}
            economy={"3,200"}
            business={"14,000"}
          />
          <Box
            flightNo={"SH1000"}
            from={"USA"}
            to={"Chennai"}
            economy={"10,000"}
            business={"40,000"}
          />
          <Box
            flightNo={"SH2006"}
            from={"Kolkata"}
            to={"Madurai"}
            economy={"12,050"}
            business={"55,000"}
          />
          <Box
            flightNo={"SH2023"}
            from={"Mumbai"}
            to={"Trichy"}
            economy={"6,500"}
            business={"35,400"}
          />
          <Box
            flightNo={"SH3089"}
            from={"Coimbatore"}
            to={"Canada"}
            economy={"14,500"}
            business={"35,565"}
          />
          <Box
            flightNo={"SH1722"}
            from={"Bangalore"}
            to={"Delhi"}
            economy={"10,500"}
            business={"50,500"}
          />
          <Box
            flightNo={"SH4718"}
            from={"Madurai"}
            to={"Chennai"}
            economy={"12,000"}
            business={"46,000"}
          />
          <Box
            flightNo={"SH2281"}
            from={"Singapore"}
            to={"Bangalore"}
            economy={"22,470"}
            business={"65,000"}
          />
          <Box
            flightNo={"SH2422"}
            from={"Spain"}
            to={"Chennai"}
            economy={"17,180"}
            business={"67,000"}
          />
          <Box
            flightNo={"SH0923"}
            from={"Switzerland"}
            to={"Singapore"}
            economy={"25,600"}
            business={"64,565"}
          />
          <Box
            flightNo={"SH8922"}
            from={"Chennai"}
            to={"Madurai"}
            economy={"8,500"}
            business={"24,000"}
          />
          <Box
            flightNo={"SH2722"}
            from={"Trichy"}
            to={"Bangalore"}
            economy={"7,000"}
            business={"17,000"}
          />
          <Box
            flightNo={"SH9022"}
            from={"Madurai"}
            to={"Mumbai"}
            economy={"6,000"}
            business={"10,000"}
          />
          <Box
            flightNo={"SH1722"}
            from={"Switzerland"}
            to={"Chennai"}
            economy={"18,000"}
            business={"60,000"}
          />
        </div>
      </div>
    </div>
  );
};
