import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";
import LevelSelector from "./LevelSelector";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ level = null, setLevel = null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <Link to="/" className="navbar-title">
        learn-markdown-game
      </Link>

      {level !== null && setLevel !== null && (
        <LevelSelector level={level} setLevel={setLevel} />
      )}

      <div className="navbar-right">
        <NavbarLinks />
        <ThemeToggle setIsMenuOpen={setIsMenuOpen}/>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="navbar-hamburger-icon">&#9776;</span>
      </div>

      {/* Dropdown menu for mobile */}
      <div className={`navbar-dropdown ${isMenuOpen ? "open" : ""}`}>
        <NavbarLinks />
        <ThemeToggle setIsMenuOpen={setIsMenuOpen}/>
      </div>
    </nav>
  );
};

export default Navbar;
