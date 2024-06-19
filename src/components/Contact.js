import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries or questions.</p>
        {/* Adjusted iframe width for responsiveness */}
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScLu18gsk7vktuc5S9htDhg0O77YFySqCVNpbVNe-fzYlwkfw/viewform?embedded=true"
          width="100%"
          height="1000" /* Adjusted height to fit content */
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Contact Form"
          className='iframecontact'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
