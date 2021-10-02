import React from "react";
import started from "../assets/svg/footer.svg";

import "../assets/css/get.css";

export default function get() {
  return (
    <div className="started_container">
      <img src={started} alt="started" width="100%" classname="started_image" />
      <div className="started_text">
        <p className="started_heading">Get a Job you actually like</p>
        <p className="started_description">
          Create an account and start applying
        </p>
      </div>
      <div className="get_started">
        <p className="started_description">Get Started</p>
      </div>
    </div>
  );
}
