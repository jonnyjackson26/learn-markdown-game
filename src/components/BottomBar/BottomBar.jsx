import React from 'react';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown component
import { useTheme } from '../../context/ThemeContext'; 
import { useLevel } from '../../context/LevelContext';
import level_info from '../../assets/level_info';
import './BottomBar.css'; // Import CSS for styling

const BottomBar = ( {markdown, setMarkdown}) => {
  const { isDarkMode } = useTheme(); // Access theme context
  const { level, setLevel } = useLevel(); // Access level context

  const isValidMarkdown = () => {
    return markdown.trim() === level_info[level].prompt.trim();
  };

  const handleContinue = () => {
    setLevel((prevLevel) => prevLevel + 1);
    setMarkdown('');
  };

  return (
    <div className={`bottom-bar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="welcome-message">
        <ReactMarkdown>{level_info[level].message}</ReactMarkdown>
      </div>
      <button className={`continue-button ${isValidMarkdown() ? 'valid' : ''}`} disabled={!isValidMarkdown()} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default BottomBar;
