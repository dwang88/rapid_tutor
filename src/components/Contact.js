// src/components/Contact.js

import React from 'react';
import Navbar from './Navbar';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries or questions.</p>
        <form className="contact-form">
          <label>
            Name: 
            <input type="text" name="name" />
          </label>
          <label>
            Email: 
            <input type="email" name="email" />
          </label>
          <label>
            Message: 
            <textarea name="message" rows="5" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
