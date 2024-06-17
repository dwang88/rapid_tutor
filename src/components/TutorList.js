import React, { useEffect, useState } from 'react';
import './TutorList.css';

const TutorList = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tutors')
      .then((response) => response.json())
      .then((data) => setTutors(data))
      .catch((error) => console.error('Error fetching tutors:', error));
  }, []);

  return (
    <div className="tutor-list">
      <h1>Tutor List</h1>
      {tutors.length > 0 ? (
        <div className="tutors">
          {tutors.map((tutor) => (
            <div className="tutor-card" key={tutor._id}>
              <div className="tutor-content">
                <h2>{tutor.name}</h2>
                <p><strong>Subject:</strong> {tutor.subject}</p>
                <p><strong>Rate:</strong> ${tutor.rate}/hr</p>
                <p><strong>Email:</strong> {tutor.email}</p>
                <p><strong>Phone:</strong> {tutor.phone}</p>
                <p><strong>Location:</strong> {tutor.location}</p>
              </div>
              <img src={tutor.image} alt={`${tutor.name}'s profile`} className="tutor-image" />
            </div>
          ))}
        </div>
      ) : (
        <p>No tutors available</p>
      )}
    </div>
  );
};

export default TutorList;
