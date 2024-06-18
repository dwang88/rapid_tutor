import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, tutor }) => {
  if (!show || !tutor) {
    return null;
  }

  const openZoomMeetingCreation = () => {
    // Replace this URL with the actual Zoom meeting creation URL
    window.open('https://zoom.us/meeting/schedule', '_blank');
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={handleClose}>×</button>
        <h2>{tutor.name + " • $" + tutor.rate + "/hr"}</h2>
        <p><strong>Subjects:</strong> {tutor.subject}</p>
        <p><strong>Rate:</strong> ${tutor.rate}/hr</p>
        <p><strong>Experience:</strong> {tutor.exp}</p>
        <p><strong>Email:</strong> {tutor.email}</p>
        <p><strong>Education:</strong> {tutor.education}</p>
        <p><strong>Location:</strong> {tutor.location}</p>
        
        <p><strong>Description:</strong> {tutor.description}</p>
        <button
          className="form-button"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdFbNAu6RnNnvirSxFrETVliiulseui_EyOychP8cDU0KYWTA/viewform?embedded=true', '_blank')}
        >
          Book Tutor
        </button>
        <button
          className="zoom-button"
          onClick={() => window.open('INSERT ZOOM LINK HERE', '_blank')}
        >
          Create Zoom Meeting
        </button>
      </div>
    </div>
  );
};

export default Modal;
