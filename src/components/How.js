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
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="how">
      <Navbar />
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

export default How;
