import React from 'react';
import './Documentation.css';
import Navbar from '../../../components/Navbar/Navbar';


const Documentation = () => {
    return (
        <>
            <Navbar />
            <div className="documentation-container">
                <h1>Documentation</h1>
                <p>Welcome to the Markdown Learning Game documentation! Here you can find detailed guides on using our tools:</p>
                <ul>
                    <li><strong>Markdown Cheat-Sheet:</strong> Quick reference guide for Markdown syntax.</li>
                    <li><strong>Live Editor:</strong> Test and preview your Markdown in real-time.</li>
                    <li><strong>Interactive Tutorials:</strong> Learn Markdown interactively step by step.</li>
                </ul>
                <p>For additional support, feel free to <a href="/#/report-a-bug">report any issues</a>.</p>
            </div>
        </>
    );
};

export default Documentation;
