import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <a to="/" className="logo">
          Hire<span>Nest</span>
        </a>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="search" placeholder="Search" />
          <FaSearch className="searchIcon" />
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/home" className="link" >Home</Link>
          <Link to="/services" className="menu link" onClick={toggleDropDown} >
            Services
            <IoMdArrowDropdown />
            <ul className={`dropdown ${dropDown ? "show" : ""}`}>
              <Link to="/codeClinic" className="submenu">Code Clinic</Link>
              <Link to="/hireDesk" className="submenu">Hire Desk</Link>
              <Link to="/visionVertex" className="submenu">Vision Vertex</Link>
            </ul>
          </Link>

          <Link to="/about" className="link">About</Link>
          <Link to="/contact" className="link">Contact</Link>
          <button className="login-btn">Login</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
