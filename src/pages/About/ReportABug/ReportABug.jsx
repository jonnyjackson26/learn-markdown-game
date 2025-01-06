import React, { useState } from 'react';
import './ReportABug.css';
import Navbar from '../../../components/Navbar/Navbar';

const ReportABug = () => {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:your-email@example.com?subject=Bug Report&body=Description: ${encodeURIComponent(description)}%0D%0AEmail: ${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;
        setMessage('Thank you for reporting the bug!');
        setEmail('');
        setDescription('');
    };

    return (
        <>
            <Navbar />
            <div className="report-bug-container">
                <h1>Report a Bug</h1>
                <p>If you encounter any issues, please fill out the form below to report them.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Your Email (optional):</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />

                    <label htmlFor="description">Bug Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the bug"
                        required
                    ></textarea>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
                {message && <p className="success-message">{message}</p>}
            </div>
        </>
    );
};

export default ReportABug;
