import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";
import LevelSelector from "./LevelSelector";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ level, setLevel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the state
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        learn-markdown-game
      </Link>

      <LevelSelector level={level} setLevel={setLevel} />

      <div className="navbar-right">
        <NavbarLinks />
        <ThemeToggle />
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="navbar-hamburger-icon">&#9776;</span>
      </div>

      {/* Dropdown menu for mobile */}
      <div className={`navbar-dropdown ${isMenuOpen ? "open" : ""}`}>
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
