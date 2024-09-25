import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <nav className="navbar">
      {/* Left: Title */}
      <div className="navbar-title">
        <h1>learn-markdown-game</h1>
      </div>

      {/* Center: Level Dropdown */}
      <div className="navbar-level">
        <label htmlFor="level">Level:</label>
        <select id="level" name="level">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {/* Right: Links and Theme Switcher */}
      <div className="navbar-links">
        <a href="/about">About</a>
        <a href="/what-is-markdown">What is Markdown?</a>
        <div className="theme-switcher">
          <label htmlFor="darkModeSwitch">Day/Night Mode</label>
          <input
            type="checkbox"
            id="darkModeSwitch"
            onChange={toggleDarkMode}
            checked={isDarkMode}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
