import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../assets/css/landing.css";

import Man from "../assets/svg/man1.svg";
import Paystack from "../assets/svg/paystack_grey.svg";
import Google from "../assets/svg/google_grey.svg";
import KPMG from "../assets/svg/kpmg_grey.svg";
import Search from "../assets/svg/search.svg";

export default function landing() {
  return (
    <div className="landing_container">
      <div>
        <div>
          <h1 className="landing_header">
            Find a <span className="landing_span">job</span> easily
          </h1>
          <p className="landing_description">
            With verified, up-to-date job listings directly from employer
            websites, we create a premium experience for job seekers, employers,
            and data seekers alike.
          </p>
          <InputGroup className="mb-3 search_box">
            <FormControl
              aria-label="First name"
              id="search"
              placeholder="Enter keywords, skill, interest"
            />
            <FormControl
              aria-label="Last name"
              id="location"
              placeholder="Location"
            />
            <Button
              variant="success"
              id="button-addon2"
              className="search_button"
            >
              <img src={Search} alt="search" />
            </Button>
          </InputGroup>
          <p className="landing_description landing_sub">Trusted by:</p>
          <div className="landing_trustees">
            <img src={Paystack} alt="paystack_grey" />
            <img src={Google} alt="google_grey" />
            <img src={KPMG} alt="kpmg_grey" />
          </div>
        </div>
      </div>
      <img src={Man} alt="man1" width={520} />
    </div>
  );
}
