import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
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
                    <a href="https://jonny-jackson.com" target="_blank" rel="noopener noreferrer"> jonny-jackson.com</a>, or view the source code on  
                    <a href="https://github.com/jonnyjackson26/learn-markdown-game" target="_blank" rel="noopener noreferrer"> Github</a>.
                </p>
                <p>
                    When I started learning markdown in college, I noticed there were plenty of videos I'd watch on YouTube but nothing stuck with me until I started writing my own. I've always belived that its much better to learn by <em class="not-extreeme-italics">doing</em> rather than by <em class="not-extreeme-italics">watching,</em> so I created this site. 
                </p>
                <p>
                    Although this resource is free to use, if you'd like to support the project, 
                    you can <a href="https://buymeacoffee.com/jonnyjackson" target="_blank" rel="noopener noreferrer">buy me a coffee</a>.
                </p>
                <p>
                    This game teaches you the github flavor of markdown.
                </p>
                <p>
                    Check out our <a href="/#/cheat-sheet" target="_blank" rel="noopener noreferrer">Markdown Cheat-Sheet</a> for a quick reference guide.
                </p>
                <p>
                    To test your markdown, use our <a href="/#/live-editor" target="_blank" rel="noopener noreferrer">Live Editor</a>.
                </p>
                {/*<p>
                    Watch our <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer">
                    Markdown Tutorial Video</a> on YouTube to get started!
                </p>*/}
                <p>
                    Visit our <Link to="/documentation">Documentation</Link> for more detailed information, 
                    or <Link to="/report-a-bug">Report a Bug</Link>/<a href="https://github.com/jonnyjackson26/learn-markdown-game/issues" target="_blank" rel="noopener noreferrer">Open Github issue</a> if you encounter any unexpected behavior.
                </p>
            </div>
        </>
    );
};

export default About;
