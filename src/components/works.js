import React from "react";
import Bullet from "../assets/svg/bullet.svg";
import Woman from "../assets/svg/woman1.svg";
import Man2 from "../assets/svg/man2.svg";
import Man3 from "../assets/svg/man3.svg";

import "../assets/css/work.css";

const workers = [
  {
    image: Woman,
    job: "Product Analyst",
  },
  {
    image: Man3,
    job: "Securities Trader",
  },
];

const list = [
  {
    header: "Search Jobs",
    description:
      "We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.",
  },
  {
    header: "Create a Profile and Get Noticed",
    description:
      "Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.",
  },
  {
    header: "Apply for jobs",
    description:
      "Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.",
  },
];

export default function works() {
  return (
    <div className="works_container">
      <div>
        <div>
          {workers.map((item, key) => (
            <div key={key} className="works_card">
              <div>
                <img src={item.image} alt="worker" />
              </div>
              <div className="works_footer">
                <p className="works_job">
                  {item.job} <span className="works_span">@ Paystack</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="works_card_container">
        <div className="works_card">
          <div>
            <img src={Man2} alt="worker" />
          </div>
          <div className="works_footer">
            <p className="works_job">
              HR Manager <span className="works_span">@ Paystack</span>
            </p>
          </div>
        </div>
      </div>
      <div className="works">
        <h1 className="works_header">How it works</h1>
        <p className="works_description">
          Getajob helps you find the right job easily. Getajob helps you find
          the right job easily. Getajob helps you find the right job easily.
        </p>
        {list.map((item, key) => (
          <div className="works_holder" key={key}>
            <p className="works_sub">
              <img src={Bullet} alt="bullet" /> {item.header}
            </p>
            <p className="works_description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
