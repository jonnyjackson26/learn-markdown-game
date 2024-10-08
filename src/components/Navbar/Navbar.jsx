import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useLevel } from '../../context/LevelContext';
import level_info from '../../assets/level_info';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Access theme context
  const { level, setLevel } = useLevel(); // Access level context


  const handleLevelChange = (event) => {
    const selectedLevel = parseInt(event.target.value, 10);
    setLevel(selectedLevel);
};

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1><Link to="/">learn-markdown-game</Link></h1>
      </div>

      <div className="navbar-level">
            <label htmlFor="level">Level:</label>
            <select id="level" name="level" value={level} onChange={handleLevelChange}>
                {level_info.map((level) => (
                    <option key={level.level} value={level.level}>
                        Level {level.level}: {level.name}
                    </option>
                ))}
            </select>
        </div>


      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/cheat-sheet">Cheat Sheet</Link>
        <Link to="/live-editor">Live Editor</Link>
        {/*<Link to="/what-is-markdown">What is Markdown?</Link>*/}
        <div className="theme-switcher" onClick={toggleTheme}>
          {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
