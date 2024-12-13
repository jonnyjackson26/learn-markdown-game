import React, { useState } from "react";
import "./Home.css";
import MarkdownGame from "../MarkdownGame/MarkdownGame";
import Navbar from "../../components/Navbar/Navbar";
import BottomBar from "../../components/BottomBar/BottomBar";
import ContinueButton from "../../components/ContinueButton/ContinueButton";
import { useLevel } from "../../context/LevelContext"; // Import LevelContext hook

const Home = () => {
  const [markdown, setMarkdown] = useState(""); // Manage markdown state here
  const { level, setLevel } = useLevel(); // Access level and setLevel from context

  return (
    <div className="home-container">
      <Navbar />
      <div className="markdown-game">
        <MarkdownGame markdown={markdown} setMarkdown={setMarkdown} /> {/* Pass markdown state */}
      </div>
      <ContinueButton
        markdown={markdown}
        setMarkdown={setMarkdown}
        level={level} // Pass level to ContinueButton
        setLevel={setLevel} // Pass setLevel to ContinueButton
      />
      <BottomBar />
    </div>
  );
};

export default Home;
