import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { useTheme } from "../../context/ThemeContext";
import Editor from '../../components/Editor/Editor';

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`home-container`}>
      <Navbar />
      <div className="editor-wrapper">
        <Editor prompt={`# 🚀 **Welcome to Learn Markdown Game!**

## *Transform plain text into beautifully formatted content*

Here's why **Markdown** is _amazing_:

1. **Simple syntax** that's easy to remember
2. **Lightning fast** way to format text without taking your hands off the keyboard
3. **Universal support** across platforms, from GitHub to Reddit

---

### ✨ Look what you can do with Markdown:

| Feature | Example | Result |
|---------|---------|--------|
| Headings | # Heading | <h1>Heading</h1> |
| Emphasis | **Bold** and *Italic* | **Bold** and *Italic* |
| Lists | - Item 1\\n- Item 2 | • Item 1<br>• Item 2 |

> "Markdown is like a secret superpower for creating beautiful documents with minimal effort."

Want to share code? No problem!
\`\`\`javascript
function hello() {
  console.log("Markdown is awesome!");
}
\`\`\`

You can even create:
- [x] Task lists
- [x] [Links to anything](https://example.com)
- [x] Images: ![Markdown Logo](https://markdown-here.com/img/icon256.png)

### 🎮 Ready to master Markdown through play?
`}/>
      </div>
      <div className="centered-cta">
        <Link to="/tutorial" className="cta-button">Play</Link>
      </div>
    </div>
  );
};

export default Home;
