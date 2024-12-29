import React, { useEffect, useState } from "react";
import "./ContinueButton.css";
import isValidMarkdown from "../../assets/isValidMarkdown";
import level_info from "../../assets/level_info";

const ContinueButton = ({ markdown, level, setLevel, setMarkdown }) => {
  const [adjustedBottom, setAdjustedBottom] = useState(50); // Default bottom position

  const handleContinue = () => {
    setLevel((prevLevel) => prevLevel + 1);
    setMarkdown("");
  };

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
        isValidMarkdown(markdown, level_info, level) ? "valid" : ""
      }`}
      disabled={!isValidMarkdown(markdown, level_info, level)}
      onClick={handleContinue}
      style={{ bottom: `${adjustedBottom}px` }} // Dynamically adjust bottom position
    >
      Continue
    </button>
  );
};

export default ContinueButton;
