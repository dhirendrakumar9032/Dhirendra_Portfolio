import React, { useContext } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import "./index.scss";
import { NavigationContext } from "../../App";

const Navbar = () => {
  const { toggleNav, isNavVisible } = useContext(NavigationContext);

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });
console.log({isNavVisible})
  return (
    <nav className="navbar">
      <h1>Dhirendra Kumar</h1>
      {isNavVisible ? (
        <CloseOutlined className="hamburg" onClick={toggleNav} />
      ) : (
        <MenuOutlined className="hamburg" onClick={toggleNav} />
      )}
    </nav>
  );
};

export default Navbar;
