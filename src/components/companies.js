import React from "react";
import Logos from "../assets/svg/logos.svg";
import Right from "../assets/svg/arrow_right.svg";

import "../assets/css/companies.css";

export default function companies() {
  return (
    <div className="companies_container">
      <div className="companies_description">
        <h1 className="companies_header">
          Over 1000+ jobs from top companies in our network
        </h1>
        <p className="companies_text">
          Every day we index millions of jobs directly from employer websites.
          We’re committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>
        <p className="companies_text">
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox.
        </p>
        <p className="learn_more">
          Learn More
          <img src={Right} alt="right" width={20} />
        </p>
      </div>
      <div>
        <img src={Logos} alt="logos" />
      </div>
    </div>
  );
}
