// src/components/About.js

import React from 'react';
import Navbar from './Navbar';
import './About.css';

const About = () => {
  return (
    <div className="about">
    <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <p>Learn more about our mission and values.</p>
        <div className="about-info">
          <h2>Our Mission</h2>
          <p>Our mission is to provide high-quality tutoring services to help students achieve their academic goals.</p>
          <h2>Our Values</h2>
          <ul>
            <li>Commitment to Excellence</li>
            <li>Personalized Learning</li>
            <li>Integrity and Transparency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
