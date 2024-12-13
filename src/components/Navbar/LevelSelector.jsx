import React from "react";
import "./LevelSelector.css";
import level_info from "../../assets/level_info";
import { Link, useLocation } from "react-router-dom";

const LevelSelector = ({ level, setLevel }) => {
  const location = useLocation(); // Get the current location

  // Handle level change
  const handleLevelChange = (e) => {
    const selectedLevel = parseInt(e.target.value, 10);
    setLevel(selectedLevel);
  };

  return (
    <>
    {location.pathname === '/' && (
    <div className="level-selector">
      <select id="level" name="level" value={level} onChange={handleLevelChange}>
        {level_info.map((levelItem) => (
          <option key={levelItem.level} value={levelItem.level}>
            Level {levelItem.level}: {levelItem.name}
          </option>
        ))}
      </select>
    </div>
    )}
    </>
  );
};

export default LevelSelector;



