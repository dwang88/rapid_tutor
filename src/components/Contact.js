// src/components/Contact.js

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
        {/* Replace the form with the embedded Google Form iframe */}
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScLu18gsk7vktuc5S9htDhg0O77YFySqCVNpbVNe-fzYlwkfw/viewform?embedded=true"
          width="640"
          height="1300"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
