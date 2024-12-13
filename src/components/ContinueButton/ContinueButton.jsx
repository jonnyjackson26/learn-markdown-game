import React, { useEffect } from "react";
import "./ContinueButton.css";
import isValidMarkdown from "../../assets/isValidMarkdown";
import level_info from "../../assets/level_info";

const ContinueButton = ({ markdown, level, setLevel, setMarkdown }) => {
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
  }, [markdown, level, handleContinue]);

  return (
    <button
      className={`floating-continue-button ${
        isValidMarkdown(markdown, level_info, level) ? "valid" : ""
      }`}
      disabled={!isValidMarkdown(markdown, level_info, level)}
      onClick={handleContinue}
    >
      Continue
    </button>
  );
};

export default ContinueButton;
