import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure CSS is correctly linked

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>☰</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
