import React from 'react';
import './LiveEditor.css';
import Navbar from '../../components/Navbar/Navbar';
import Editor from '../../components/Editor/Editor';

const LiveEditor = () => {
    return (
        <>
            <Navbar /> 
            <div class="live-editor-container">
                <Editor class="editor" prompt="# Welcome to the Live Markdown Editor!

This is a **live editor** for markdown code. It supports **GitHub-flavored markdown** (GFM), meaning you can use features like strikethroughs, tables, task lists, and more.

For a **Markdown Cheat Sheet**, visit [this page](https://learn-markdown-game.com/#/cheat-sheet).

Or check out the **Markdown Tutorial** at [learn-markdown-game.com](https://learn-markdown-game.com).

Start typing your markdown on the left and see the output rendered in real-time on the right!
"/>
          </div>  
        </>
    );
};

export default LiveEditor;
