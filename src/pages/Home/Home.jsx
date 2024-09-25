import React from 'react';
import './Home.css'
import Button from '../../components/Button/Button';
import MarkdownGame from '../MarkdownGame/MarkdownGame';
import Navbar from '../../components/Button/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <MarkdownGame />
        </>
    );
};

export default Home;