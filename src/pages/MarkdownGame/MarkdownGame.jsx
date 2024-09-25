// MarkdownGame.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '../../context/ThemeContext';
import { useLevel } from '../../context/LevelContext';
import level_info from '../../assets/level_info';
import './MarkdownGame.css';

const MarkdownGame = ({ markdown, setMarkdown }) => { // Accept markdown and setMarkdown as props
  const { isDarkMode } = useTheme(); 
  const { level } = useLevel(); 

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className={`markdown-game-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Goal Section */}
      <div className="goal-section">
        <ReactMarkdown>{level_info[level].prompt}</ReactMarkdown>
      </div>

      {/* Input Section */}
      <div className="input-section">
        <textarea
          value={markdown}
          onChange={handleInputChange}
          placeholder="Type your markdown here..."
        />
      </div>

      {/* Preview Section */}
      <div className="preview-section">
        <div className="markdown-output">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownGame;
