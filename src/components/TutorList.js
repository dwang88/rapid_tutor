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
      description: 'I specialize in helping students understand computer science concepts and improve their coding skills.'
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
      description: 'Experienced math tutor with a focus on algebra, geometry, and calculus.'
    },
    {
      _id: '3',
      name: 'David Wang',
      subject: 'Linear Algebra',
      email: 'david.wang@example.com',
      phone: '987-654-3211',
      rate: 45,
      location: 'San Francisco, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'Expert in linear algebra and advanced mathematics topics.'
    },
    {
      _id: '4',
      name: 'Anna Lee',
      subject: 'S.A.T & A.C.T',
      email: 'anna.lee@example.com',
      phone: '987-654-3212',
      rate: 60,
      location: 'Chicago, IL',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'Specialized in SAT and ACT preparation with a track record of improving student scores.'
    },
    // Add more tutor objects as needed
  ];

  const [sortOrder, setSortOrder] = useState('default');
  const [selectedTutor, setSelectedTutor] = useState(null);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedTutors = [...tutors].sort((a, b) => {
    if (sortOrder === 'lowest') {
      return a.rate - b.rate;
    } else if (sortOrder === 'highest') {
      return b.rate - a.rate;
    } else {
      return 0;
    }
  });

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
      <div className="sort-filter">
        <label>
          Sort by Price:
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="default">Default</option>
            <option value="lowest">Lowest to Highest</option>
            <option value="highest">Highest to Lowest</option>
          </select>
        </label>
      </div>
      {sortedTutors.length > 0 ? (
        <div className="tutors">
          {sortedTutors.map((tutor) => (
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
                    e.stopPropagation();
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
