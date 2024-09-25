import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownGame.css';

const MarkdownGame = () => {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-game-container">
      {/* Goal Section */}
      <div className="goal-section">
        <h2>Goal</h2>
        <p>Here’s an example of Markdown you should recreate:</p>
        <div className="goal-example">
          <h1>This is a heading</h1>
          <p>This is a paragraph.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
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
