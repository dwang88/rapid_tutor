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
      subject: ' English, Writing, Reading',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      rate: 20,
      exp: '3 years',
      education: "Bachelor's Degree in English Education",
      location: 'Online via Zoom',
      image: 'https://i.imgur.com/uXuR6wu.png',
      description: "As a highly motivated English language instructor with a Bachelor's degree in Secondary English Education, I can help you achieve your writing goals.  My extensive classroom experience allows me to offer engaging and effective instruction tailored to your specific needs.  Let's work together to unlock your full potential as a writer and communicator.",
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
      name: 'Anna Wilkins',
      subject: 'SAT, ACT, College Essays, College Prep',
      email: 'anna.lee@example.com',
      phone: '987-654-3212',
      rate: 50,
      exp: '6 years',
      education: 'Masters in Applied Mathematics',
      location: 'Online via Zoom',
      image: 'https://www.care.com/s/d/aws/photo/1080X1080/92/46024792_t03Wzz746abHAqn4ixO7C769tVe6d010',
      description: "Hey there! I'm your one-stop shop for crushing college admissions.  I help students like you master the SAT and ACT, brainstorm and write killer college essays, and navigate the sometimes-confusing college prep process.  Let's work together to make your dream school a reality!",
      availability: [
        { day: 'Monday', start: '14:00', end: '18:00' },
        { day: 'Wednesday', start: '00:00', end: '23:00' }
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
      return parseFloat(a.rate) - parseFloat(b.rate);
    } else if (sortOrder === 'highest') {
      return parseFloat(b.rate) - parseFloat(a.rate);
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
  <img src={tutor.image} alt={`${tutor.name}'s profile`} className="tutor-image" />
  <div className="tutor-name">{tutor.name + " • $" + tutor.rate + "/hr"}</div>
  <div className="tutor-subject"><strong>Subjects:</strong> {tutor.subject}</div>
  <div className="tutor-location"><strong>Location:</strong> {tutor.location}</div>
  <div className="tutor-experience"><strong>Experience:</strong> {tutor.exp}</div>
  <div className="tutor-description"><strong>About:</strong> {tutor.description}</div>
  <div className="tutor-availability"><strong>Available:</strong> {tutor.availability.map(slot => (
    <span key={`${slot.day}-${slot.start}`}>
      {slot.day} {slot.start}-{slot.end}<br />
    </span>
  ))}</div>
  <button
    className="form-button"
    onClick={(e) => {
      setSelectedTutor(tutor);
    }}
  >
    Book Tutor
  </button>
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
    </div>
  );
};

export default TutorList;
