// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-link"to="/"><div className="navbar-brand">Rapid Tutor</div></Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/tutors">Find Tutors</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/how">How It Works</Link>
      </div>
    </nav>
  );
};

export default Navbar;
