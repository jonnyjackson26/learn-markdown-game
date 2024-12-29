import React, { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ setIsMenuOpen }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = `${newTheme}-mode`;
    if (setIsMenuOpen) {
      setIsMenuOpen(false); // Close the menu
    }
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? (
        <i className="fas fa-sun toggle-icon"></i>
      ) : (
        <i className="fas fa-moon toggle-icon"></i>
      )}
    </div>
  );
};

export default ThemeToggle;
