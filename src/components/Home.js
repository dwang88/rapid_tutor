// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <Navbar />
      <div className="home-content">
        <div className="text-content">
          <h1>Affordable, Personalized Private Tutoring</h1>
          <p>Find the best tutors for your needs and enhance your learning experience.</p>
          <div className="buttons">
            <Link to="/tutors" className="btn">Find Tutors</Link>
          </div>
        </div>
        <div className="image-content">
          <img src="https://images.pexels.com/photos/8121106/pexels-photo-8121106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tutoring illustration" />
        </div>
      </div>
    </div>
  );
};

export default Home;
