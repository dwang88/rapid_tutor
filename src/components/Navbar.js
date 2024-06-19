// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">
        <div className="navbar-brand">Rapid Tutor</div>
      </Link>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/tutors" onClick={toggleMenu}>Find Tutors</Link>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        <Link className="howitworksbold" to="/how" onClick={toggleMenu}>How It Works</Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <span className="close-button">&times;</span> : <span className="burger-menu">&#9776;</span>}
      </div>
    </nav>
  );
};

export default Navbar;
