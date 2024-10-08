import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown component
import { useTheme } from '../../context/ThemeContext'; 
import { useLevel } from '../../context/LevelContext';
import level_info from '../../assets/level_info';
import {isValidMarkdown} from '../../assets/isValidMarkdown';
import './BottomBar.css'; // Import CSS for styling

const BottomBar = ( {markdown, setMarkdown}) => {
  const { isDarkMode } = useTheme(); // Access theme context
  const { level, setLevel } = useLevel(); // Access level context

  const handleContinue = () => {
    setLevel((prevLevel) => prevLevel + 1);
    setMarkdown('');
  };

  // Add keydown event listener to detect "Enter" key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && isValidMarkdown(markdown, level_info, level)) {
        handleContinue(); // Trigger the button action when Enter is pressed
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Cleanup event listener
    };
  }, [markdown, level]); // Re-run this effect when markdown or level changes

  return (
    <div className={`bottom-bar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="welcome-message">
        <ReactMarkdown>{level_info[level].message}</ReactMarkdown>
      </div>
      <button className={`continue-button ${isValidMarkdown(markdown, level_info, level) ? 'valid' : ''}`} 
        disabled={!isValidMarkdown(markdown, level_info, level)} 
        onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default BottomBar;
