import React, { useState, useEffect, useRef } from 'react';
import './TutorList.css';
import Navbar from './Navbar';
import Modal from './Modal';
import Footer from './Footer';

const TutorList = () => {
  const tutors = [
    {
      _id: '0',
      name: 'Vanessa Perianes',
      subject: 'Calculus, Algebra, Trigonometry, Discrete Math, & Physics',
      email: 'john.doe@example.com',
      education: 'Masters in Applied Physics',
      rate: 25,
      exp: '8 years',
      location: 'Online via Zoom',
      image: 'https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg',
      description: "I graduated with a Masters in Applied Physics and I have been an instructor since 2015. I'm able to help with Algebra, Trigonometry, Discrete Math, Calculus, Physics, & Geology. My goal is to ensure students be able to understand lessons easily at the end of our session and to enjoy learning with me.",
      availability: [
        { day: 'Monday', start: '00:00', end: '23:59' },
        { day: 'Tuesday', start: '00:00', end: '23:59' }
      ]
    },
    {
      _id: '1',
      name: 'Honey Taleon',
      subject: 'English, Writing, Reading, ',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      rate: 20,
      exp: '3 years',
      location: 'Online via Zoom',
      image: 'https://i.imgur.com/uXuR6wu.png',
      description: "I'm a passionate English language teacher with a Bachelor's in Secondary Education (English) and years of experience in the classroom. I'm eager to share my expertise and help you reach your learning goals!",
      availability: [
        { day: 'Monday', start: '09:00', end: '17:00' },
        { day: 'Tuesday', start: '10:00', end: '23:00' },
        { day: 'Wednesday', start: '09:00', end: '17:00' },
        { day: 'Thursday', start: '10:00', end: '23:00' },
        { day: 'Friday', start: '09:00', end: '17:00' },
        { day: 'Saturday', start: '10:00', end: '23:00' },
        { day: 'Sunday', start: '10:00', end: '23:00' }

      ]
    },
    {
      _id: '2',
      name: 'Jane Smith',
      subject: 'Mathematics',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      rate: 0.01,
      exp: '2 years',
      location: 'Los Angeles, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'Experienced math tutor with a focus on algebra, geometry, and calculus.',
      availability: [
        { day: 'Tuesday', start: '02:21', end: '23:59' },
        { day: 'Thursday', start: '13:00', end: '18:00' }
      ]
    },
    {
      _id: '3',
      name: 'David Wang',
      subject: 'Linear Algebra',
      email: 'david.wang@example.com',
      phone: '987-654-3211',
      rate: 0.01,
      exp: '2 years',
      location: 'San Francisco, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'Expert in linear algebra and advanced mathematics topics.',
      availability: [
        { day: 'Wednesday', start: '00:00', end: '17:00' },
        { day: 'Tuesday', start: '10:00', end: '23:59' }
      ]
    },
    {
      _id: '4',
      name: 'Anna Lee',
      subject: 'S.A.T & A.C.T',
      email: 'anna.lee@example.com',
      phone: '987-654-3212',
      rate: 60,
      exp: '2 years',
      location: 'Chicago, IL',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'Specialized in SAT and ACT preparation with a track record of improving student scores.',
      availability: [
        { day: 'Monday', start: '14:00', end: '18:00' },
        { day: 'Tuesday', start: '09:00', end: '23:00' }
      ]
    }
  ];

  const [sortOrder, setSortOrder] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [availableTutors, setAvailableTutors] = useState([]);
  const [unavailableTutors, setUnavailableTutors] = useState([]);
  const paypalRef = useRef();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const isTutorAvailable = (availability) => {
    const now = new Date();
    const currentDay = now.toLocaleString('en-us', { weekday: 'long' });
    const currentTime = now.toTimeString().slice(0, 5);

    return availability.some(slot => {
      if (slot.day === currentDay) {
        return currentTime >= slot.start && currentTime <= slot.end;
      }
      return false;
    });
  };

  useEffect(() => {
    const filterTutors = () => {
      const available = [];
      const unavailable = [];
      tutors.forEach(tutor => {
        if (isTutorAvailable(tutor.availability)) {
          available.push(tutor);
        } else {
          unavailable.push(tutor);
        }
      });
      setAvailableTutors(available);
      setUnavailableTutors(unavailable);
    };

    filterTutors();
  }, []);

  useEffect(() => {
    if (selectedTutor && paypalRef.current) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `Tutoring session with ${selectedTutor.name}`,
                amount: {
                  value: selectedTutor.rate
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render(paypalRef.current);
    }
  }, [selectedTutor]);

  const filteredTutors = availableTutors.filter(tutor =>
    tutor.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTutors = filteredTutors.sort((a, b) => {
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
      <div className="controls">
        <div className="sort-filter">
          <label>
            Sort by Price:
            <select className='input' value={sortOrder} onChange={handleSortOrderChange}>
              <option className='droptext' value="default">Default</option>
              <option className='droptext' value="lowest">Lowest to Highest</option>
              <option className='droptext' value="highest">Highest to Lowest</option>
            </select>
          </label>
        </div>
        <div className="search-filter">
          <label>
            Search by Description:
            <input
              className='input'
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Enter subject, location, etc"
            />
          </label>
        </div>
      </div>
      {sortedTutors.length > 0 ? (
        <div className="tutors">
          {sortedTutors.map((tutor) => (
            <div className="tutor-card" key={tutor._id} onClick={() => handleCardClick(tutor)}>
              <div className="tutor-content">
                <h2>{tutor.name + " • $" + tutor.rate + "/hr"}</h2>
                <p><strong>Subjects:</strong> {tutor.subject}</p>
                <p><strong>Experience:</strong> {tutor.exp}</p>
                <p><strong>Location:</strong> {tutor.location}</p>
                <p><strong>About:</strong> {tutor.description}</p>
                <p><strong>Available:</strong> {tutor.availability.map(slot => (
                  <span key={`${slot.day}-${slot.start}`}>
                    {slot.day} {slot.start}-{slot.end}<br />
                  </span>
                ))}</p>
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
        <p className='notutors'>No tutors available</p>
      )}
      {unavailableTutors.length > 0 && (
        <>
          <h1>Unavailable Tutors</h1>
          <div className="tutors">
            {unavailableTutors.map((tutor) => (
              <div className="tutor-card unavailable" key={tutor._id}>
                <div className="tutor-content">
                  <h2>{tutor.name + " • $" + tutor.rate + "/hr"}</h2>
                  <p><strong>Subjects:</strong> {tutor.subject}</p>
                  <p><strong>About:</strong> {tutor.description}</p>
                  <p><strong>Available:</strong> {tutor.availability.map(slot => (
                    <span key={`${slot.day}-${slot.start}`}>
                      {slot.day} {slot.start}-{slot.end}<br />
                    </span>
                  ))}</p>
                  <button
                    className="form-button"
                    disabled
                  >
                    Book Tutor
                  </button>
                </div>
                <img src={tutor.image} alt={`${tutor.name}'s profile`} className="tutor-image" />
              </div>
            ))}
          </div>
        </>
      )}
      <Modal show={!!selectedTutor} handleClose={handleCloseModal} tutor={selectedTutor} />
      <Footer />
    </div>
  );
};

export default TutorList;
