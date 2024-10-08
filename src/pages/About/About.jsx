import React from 'react';
import './About.css';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
    return (
        <>
            <Navbar /> {/* Include the Navbar */}
            <div className="about-container">
                <h1>About</h1>
                <p>
                    Welcome to the Markdown Learning Game! This free resource was created by 
                    me, Jonny Jackson, to help you learn Markdown in an interactive way. 
                    You can find more about me at my personal website: 
                    <a href="https://jonny-jackson.com" target="_blank" rel="noopener noreferrer"> jonny-jackson.com</a>.
                </p>
                <p>
                    Although this resource is free to use, if you'd like to support the project, 
                    you can <a href="https://buymeacoffee.com/jonnyjackson" target="_blank" rel="noopener noreferrer">buy me a coffee</a>.
                </p>
                <p>
                    This game teaches you the github flavor of markdown.
                </p>
                {/*<p>
                    Check out our <a href="/cheat-sheet" target="_blank" rel="noopener noreferrer">Markdown Cheat-Sheet</a> for a quick reference guide.
                </p>
                <p>
                    Watch our <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer">
                    Markdown Tutorial Video</a> on YouTube to get started!
                </p>*/}
            </div>
        </>
    );
};

export default About;
