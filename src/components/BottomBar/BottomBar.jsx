import React from 'react';
import { useTheme } from '../../context/ThemeContext'; 
import './BottomBar.css'; // Import CSS for styling

const BottomBar = () => {
  const { isDarkMode } = useTheme(); // Access theme context

  return (
    <div className={`bottom-bar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="welcome-message">
        Welcome to the learn-markdown-game! Create a title like this:<br />
        <code># Title</code>
      </div>
      <button className="continue-button">Continue</button>
    </div>
  );
};

export default BottomBar;
