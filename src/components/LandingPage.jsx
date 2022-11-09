import React from "react";
import {  NavLink } from "react-router-dom";
import "./Styles/LandingPage.css";
import LOGO from "./Assets/GU.png"

export default function LandingPage() {
  return (
    <div className="container">
      <div className="conteinerB">
        <NavLink to="/Home">
        <img classname="logo" src={LOGO} alt="logo" max-height="30%"></img>
        <div>
        <button className="bn">ENTER</button>
        </div>
        </NavLink>
      </div>
    </div>
  );
}
