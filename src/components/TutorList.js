import React from 'react';
import './TutorList.css';
import Navbar from './Navbar';

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
      image: 'https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg', // Replace with the actual image URL
    },
    {
      _id: '2',
      name: 'Jane Smith',
      subject: 'Mathematics',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      rate: 35,
      location: 'Los Angeles, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg', // Replace with the actual image URL
    },
    {
      _id: '2',
      name: 'David Wang',
      subject: 'Linear Algebra',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      rate: 35,
      location: 'Los Angeles, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg', // Replace with the actual image URL
    },
    {
      _id: '2',
      name: 'Jane Smith',
      subject: 'S.A.T & A.C.T',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      rate: 60,
      location: 'Los Angeles, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg', // Replace with the actual image URL
    },
    // Add more tutor objects as needed
  ];

  return (
    <div className="tutor-list">
    <Navbar />
      <h1>Available Tutors</h1>
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
