import React from "react";
import "./NavbarLinks.css";
import { Link, useLocation } from "react-router-dom";

const NavbarLinks = () => {
  const location = useLocation(); // Get the current location
  return (
    <div className="navbar-links">
        {location.pathname !== '/tutorial' && (
          <Link to="/tutorial">Tutorial</Link>
        )}
        <Link to="/about">About</Link>
        <Link to="/cheat-sheet">Cheat Sheet</Link>
        <Link to="/live-editor">Live Editor</Link>
        {/*<Link to="/what-is-markdown">What is Markdown?</Link>*/}
      </div>
      
  );
};

export default NavbarLinks;


