import React, { useState } from 'react';
import './Faq.css';
import Navbar from './Navbar';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is Rapid Tutor?',
      answer: 'Rapid Tutor is an online platform that connects students with tutors for personalized learning sessions. It was founded by two college students who want to democratize private tutoring.'
    },
    {
      question: 'How do I book a tutor?',
      answer: "You can book a tutor by browsing our list of available tutors, selecting one that fits your needs, clicking the tutor card, and paying through Paypal's secure checkout options. We also accept credit and debit card. Once your payment has gone through, you will be redirected to a Zoom meeting where you will be automatically allocated to your selected tutor."
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods including credit cards, debit cards, and PayPal. We are working on implementing more payment options.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'Refunds are handled on a case-by-case basis. If you feel unsatisfied with your tutor, please contact our support team for assistance.'
    },
    {
      question: 'How do I join a Zoom session?',
      answer: 'After booking a tutor, you will be redirected to a Zoom meeting. You can join the session by entering the waiting room, where you will be automatically put into a room with your selected tutor.'
    },
    {
        question: "I didn't get a Zoom link",
        answer: 'Please close all payment popups including Paypal checkout, Paypal Pay Later, and Debit or Credit options. If you are still not redirected to a Zoom meeting page, please contact us. We will respond ASAP.'
      },
    {
      question: 'Who We Are',
      answer: 'Rapid Tutor was founded by two college students who firsthand experienced the prohibitive costs associated with private tutoring. Driven by their belief that education should be accessible to all, they created Rapid Tutor to democratize access to quality education. Our platform empowers learners from all backgrounds to access personalized tutoring and educational resources that were once out of reach.'
    },
    {
      question: 'Our Mission',
      answer: 'Our mission is to provide affordable, high-quality tutoring services to help students achieve their academic goals. We are dedicated to fostering an inclusive learning environment, leveraging innovative technology to deliver personalized education, and continuously improving our platform to meet the diverse needs of our learners. By prioritizing accessibility and excellence, we strive to empower every student to reach their full potential and succeed academically.'
    },
    {
      question: 'Our Values',
      answer: '1. Affordable 1-on-1 Tutoring\n2. Commitment to Excellence\n3. Personalized Learning\n4. Integrity and Transparency'
    },
    {
      question: 'What does Rapid Tutor offer?',
      answer: 'We offer affordable, quality tutoring to help students crush their academic goals. Through innovative technology and a welcoming environment, we personalize learning for everyone. Our goal? Empower YOU to shine in school!'
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAnswer(index)}
              >
                <span className="arrow">{activeIndex === index ? '▼' : '▶'}</span> {item.question}
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
