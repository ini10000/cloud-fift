import React from "react";
import styled from "styled-components";
import "../assets/css/navbar.css";

import MenuItems from "./Navbar/MenuItems";

const Ul = styled.ul`
  list-style: none;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  .burgerText {
    color: #4caf30;
    margin-right: 600px;
    color: #4caf30;
    text-decoration: none;
    padding-right: 50px;
    font-family: AvenirNextCyr-Bold;
    font-size: 14px;
    text-transform: uppercase;
    opacity: 1;
    cursor: pointer;
  }
  .burgerText:hover {
    transform: scale(1.03);
  }
  .txt {
    margin-top: 20px;
  }
  @media (min-width: 100px) {
    z-index: 1;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #4caf30;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {MenuItems.map((item, index) => (
        <li key={index}>
          <p className="navLink">{item.title} Up</p>
        </li>
      ))}
      <li>
        <p className="navLink">Sign Up</p>
      </li>
      <li>
        <div className="button_container">
          <p className="login_text">Log In</p>
        </div>
      </li>
    </Ul>
  );
};

export default RightNav;
