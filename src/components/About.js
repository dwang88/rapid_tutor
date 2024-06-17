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
        <div className="about-info">
          <h2>Who We Are</h2>
          <div className="aboutusimg">
          <img src="https://media.discordapp.net/attachments/717217667500736534/1252178090243784827/1252178022191202396remix-1718612918450.png?ex=66714539&is=666ff3b9&hm=3515c7f46bd2b93ceb703abc4954c0010246f5c8a02a4cb4346873b03db82802&=&format=webp&quality=lossless&width=794&height=1058"></img>
          <img src=""></img>
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
    </div>
  );
};

export default About;
