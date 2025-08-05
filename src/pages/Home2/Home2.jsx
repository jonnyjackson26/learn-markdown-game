import React from 'react';
import { useEffect } from 'react';
import './Home2.css';
import Navbar from '../../components/Navbar/Navbar';
import Editor from '../../components/Editor/Editor';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useAnalytics } from "../../hooks/useAnalytics";

const Home2 = () => {
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
                <section id="task-lists" className="markdown-section">
                    <Editor prompt={`# Welcome to the _learn-markdown-game_. \nMarkdown is a lightweight markup language with a syntax similar to HTML. It is commonly used for formatting text in web pages and other documents, like GitHub README files. \n\nYou can easily *format* text ___with simple symbols___. It's ~~lightning fast~~ to write.`}/>
                </section>

                <div className="centered-cta">
                    <Link to="/tutorial" className="cta-button" onClick={handlePlayClick}>Play</Link>
                </div>
            </div>
        </>
    );
};

export default Home2;
