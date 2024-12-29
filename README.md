This is the learn markdown game
Its fun like flex box froggy
and helps you learn markdown
Has 3 splits (one for the example that youre trying to get to) (one for you to type) (and one for your code to execute)


#todo:
make vertical alginment centered in navbar
add about page and what is markdown page and cheat sheet and live editor
make the markdowngame 3 components horziontally resizable
- can add levels where it gives you certain input and you need to stylize. like use the starter that i orignally had.

make certificate
make gifs (https://online-video-cutter.com/crop-video), (https://ezgif.com/video-to-gif) be sure youre zoomed in 
make mobile feiendly
have a challenges page where you edit plain text to make it look like a styled md doc



# Todo:
when i click out of the mobile navbar dropdown, make it disapear

add a hint button that shows a gif?

make text wrap in the bottom bar

# TODO:
great! sometimes when i change the theme on one themetoggler but not the other and then make the other appear (by resizing screen), theyre out of sync. how to keep my theme togglers synced up?
ChatGPT said:
ChatGPT
To keep your theme togglers synced up, you need to make sure that both theme togglers (one in the main navbar and one in the dropdown) share the same state for the theme. This will ensure that when the theme is changed in one component, the other component will automatically reflect the same theme.

You can achieve this by lifting the state up to a common ancestor, such as the App component, and passing the theme state down to both Navbar and NavbarDropdown components as props. This way, both theme togglers will always use the same theme state.

Here's how to modify your code to keep the theme togglers synced:

Step 1: Lift the Theme State Up to App.js (or the Parent Component)
First, move the theme state management from the ThemeToggle component to a common parent component (like App.js).

App.js (or the parent component):
javascript
Copy code
import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css"; // Your global styles

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = `${newTheme}-mode`;
  };

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {/* Other components */}
    </div>
  );
};

export default App;
Step 2: Update Navbar.js to Use the Theme from Props
Now, modify the Navbar component to receive the theme and toggle function as props:

Navbar.js:
javascript
Copy code
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";
import LevelSelector from "./LevelSelector";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, toggleTheme, level, setLevel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the state
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        learn-markdown-game
      </Link>

      <LevelSelector level={level} setLevel={setLevel} />

      <div className="navbar-right">
        <NavbarLinks />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="navbar-hamburger-icon">&#9776;</span>
      </div>

      {/* Dropdown menu for mobile */}
      <div className={`navbar-dropdown ${isMenuOpen ? "open" : ""}`}>
        <NavbarLinks />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
Step 3: Update ThemeToggle.js to Use Props
Finally, modify the ThemeToggle component to receive the theme and toggleTheme functions as props, so that it works with the shared state:

ThemeToggle.js:
javascript
Copy code
import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? (
        <i className="fas fa-sun toggle-icon"></i>
      ) : (
        <i className="fas fa-moon toggle-icon"></i>
      )}
    </div>
  );
};

export default ThemeToggle;
Explanation of Changes:
Lifted state: The theme state and toggleTheme function are moved to the App component, which serves as the parent for both Navbar and ThemeToggle components.
Props for synchronization: The theme and toggleTheme are passed as props to both the main navbar (Navbar) and dropdown (NavbarDropdown), ensuring they are always in sync.
Unified toggle mechanism: Both togglers now use the same theme state and call the same toggleTheme function, so changing the theme in one component will automatically update the other.
With this setup, the theme togglers will always stay in sync, regardless of screen size or which toggle is pressed first.