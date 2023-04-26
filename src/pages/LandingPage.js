import React from "react";
import { Login } from "../components/Login/Login";
import { Support } from "../components/Support/Support";
import { About } from "../components/about/about";

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <Login />
      <Support />
      <About />
    </div>
  );
};
