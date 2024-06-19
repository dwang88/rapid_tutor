import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/tutors">Tutors</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Rapid Tutor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
