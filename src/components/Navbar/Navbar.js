import React from "react";
import MenuItems from "../Navbar/MenuItems";
import Burger from "../../components/Burger";
import Logo from "../../assets/svg/logo.svg";

import "./Navbar.css";
import "../../assets/css/navbar.css";

function Navbar(props) {
  return (
    <div>
      {window.innerWidth > 1080 ? (
        <nav className="navbar">
          <img src={Logo} alt="logo" />
          <div className="navbar navbar_elements">
            {MenuItems.map((item, index) => (
              <p className={item.cName}>{item.title}</p>
            ))}
          </div>
          <div
            style={{
              justifyContent: "space-between",
            }}
          >
            <div className="navbar navbar_elements">
              <p className="navLink">Sign Up</p>
              <div className="button_container">
                <p className="login_text">Log In</p>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <img src={Logo} alt="logo" />
          <Burger />
        </nav>
      )}
    </div>
  );
}
export default Navbar;
