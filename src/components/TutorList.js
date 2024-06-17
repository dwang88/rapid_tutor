import React from 'react';
import './TutorList.css';

const TutorList = () => {
  const tutors = [
    {
      _id: '1',
      name: 'Kevin Chau',
      subject: 'Computer Science',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      rate: 40,
      location: 'New York, NY',
      image: 'https://via.placeholder.com/150', // Replace with the actual image URL
    },
    {
      _id: '2',
      name: 'Jane Smith',
      subject: 'Mathematics',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      rate: 35,
      location: 'Los Angeles, CA',
      image: 'https://via.placeholder.com/150', // Replace with the actual image URL
    },
    // Add more tutor objects as needed
  ];

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
