import React from 'react';
import { useEffect } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Editor from '../../components/Editor/Editor';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useAnalytics } from "../../hooks/useAnalytics";

const Home = () => {
    const { isDarkMode } = useTheme();
    const { trackAction } = useAnalytics();

    const handlePlayClick = () => {
        trackAction('start_game', { from_page: 'home' });
      };

    return (
        <>
            <Navbar /> {/* Include the Navbar */}
            <div className="home-page">
                {/* Task Lists */}
                <section id="task-lists">
                    <Editor prompt={`# Welcome to the _learn-markdown-game_. \n\n## What *is* Markdown? \n\nMarkdown is a lightweight markup language with a syntax similar to HTML. It is commonly used for formatting text in web pages and other documents, like GitHub README files. \n\nYou can easily *format* text ___with simple symbols___. It's ~~lightning fast~~ to write.  You can create [links](https://jonny-jackson.com), tables, images, and more.  \n\nClick the ***Play*** button to start the game.`}/>
                </section>

                <div className="centered-cta">
                    <Link to="/tutorial" className="cta-button" onClick={handlePlayClick}>Play</Link>
                </div>
            </div>
        </>
    );
};

export default Home;
