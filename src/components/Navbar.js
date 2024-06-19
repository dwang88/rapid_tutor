// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/"><div className="navbar-brand">Rapid Tutor</div></Link>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/tutors" onClick={toggleMenu}>Find Tutors</Link>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        <Link className="howitworksbold" to="/how" onClick={toggleMenu}>How It Works</Link>
        <button className="close-menu" onClick={toggleMenu}>×</button>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
