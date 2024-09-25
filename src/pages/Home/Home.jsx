import React from 'react';
import './Home.css'
import Button from '../../components/Button/Button';
import MarkdownGame from '../MarkdownGame/MarkdownGame';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Button text="About Us" to="/about" />
            <MarkdownGame />
        </>
    );
};

export default Home;