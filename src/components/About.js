// src/components/About.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css';

const About = () => {
  return (
    <div className="about">
    <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <div className="about-info">
          <div className="aboutusimg">
          <img src="https://i.imgur.com/6rWjnfx.jpg?1"></img>
          <img src=""></img>
          <h2>Who We Are</h2>
          </div>
          <p>
          Rapid Tutor was founded by two college students who firsthand experienced 
          the prohibitive costs associated with private tutoring. Driven by their belief
          that education should be accessible to all, they created Rapid Tutor to democratize 
          access to quality education. Our platform empowers learners from all backgrounds 
          to access personalized tutoring and educational resources that were once out of reach.
          </p>
          <h2>Our Mission</h2>
          <p>Our mission is to provide affordable, high-quality tutoring services to help
          students achieve their academic goals. We are dedicated to fostering an inclusive
          learning environment, leveraging innovative technology to deliver personalized 
          education, and continuously improving our platform to meet the diverse needs of 
          our learners. By prioritizing accessibility and excellence, we strive to empower 
          every student to reach their full potential and succeed academically.</p>
          <h2>Our Values</h2>
          <ul>
            <li>Afforable 1-on-1 Tutoring</li>
            <li>Commitment to Excellence</li>
            <li>Personalized Learning</li>
            <li>Integrity and Transparency</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
