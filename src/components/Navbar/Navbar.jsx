import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";
import LevelSelector from "./LevelSelector";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ level, setLevel }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        learn-markdown-game
      </Link>
      <div className="navbar-right">
        <LevelSelector level={level} setLevel={setLevel} />
        <NavbarLinks />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
