import React from "react";
import "../assets/css/jobs.css";

import Paystack from "../assets/svg/paystack.svg";
import Google from "../assets/svg/google.svg";
import Flutterwave from "../assets/svg/flutterwave.svg";
import Access from "../assets/svg/access.svg";
import Map from "../assets/svg/map.svg";
import Left from "../assets/svg/arrow_left.svg";
import Right from "../assets/svg/arrow_right.svg";

const jobs_list = [
  {
    duration: "Full TIme",
    logo: Paystack,
    title: "QA Engineer",
    name: "Paystack",
    location: "Lagos, Nigeria",
  },
  {
    duration: "Part TIme",
    logo: Google,
    title: "Product Analyst",
    name: "Google",
    location: "Lagos, Nigeria",
  },
  {
    duration: "Full TIme",
    logo: Flutterwave,
    title: "HR Manager",
    name: "Flutterwave",
    location: "Abuja, Nigeria",
  },
  {
    duration: "Full TIme",
    logo: Access,
    title: "QA Engineer",
    name: "Access Bank",
    location: "Lagos, Nigeria",
  },
];

export default function jobs() {
  return (
    <div>
      <h1 className="jobs_header">Recommended Jobs</h1>
      <div className="jobs_container">
        {jobs_list.map((item, key) => (
          <div key={key} className="job_card">
            <div className=" job_description">
              <div className="job_pill_container">
                <div className="job_pill">{item.duration}</div>
              </div>
              <div className="job_title_container">
                <img src={item.logo} alt="logo" />
                <p className="job_title">{item.title}</p>
              </div>
            </div>
            <hr />
            <div className="job_footer">
              <p className="company_name">{item.name}</p>
              <div className="job_card_footer">
                <div className="job_location">
                  <img src={Map} alt="location" />
                  <p className="location_text">{item.location}</p>
                </div>
                <p className="apply_now"> Apply Now</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow_container">
        <div className="arrows">
          <img src={Left} alt="left" />
          <img src={Right} alt="right" />
        </div>
      </div>
    </div>
  );
}
