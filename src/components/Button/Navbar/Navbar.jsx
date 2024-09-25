import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext'; // Import useTheme hook
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Access theme context

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>learn-markdown-game</h1>
      </div>

      <div className="navbar-level">
        <label htmlFor="level">Level:</label>
        <select id="level" name="level">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/what-is-markdown">What is Markdown?</Link>
        <div className="theme-switcher" onClick={toggleTheme}>
          {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
