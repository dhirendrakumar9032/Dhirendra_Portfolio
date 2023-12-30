import React, { useContext } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import "./index.scss";
import { NavigationContext } from "../../App";
import logo from "../../resources/icons/logo.jpg";
import sun from "../../resources/icons/sun.png";
import moon from "../../resources/icons/moon.png";

const Navbar = () => {
  const { toggleNav, isNavVisible, isLightsEnabled, handleModes } =
    useContext(NavigationContext);

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });
  return (
    <nav className="navbar">
      <div className="name">
        <img className="logo" src={logo} alt="logo" />
        <span>Dhirendra Kumar</span>
      </div>
      <div className="left-nav-container">
        {isLightsEnabled?<img  src={moon} alt="sun" onClick={handleModes} />:<img src={sun} alt="moon" onClick={handleModes}/>}
        {isNavVisible ? (
          <CloseOutlined className="hamburg" onClick={toggleNav} />
        ) : (
          <MenuOutlined className="hamburg" onClick={toggleNav} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
