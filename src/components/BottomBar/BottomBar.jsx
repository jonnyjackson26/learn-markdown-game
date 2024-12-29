import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "../../context/ThemeContext";
import { useLevel } from "../../context/LevelContext";
import level_info from "../../assets/level_info";
import isValidMarkdown from "../../assets/isValidMarkdown";
import "./BottomBar.css";
import ContinueButton from "../ContinueButton/ContinueButton";

const BottomBar = ({ markdown, setMarkdown }) => {
  const { isDarkMode } = useTheme();
  const { level, setLevel } = useLevel();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && isValidMarkdown(markdown, level_info, level)) {
        handleContinue();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [markdown, level]);

  const toggleBottomBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bottom-bar-container ${isOpen ? "open" : "closed"}`}>
      <div className="bottom-bar">
        <div className="welcome-message">
          <ReactMarkdown>{level_info[level].message}</ReactMarkdown>
        </div>
      </div>
      <ContinueButton
        markdown={markdown}
        setMarkdown={setMarkdown}
        level={level} // Pass level to ContinueButton
        setLevel={setLevel} // Pass setLevel to ContinueButton
      />
      <button className="toggle-btn" onClick={toggleBottomBar}>
        <i className={`fa fa-caret-${isOpen ? "down" : "up"}`}></i>
      </button>
    </div>
  );
};

export default BottomBar;
