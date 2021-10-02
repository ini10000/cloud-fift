import React from "react";
import Footer from "../assets/svg/foot_logo.svg";
import Instagram from "../assets/svg/instagram.svg";
import Twitter from "../assets/svg/twitter.svg";
import Facebook from "../assets/svg/facebook.svg";
import LinkedIn from "../assets/svg/linkedin.svg";

import "../assets/css/footer.css";

export default function footer() {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_columns">
          <img src={Footer} alt="logo" className="footer_logo" />
          <p className="footer_text">
            Getajobng provides a full online service for anyone looking for a
            new job. We're not a recruitment agency, we're a job site.
          </p>
        </div>
        <div className="footer_columns">
          <p className="footer_header">Information</p>
          <p className="footer_text foot_link">About Us</p>
          <p className="footer_text foot_link">Contact Us</p>
          <p className="footer_text foot_link">Terms & Conditions</p>
        </div>
        <div className="footer_columns">
          <p className="footer_header">Job Seekers</p>
          <p className="footer_text foot_link">Create Account</p>
          <p className="footer_text foot_link">Job List</p>
          <p className="footer_text foot_link">FAQ</p>
        </div>
        <div className="footer_columns">
          <p className="footer_header">Employers</p>
          <p className="footer_text foot_link">Create Account</p>
          <p className="footer_text foot_link">Post Jobs</p>
          <p className="footer_text foot_link">FAQ</p>
        </div>
        <div className="footer_columns">
          <p className="footer_header">Social Media:</p>
          <div className="socials">
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
            <img src={Facebook} alt="facebook" />
            <img src={LinkedIn} alt="linkedin" />
          </div>
        </div>
      </div>
      <p className="foot_note">
        © Copyright Get-A-Job RMS 2019, All right reserved
      </p>
    </div>
  );
}
