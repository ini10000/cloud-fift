import React from "react";
import Man4 from "../assets/svg/man4.svg";
import Left from "../assets/svg/arrow_left.svg";
import Right from "../assets/svg/arrow_right.svg";
import Sign from "../assets/svg/sign.svg";

import "../assets/css/customers.css";

export default function customers() {
  return (
    <div>
      <h1 className="customers_header">What are our customers saying</h1>
      <div className="customers_container">
        <div>
          <img src={Man4} alt="man" />
        </div>
        <div className="testimony_container">
          <div className="arrow_container">
            <div className="arrows">
              <img src={Left} alt="left" />
              <img src={Right} alt="right" />
            </div>
          </div>
          <img src={Sign} alt="sign" className="sign" />
          <p className="customer_text">
            The platform is really convenient to reach out to companies & I have
            managed to secure 2 interviews already! I can also track my
            application status instead of wondering whether the company has seen
            or shortlisted me
          </p>
          <p className="customer_name">Irma Black</p>
          <p className="customer_position">HR Manager at MasterCard</p>
        </div>
      </div>
    </div>
  );
}
