import React from "react";
import "./ThemeToggle.css";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ setIsMenuOpen }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    if (setIsMenuOpen) {
      setIsMenuOpen(false); // Close the menu
    }
  };

  return (
    <div className="theme-toggle" onClick={handleToggle}>
      {isDarkMode ? (
        <i className="fas fa-sun toggle-icon"></i>
      ) : (
        <i className="fas fa-moon toggle-icon"></i>
      )}
    </div>
  );
};

export default ThemeToggle;
