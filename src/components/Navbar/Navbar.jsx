import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useLevel } from '../../context/LevelContext';
import level_info from '../../assets/level_info';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Access theme context
  const { level, setLevel } = useLevel(); // Access level context
  const location = useLocation(); // Get the current location
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  const handleLevelChange = (event) => {
    const selectedLevel = parseInt(event.target.value, 10);
    setLevel(selectedLevel);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1><Link to="/">learn-markdown-game</Link></h1>
      </div>

      {/* Render the level dropdown only if the current path is the home page */}
      {location.pathname === '/' && (
        <div className="navbar-level">
          <select id="level" name="level" value={level} onChange={handleLevelChange}>
            {level_info.map((level) => (
              <option key={level.level} value={level.level}>
                Level {level.level}: {level.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Desktop Links */}
      <div className="navbar-links desktop">
        {location.pathname !== '/' && (
          <Link to="/">Tutorial</Link>
        )}
        <Link to="/about">About</Link>
        <Link to="/cheat-sheet">Cheat Sheet</Link>
        <Link to="/live-editor">Live Editor</Link>
        <div className="theme-switcher" onClick={toggleTheme}>
          {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </div>
      </div>

      {/* Hamburger Icon (only for mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* Mobile Menu (only visible when menu is open) */}
      <div className={`navbar-links mobile ${isMenuOpen ? 'active' : ''}`}>
        {location.pathname !== '/' && (
          <Link to="/">Tutorial</Link>
        )}
        <Link to="/about">About</Link>
        <Link to="/cheat-sheet">Cheat Sheet</Link>
        <Link to="/live-editor">Live Editor</Link>
        <div className="theme-switcher" onClick={toggleTheme}>
          {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
