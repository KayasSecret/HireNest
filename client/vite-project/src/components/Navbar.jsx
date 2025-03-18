import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../../../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          ShopEase
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link className="text-white hover:text-gray-200 transition duration-300" to="/">Home</Link>
          <Link className="text-white hover:text-gray-200 transition duration-300" to="/shop">Shop</Link>
          <Link className="text-white hover:text-gray-200 transition duration-300" to="/about">About</Link>
          <Link className="text-white hover:text-gray-200 transition duration-300" to="/contact">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-white text-xl cursor-pointer hover:scale-110 transition duration-300" />
          <FaUser className="text-white text-xl cursor-pointer hover:scale-110 transition duration-300" />
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden flex flex-col items-center bg-blue-500 py-4 space-y-4 shadow-lg"
            >
                <Link className="text-white text-lg" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link className="text-white text-lg" to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
                <Link className="text-white text-lg" to="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link className="text-white text-lg" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </motion.div>
        )}
    </nav>
  );
};

export default Navbar;
