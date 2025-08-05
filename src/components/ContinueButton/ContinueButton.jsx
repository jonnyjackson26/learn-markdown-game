import React, { useEffect, useState } from "react";
import "./ContinueButton.css";
import isValidMarkdown from "../../assets/isValidMarkdown";
import level_info from "../../assets/level_info";
import { trackEvent } from "../../utils/analytics";

const ContinueButton = ({ markdown, level, setLevel, setMarkdown }) => {
  const [adjustedBottom, setAdjustedBottom] = useState(50); // Default bottom position

  const handleContinue = () => {
    // Track level completion before moving to the next level
    trackEvent('level_completed', {
      level_number: level,
      level_name: level_info[level]?.title || `Level ${level}`,
      time_spent: getTimeSpentOnLevel()
    });
    
    setLevel((prevLevel) => prevLevel + 1);
    setMarkdown("");
    
    // Reset the timer for the new level
    localStorage.setItem('levelStartTime', Date.now().toString());
  };
  
  // Function to calculate time spent on the current level
  const getTimeSpentOnLevel = () => {
    const startTime = localStorage.getItem('levelStartTime');
    if (!startTime) return 0;
    
    const timeSpent = Math.floor((Date.now() - parseInt(startTime, 10)) / 1000); // in seconds
    return timeSpent;
  };
  
  // Set the start time when the component mounts or when level changes
  useEffect(() => {
    if (!localStorage.getItem('levelStartTime')) {
      localStorage.setItem('levelStartTime', Date.now().toString());
    }
  }, [level]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && isValidMarkdown(markdown, level_info, level)) {
        event.preventDefault(); // Prevent default Enter behavior
        handleContinue();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [markdown, level]);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the button position if the keyboard is visible
      const isKeyboardVisible = window.innerHeight < window.outerHeight * 0.8;
      setAdjustedBottom(isKeyboardVisible ? 100 : 50); // Raise the button when the keyboard is visible
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button
      className={`floating-continue-button ${
        isValidMarkdown(markdown, level_info, level) || level === 0 ? "valid" : "invalid"
      } ${level === 0 ? "enabled" : ""}`} // Add an extra "enabled" class when level is 0
      disabled={level !== 0 && !isValidMarkdown(markdown, level_info, level)} // Disable unless level is 0 and markdown is valid
      onClick={handleContinue}
      style={{ bottom: `${adjustedBottom}px` }} // Dynamically adjust bottom position
    >
      Continue
    </button>
  );
};

export default ContinueButton;
