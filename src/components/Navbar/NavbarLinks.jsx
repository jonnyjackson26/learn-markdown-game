import React from "react";
import "./NavbarLinks.css";

const NavbarLinks = () => {
  return (
    <div className="navbar-links">
      <a href="/about" className="navbar-link">About</a>
      <a href="/cheatsheet" className="navbar-link">Cheat Sheet</a>
      <a href="/tutorial" className="navbar-link">Tutorial</a>
    </div>
  );
};

export default NavbarLinks;
