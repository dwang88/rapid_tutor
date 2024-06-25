import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-content">
        <h1 className='contactusheader'>Contact Us</h1>
        <p>For immediate assistance, please check out our Frequently Asked Questions.</p>
        <p>Feel free to reach out to us for any inquiries or questions at davidwang1089@gmail.com.</p>
        {/* Adjusted iframe width for responsiveness */}
      </div>
    </div>
  );
};

export default Contact;
