import React from "react";
import "./NavbarLinks.css";
import { Link, useLocation } from "react-router-dom";

const NavbarLinks = () => {
  const location = useLocation(); // Get the current location
  return (
    <div className="navbar-links">
        {location.pathname !== '/tutorial' && (
          <Link to="/tutorial" className={location.pathname === '/tutorial' ? 'active' : ''}>Tutorial</Link>
        )}
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/cheat-sheet" className={location.pathname === '/cheat-sheet' ? 'active' : ''}>Cheat Sheet</Link>
        <Link to="/live-editor" className={location.pathname === '/live-editor' ? 'active' : ''}>Live Editor</Link>
        {/*<Link to="/what-is-markdown">What is Markdown?</Link>*/}
      </div>
      
  );
};

export default NavbarLinks;


