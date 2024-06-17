// src/components/Modal.js

import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, tutor }) => {
  if (!show || !tutor) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={handleClose}>&times;</button>
        <h2>{tutor.name}</h2>
        <p><strong>Subject:</strong> {tutor.subject}</p>
        <p><strong>Rate:</strong> ${tutor.rate}/hr</p>
        <p><strong>Email:</strong> {tutor.email}</p>
        <p><strong>Phone:</strong> {tutor.phone}</p>
        <p><strong>Location:</strong> {tutor.location}</p>
        <p><strong>Description:</strong> {tutor.description}</p>
        <button
          className="form-button"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdFbNAu6RnNnvirSxFrETVliiulseui_EyOychP8cDU0KYWTA/viewform?embedded=true', '_blank')}
        >
          Book Tutor
        </button>
      </div>
    </div>
  );
};

export default Modal;
