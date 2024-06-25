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
      subject: 'Calculus, Algebra, Trigonometry, Discrete Math, Physics',
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
      _id: '2',
      name: 'Charles Boniel',
      subject: 'Mathematics, Calculus, Algebra, Trigonometry, Statistics, Probability',
      education: "Bachelor's Degree in Mathematics",
      rate: 0.01,
      exp: '2 years',
      location: 'Los Angeles, CA',
      image: 'https://t3.ftcdn.net/jpg/01/92/16/04/360_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg',
      description: 'Hey! My lifelong fascination with mathematics led me to pursue an education in math, encompassing subjects like algebra, trigonometry, statistics, probability, and even calculus.  This strong foundation allows me to confidently guide students in their mathematical pursuits.',
      availability: [
        { day: 'Monday', start: '00:00', end: '23:59' }, { day: 'Tuesday', start: '00:00', end: '23:59' }, { day: 'Wednesday', start: '00:00', end: '23:59' }, { day: 'Thursday', start: '00:00', end: '23:59' }, { day: 'Friday', start: '00:00', end: '23:59' }, { day: 'Saturday', start: '00:00', end: '23:59' }, { day: 'Sunday', start: '00:00', end: '23:59' }
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
      subject: 'SAT, ACT',
      email: 'anna.lee@example.com',
      phone: '987-654-3212',
      rate: 50,
      exp: '6 years',
      education: 'Masters in Applied Mathematics',
      location: 'Online via Zoom',
      image: 'https://www.care.com/s/d/aws/photo/1080X1080/92/46024792_t03Wzz746abHAqn4ixO7C769tVe6d010',
      description: "Hey there! I'm your one-stop shop for crushing college admissions.  I help students like you master the SAT and ACT, brainstorm and write killer essay. Let's work together to make your dream score a reality!",
      availability: [
        { day: 'Monday', start: '00:00', end: '23:59' }, { day: 'Tuesday', start: '00:00', end: '23:59' }, { day: 'Wednesday', start: '00:00', end: '23:59' }, { day: 'Thursday', start: '00:00', end: '23:59' }, { day: 'Friday', start: '00:00', end: '23:59' }, { day: 'Saturday', start: '00:00', end: '23:59' }, { day: 'Sunday', start: '00:00', end: '23:59' }
      ]
    }
  ];
  const [sortOrder, setSortOrder] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [availableTutors, setAvailableTutors] = useState([]);
  const [unavailableTutors, setUnavailableTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const paypalRef = useRef();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
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

  useEffect(() => {
    const filterBySearchTerm = availableTutors.filter(tutor =>
      tutor.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTutors(filterBySearchTerm);
  }, [searchTerm, availableTutors]);

  const sortedTutors = filteredTutors.sort((a, b) => {
    if (sortOrder === 'lowest') {
      return parseFloat(a.rate) - parseFloat(b.rate);
    } else if (sortOrder === 'highest') {
      return parseFloat(b.rate) - parseFloat(a.rate);
    } else {
      return 0;
    }
  });

  const filteredBySubjectTutors = sortedTutors.filter(tutor =>
    tutor.subject.toLowerCase().includes(selectedSubject.toLowerCase())
  );

  const handleCardClick = (tutor) => {
    setSelectedTutor(tutor);
  };

  const handleCloseModal = () => {
    setSelectedTutor(null);
  };

  const TutorCard = ({ tutor }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [shouldTruncateAvailability, setShouldTruncateAvailability] = useState(false);
    const availabilityRef = useRef();

    useEffect(() => {
      if (availabilityRef.current) {
        setShouldTruncateAvailability(availabilityRef.current.scrollHeight > 40);
      }
    }, []);

    const toggleDescription = (e) => {
      e.stopPropagation();
      setIsExpanded(!isExpanded);
    };

    const shouldTruncateDescription = tutor.description.length > 200;

    return (
      <div className='tutorlist-all'>
        <div className="tutor-card" onClick={() => handleCardClick(tutor)}>
          <img src={tutor.image} alt={`${tutor.name}'s profile`} className="tutor-image" />
          <div className="tutor-name">{tutor.name + " • $" + tutor.rate + "/hr"}</div>
          <div className="tutor-subject"><strong>Subjects:</strong> {tutor.subject}</div>
          <div className="tutor-location"><strong>Location:</strong> {tutor.location}</div>
          <div className="tutor-experience"><strong>Experience:</strong> {tutor.exp}</div>
          <div className="tutor-description">
            <strong>About:</strong> {isExpanded || !shouldTruncateDescription ? tutor.description : `${tutor.description.slice(0, 200)}...`}
            {shouldTruncateDescription && (
              <span className="more-text" onClick={toggleDescription}>
                {isExpanded ? ' Show less' : ' Show more'}
              </span>
            )}
          </div>
          <div className="tutor-availability" ref={availabilityRef}>
            <strong>Available:</strong>
            {isExpanded || !shouldTruncateAvailability ? tutor.availability.map(slot => (
              <span key={`${slot.day}-${slot.start}`}>
                {slot.day} {slot.start}-{slot.end}<br />
              </span>
            )) : tutor.availability.slice(0, 2).map(slot => (
              <span key={`${slot.day}-${slot.start}`}>
                {slot.day} {slot.start}-{slot.end}<br />
              </span>
            ))}
            {shouldTruncateAvailability && (
              <span className="more-text" onClick={toggleDescription}>
                {isExpanded ? ' Show less' : ' Show more'}
              </span>
            )}
          </div>
          <button
            className="form-button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedTutor(tutor);
            }}
          >
            View Profile
          </button>
        </div>
      </div>
    );
  };

  const uniqueSubjects = [...new Set(tutors.flatMap(tutor => tutor.subject.split(',').map(sub => sub.trim())))];

  return (
    <div className='tutorlist-all'>
    <Navbar />
    <div className="tutor-list">
      <div className="controls-tutorsection-wrapper">
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

          <div className="subject-buttons">
            {uniqueSubjects.map(subject => (
              <button
                key={subject}
                onClick={() => handleSubjectClick(subject)}
                className={`subject-button ${selectedSubject === subject ? 'active' : ''}`}
              >
                {subject}
              </button>
            ))}
            <button
              onClick={() => handleSubjectClick('')}
              className={`subject-button ${selectedSubject === '' ? 'active' : ''}`}
            >
              <div className='showallbutton'>Show All</div>
            </button>
          </div>
        </div>

        <div className='tutorsection'>
          <h1>Available Tutors</h1>
          {filteredBySubjectTutors.length > 0 ? (
            <div className="tutors">
              {filteredBySubjectTutors.map((tutor) => (
                <TutorCard key={tutor._id} tutor={tutor} />
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
                      <button className="form-button" disabled>
                        Book Tutor
                      </button>
                    </div>
                    <img src={tutor.image} alt={`${tutor.name}'s profile`} className="tutor-image" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Modal show={!!selectedTutor} handleClose={handleCloseModal} tutor={selectedTutor} />
    </div>
    </div>
  );
};

export default TutorList;