import React, { useState } from "react";
import "./Home.css";
import MarkdownGame from "../MarkdownGame/MarkdownGame";
import Navbar from "../../components/Navbar/Navbar";
import BottomBar from "../../components/BottomBar/BottomBar";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useLevel } from "../../context/LevelContext"; // Import LevelContext hook

const Home = () => {
  const [markdown, setMarkdown] = useState(""); // Manage markdown state here
  const { level, setLevel } = useLevel(); // Access level and setLevel from context

  return (
    <div className="home-container">
      <Navbar level={level} setLevel={setLevel}/>
      <ProgressBar level={level} />
      <div className="markdown-game">
        <MarkdownGame markdown={markdown} setMarkdown={setMarkdown} /> {/* Pass markdown state */}
      </div>
      <BottomBar setLevel={setLevel} markdown={markdown} setMarkdown={setMarkdown}/>
    </div>
  );
};

export default Home;
