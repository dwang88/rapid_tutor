import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from 'react-slick';
import './Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

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

      <div className="how">
        <div className="how-content">
          <div className="how-info">
            <h2 className='worksh2'>How It Works</h2>
            <div className="works">
              <Slider {...settings}>
                <div className="slide">
                  <h3>1. Find your perfect match</h3>
                  <p>Browse our extensive list of qualified tutors to find the ideal fit for your needs.</p>
                  <img className="workimg" src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-tutoring-clipart-the-man-is-talking-to-the-boy-and-teaches-vector-png-image_6820860.png" alt="Find your perfect match" />
                </div>
                <div className="slide">
                  <h3>2. Schedule a session instantly</h3>
                  <p>Once you've found your tutor, simply book your session directly on our platform.</p>
                  <img className="workimg" src="https://pngimg.com/d/alarm_clock_PNG25.png" alt="Schedule a session" />
                </div>
                <div className="slide">
                  <h3>3. Get instant help</h3>
                  <p>Connect with your tutor virtually and get the academic support you need, right away.</p>
                  <img className="workimg" src="https://png.pngtree.com/png-vector/20221224/ourmid/pngtree-helping-hand-support-assistance-concept-png-image_6535836.png" alt="Get instant help" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      <div className="additional-section">
        <h2>We Unlock Potential!</h2>
        <p>We offer affordable, top-notch tutoring to help students crush their academic goals. Through awesome tech and a welcoming environment, we personalize learning for everyone. Our goal? Empower YOU to shine in school!</p>
      </div>

      <Footer />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default Home;
