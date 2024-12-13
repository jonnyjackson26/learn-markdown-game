import React from "react";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";
import LevelSelector from "./LevelSelector";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Markdown Trainer</h1>
      <div className="navbar-right">
        <NavbarLinks />
        <LevelSelector />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
