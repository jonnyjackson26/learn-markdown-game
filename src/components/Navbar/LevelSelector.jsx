import React from "react";
import "./LevelSelector.css";

const LevelSelector = () => {
  return (
    <div className="level-selector">
      <label htmlFor="level" className="level-label">Select Level:</label>
      <select id="level" className="level-dropdown">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};

export default LevelSelector;
