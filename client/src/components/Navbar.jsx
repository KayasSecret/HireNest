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

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Logo */}
        <a to="/" className="logo">
          Hire<span>Nest</span>
        </a>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/home" className="link">
            Home
          </Link>
          <Link to="/services" className="menu link">
            Services
            <IoMdArrowDropdown />
            <ul className="dropdown">
              <Link to="/codeClinic" className="submenu">
                Code Clinic
              </Link>
              <Link to="/hireDesk" className="submenu">
                Hire Desk
              </Link>
              <Link to="/visionVertex" className="submenu">
                Vision Vertex
              </Link>
            </ul>
          </Link>

          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </ul>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="search" placeholder="Search" />
          <FaSearch className="searchIcon" />
        </div>

        <div className="flex">
          <button className="btn loginBtn">LogIn</button>
          <button className="btn signupBtn">SignUp</button>
        </div>

        {/* Hamburger Icon */}
      </div>
    </nav>
  );
};

export default Navbar;
