import React, { useState } from 'react';
import './ReportABug.css';
import Navbar from '../../../components/Navbar/Navbar';
import emailjs from '@emailjs/browser';

const ReportABug = () => {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'learn-markdown-game-serv';
        const templateID = 'learn-markdown-game-tmpl';
        const publicKey = 'RvRZJ8_KLtjGvgQgy';

        const templateParams = {
            user_email: email,
            description: description,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                setMessage({ text: 'Thank you for reporting the bug!', type: 'success' });
                setEmail('');
                setDescription('');
            })
            .catch(() => {
                setMessage({ text: 'Oops! Something went wrong. Please try again.', type: 'error' });
            });
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
                {message.text && (
                    <p className={message.type === 'success' ? 'success-message' : 'error-message'}>
                        {message.text}
                    </p>
                )}
            </div>
        </>
    );
};

export default ReportABug;
