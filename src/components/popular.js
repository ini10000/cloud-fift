import React from "react";
import Oil from "../assets/svg/oil.svg";
import Health from "../assets/svg/health.svg";
import Education from "../assets/svg/education.svg";
import Accounting from "../assets/svg/accounting.svg";
import Design from "../assets/svg/design.svg";
import Tech from "../assets/svg/tech.svg";
import Security from "../assets/svg/security.svg";
import Data from "../assets/svg/data.svg";

import "../assets/css/popular.css";

const categories = [
  {
    name: "Oil and Gas",
    logo: Oil,
    jobs: 20,
  },
  {
    name: "Healthcare",
    logo: Health,
    jobs: 10,
  },
  {
    name: "Education",
    logo: Education,
    jobs: 10,
  },
  {
    name: "Accounting",
    logo: Accounting,
    jobs: 10,
  },
  {
    name: "Design, Art and Multimedia",
    logo: Design,
    jobs: 20,
  },
  {
    name: "Technology",
    logo: Tech,
    jobs: 10,
  },
  {
    name: "Security",
    logo: Security,
    jobs: 10,
  },
  {
    name: "Data Analyst",
    logo: Data,
    jobs: 10,
  },
];

export default function popular() {
  return (
    <div>
      <h1 className="jobs_header category_header">Popular Categories</h1>
      <div className="categories">
        {categories.map((item, key) => (
          <div className="category_card">
            <img src={item.logo} alt="oil" />
            <h1 className="category_name">{item.name}</h1>
            <p className="job_quantity">({item.jobs} new jobs)</p>
          </div>
        ))}
      </div>
    </div>
  );
}
