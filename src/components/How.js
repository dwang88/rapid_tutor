// src/components/How.js

import React from 'react';
import Slider from 'react-slick';
import Navbar from './Navbar';
import Footer from './Footer';
import './How.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const How = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="how">
      <Navbar />
      <div className="how-content">
        <div className="how-info">
          <div className="works">
            <Slider {...settings}>
              <div className="slide">
                <h3>1. Find Your Perfect Match</h3>
                <p>Browse our extensive list of qualified subject tutors to find the ideal fit for your studying needs.</p>
                <img className="workimg" src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-tutoring-clipart-the-man-is-talking-to-the-boy-and-teaches-vector-png-image_6820860.png" alt="Find your perfect match" />
              </div>
              <div className="slide">
                <h3>2. Schedule a Session Instantly</h3>
                <p>Once you've found your tutor, simply book your session directly on our platform using a provided secure service checkout.</p>
                <img className="workimg" src="https://pngimg.com/d/alarm_clock_PNG25.png" alt="Schedule a session" />
              </div>
              <div className="slide">
                <h3>3. Get Instant Help</h3>
                <p>Connect with your tutor virtually via Zoom and get the academic support you need, right away.</p>
                <img className="workimg" src="https://png.pngtree.com/png-vector/20221224/ourmid/pngtree-helping-hand-support-assistance-concept-png-image_6535836.png" alt="Get instant help" />
              </div>
              <div className="slide">
                <h3>Note: After Payment</h3>
                <p>After your payment, you will be redirected to a private zoom link. Join the meeting & you will be directed to the tutor you selected.</p>
                <img className="workimg" src="https://www.bentley.edu/sites/default/files/inline-images/Zoom-Logo.png" alt="Get instant help" />
              </div>
              <div className="slide">
                <h3>Note: Tutor Hours</h3>
                <p>While joining the Zoom meeting, please put your full name as your Zoom username. This ensures that you are matched with the correct tutor.</p>
                <img className="workimg" src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-badge-or-register-vector-isolated-sticker-hello-my-name-is-in-png-image_4892578.png" alt="Get instant help" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', color: '#222' }} // Ensure the arrow stays within the viewport
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', color: '#222'}} // Ensure the arrow stays within the viewport
      onClick={onClick}
    />
  );
};

export default How;
