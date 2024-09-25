import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '../../context/ThemeContext';
import './MarkdownGame.css';

const MarkdownGame = () => {
  const { isDarkMode } = useTheme(); // Access the dark mode state
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className={`markdown-game-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Goal Section */}
      <div className="goal-section">
        <div className="goal-example">
          <h1>Heading</h1>
        </div>
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
        <h2>Markdown Preview</h2>
        <div className="markdown-output">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownGame;
