import React from "react";
import "./BookingPage.css";
import { Details } from "../../components/Details/Details";

export const BookingPage = () => {
  return (
    <div
      className="BookingPage"
      style={{ minWidth: "100vw", overflow: "hidden" }}
    >
      <Details />
    </div>
  );
};
