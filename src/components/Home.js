import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <div className="additional-section">
        <h2>We Unlock Potential!</h2>
        <p>We offer affordable, top-notch tutoring to help students crush their academic goals. Through awesome tech and a welcoming environment, we personalize learning for everyone. Our goal? Empower YOU to shine in school!</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L80,160C160,160,320,160,480,144C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <Footer />
    </div>
  );
};

export default Home;
