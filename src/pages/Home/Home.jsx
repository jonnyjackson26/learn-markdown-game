import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`home-container`}>
      <Navbar />
      <div className="welcome-container">
        <div className="welcome-content">
          <h1>Welcome to Learn Markdown Game!</h1>
          <p>
            An interactive tutorial to teach Markdown, because it's better to learn by <em>doing</em> than by <em>watching</em>.
          </p>
          <p>
            Markdown is commonly used in <code>README.md</code>, Jupyter notebooks, and various other places to easily format rich text.
          </p>
          <p>
            There are 30 levels to this tutorial, and by the end you'll be a master of Markdown!
          </p>
          <p>
            Throughout this tutorial, you'll type text in the editor to see it rendered in real-time. Your goal is to recreate what's shown in the example.
          </p>
          <div className="cta-button-container">
            <Link to="/tutorial" className="cta-button">Play Game</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
