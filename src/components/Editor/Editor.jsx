import React, { useState } from 'react';
import './Editor.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Editor = ({ prompt }) => {
    const [markdownText, setMarkdownText] = useState(prompt); // Initialize the textarea with the prompt

    return (
        <div className="editor-container">
            <div className="markdown-editor">
                <textarea
                    value={markdownText}
                    onChange={(e) => setMarkdownText(e.target.value)}
                    placeholder="Type your markdown here..."
                />
            </div>
            <div className="markdown-output">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdownText}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Editor;
