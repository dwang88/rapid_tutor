// src/components/TutorList.js

import React, { useState } from 'react';
import './TutorList.css';
import Navbar from './Navbar';
import Modal from './Modal';

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
      image: 'https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg',
      description: 'Kevin Chau is an experienced tutor in Computer Science, specializing in algorithms, data structures, and web development.',
    },
    {
      _id: '2',
      name: 'Jane Smith',
      subject: 'Mathematics',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      rate: 35,
      location: 'Los Angeles, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'Jane Smith has a deep understanding of Mathematics and loves helping students conquer calculus and algebra.',
    },
    {
      _id: '3',
      name: 'David Wang',
      subject: 'Linear Algebra',
      email: 'david.wang@example.com',
      phone: '987-654-3210',
      rate: 35,
      location: 'Los Angeles, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'David Wang is an expert in Linear Algebra with years of experience teaching students at the university level.',
    },
    {
      _id: '4',
      name: 'Emily Johnson',
      subject: 'S.A.T & A.C.T',
      email: 'emily.johnson@example.com',
      phone: '987-654-3210',
      rate: 60,
      location: 'Los Angeles, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'Emily Johnson specializes in test preparation for SAT and ACT, helping students achieve their best scores.',
    },
  ];

  const [selectedTutor, setSelectedTutor] = useState(null);

  const handleCardClick = (tutor) => {
    setSelectedTutor(tutor);
  };

  const handleCloseModal = () => {
    setSelectedTutor(null);
  };

  return (
    <div className="tutor-list">
      <Navbar />
      <h1>Available Tutors</h1>
      {tutors.length > 0 ? (
        <div className="tutors">
          {tutors.map((tutor) => (
            <div className="tutor-card" key={tutor._id} onClick={() => handleCardClick(tutor)}>
              <div className="tutor-content">
                <h2>{tutor.name}</h2>
                <p><strong>Subject:</strong> {tutor.subject}</p>
                <p><strong>Rate:</strong> ${tutor.rate}/hr</p>
                <p><strong>Location:</strong> {tutor.location}</p>
                <p><strong>About:</strong> {tutor.description}</p>
                <button
                  className="form-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdFbNAu6RnNnvirSxFrETVliiulseui_EyOychP8cDU0KYWTA/viewform?embedded=true', '_blank');
                  }}
                >
                  Book Tutor
                </button>
              </div>
              <img src={tutor.image} alt={`${tutor.name}'s profile`} className="tutor-image" />
            </div>
          ))}
        </div>
      ) : (
        <p>No tutors available</p>
      )}
      <Modal show={!!selectedTutor} handleClose={handleCloseModal} tutor={selectedTutor} />
    </div>
  );
};

export default TutorList;
