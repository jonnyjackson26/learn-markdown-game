import React from 'react';
import './Home.css';
import MarkdownGame from '../MarkdownGame/MarkdownGame';
import Navbar from '../../components/Button/Navbar/Navbar';
import BottomBar from '../../components/BottomBar/BottomBar';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="markdown-game">
                <MarkdownGame />
            </div>
            <BottomBar />
        </div>
    );
};

export default Home;
