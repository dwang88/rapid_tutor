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
  
  const universityImages = [
    'https://upload.wikimedia.org/wikipedia/commons/1/18/UCSD_Seal.png', // Replace these with the actual image URLs or paths
    'https://upload.wikimedia.org/wikipedia/commons/0/03/Cal_logo.png',
    'https://cdn.freelogovectors.net/wp-content/uploads/2023/06/university-of_illinois_at_urbana_champaign_logo-freelogovectors.net_.png',
    'https://i.pinimg.com/originals/5b/49/f8/5b49f80da12e639ff39eaadb28c3ddaa.png',
    'https://cdn.bleacherreport.net/images/team_logos/328x328/ucla_football.png',
    'https://upload.wikimedia.org/wikipedia/commons/c/cd/University_of_Chicago_Coat_of_arms.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/University_of_California%2C_Irvine_logo.svg/1280px-University_of_California%2C_Irvine_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png',
    'https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png',
    'https://seeklogo.com/images/U/university-of-michigan-logo-55B0FE825E-seeklogo.com.png'
  ];

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

      <div className='addslider'>
      <div className="additional-section">
        <h2 className='used'>Used by Students at Top Universities</h2>
        <div className="university-slider">
          {universityImages.concat(universityImages).map((src, index) => (
            <div key={index} className="university-slide">
              <img src={src} alt={`University ${index + 1}`} />
            </div>
          ))}
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
