import React from "react";
import "../assets/css/navbar.css";

import Logo from "../assets/svg/logo.svg";

export default function navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <div className="navbar navbar_elements">
        <p className="navLink">Companies</p>
        <p className="navLink">Candidates</p>
        <p className="navLink">Assessment</p>
        <p className="navLink">Post a Job</p>
        <p className="navLink">Carreer Advice</p>
      </div>
      <div className="navbar navbar_elements">
        <p className="navLink">Sign Up</p>
        <div className="button_container">
          <p className="login_text">Log In</p>
        </div>
      </div>
    </div>
  );
}

//  "react-svg": "^14.0.13",
//         "@svgr/cli": "^5.5.0",
//         "react-svg-loader": "^3.0.3"
