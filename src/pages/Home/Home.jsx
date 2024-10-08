// Home.jsx
import React, { useState } from 'react';
import './Home.css';
import MarkdownGame from '../MarkdownGame/MarkdownGame';
import Navbar from '../../components/Navbar/Navbar';
import BottomBar from '../../components/BottomBar/BottomBar';

const Home = () => {
    const [markdown, setMarkdown] = useState(''); // Manage markdown state here

    return (
        <div className="home-container">
            <Navbar />
            <div className="markdown-game">
                <MarkdownGame markdown={markdown} setMarkdown={setMarkdown} /> {/* Pass state and setter */}
            </div>
            <BottomBar markdown={markdown} setMarkdown={setMarkdown} /> {/* Pass markdown to BottomBar */}
        </div>
    );
};

export default Home;
