import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ show, handleClose, tutor }) => {
  const paypalRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (show && tutor && paypalRef.current) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `Tutoring session with ${tutor.name}`,
                amount: {
                  value: tutor.rate
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Transaction completed by ' + details.payer.name.given_name);
            const meetingId = '83582226724'; // Replace with your actual Zoom meeting ID
            navigate(`/zoom/${meetingId}`);
          });
        }
      }).render(paypalRef.current);
    }
  }, [show, tutor, navigate]);

  if (!show || !tutor) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={handleClose}>×</button>
        <h2>{tutor.name + " • $" + tutor.rate + "/hr"}</h2>
        <p><strong>Subjects:</strong> {tutor.subject}</p>
        <p><strong>Rate:</strong> ${tutor.rate}/hr</p>
        <p><strong>Experience:</strong> {tutor.exp}</p>
        <p><strong>Education:</strong> {tutor.education}</p>
        <p><strong>Location:</strong> {tutor.location}</p>
        <p><strong>Description:</strong> {tutor.description}</p>
        <h3 className='modaltitle'>Book Tutor:</h3>
        <div ref={paypalRef} className="paypal-button-container"></div>
        <button
          className="form-button"
          onClick={() => window.open('https://rapidtutor.org/#/how', '_blank')}
        >
          How It Works
        </button>
      </div>
    </div>
  );
};

export default Modal;
