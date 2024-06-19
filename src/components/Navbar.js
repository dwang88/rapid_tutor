import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">
        <div className="navbar-brand">Rapid Tutor</div>
      </Link>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/tutors" onClick={toggleMenu}>Find Tutors</Link>
        <Link to="/faq" onClick={toggleMenu}>FAQ</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        <Link className="howitworksbold" to="/how" onClick={toggleMenu}>How It Works</Link>
        {isOpen && <span className="close-button" onClick={toggleMenu}>&times;</span>}
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <span className="close-button">&times;</span> : <span className="burger-menu">&#9776;</span>}
      </div>
    </nav>
  );
};

export default Navbar;
