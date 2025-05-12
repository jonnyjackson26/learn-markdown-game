import React, { useState } from "react";
import "./Tutorial.css";
import MarkdownGame from "../MarkdownGame/MarkdownGame";
import Navbar from "../../components/Navbar/Navbar";
import BottomBar from "../../components/BottomBar/BottomBar";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useLevel } from "../../context/LevelContext"; 

const Tutorial = () => {
  const [markdown, setMarkdown] = useState(""); 
  const { level, setLevel } = useLevel(); 

  return (
    <div className="tutorial-container">
      <Navbar level={level} setLevel={setLevel}/>
      <ProgressBar level={level} />
      <div className="markdown-game">
        <MarkdownGame markdown={markdown} setMarkdown={setMarkdown} />
      </div>
      <BottomBar setLevel={setLevel} markdown={markdown} setMarkdown={setMarkdown}/>
    </div>
  );
};

export default Tutorial; 