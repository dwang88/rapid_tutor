import React, { useState, useRef, useEffect } from 'react';
import './Faq.css';
import Navbar from './Navbar';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const questions = [
    {
      question: 'What is Rapid Tutor?',
      answer: 'Rapid Tutor is an online platform that connects students with tutors for personalized learning sessions. It was founded by two college students who want to democratize private tutoring. For more information on how the tutoring process works, visit the How It Works page'
    },
    {
      question: 'How do I book a tutor?',
      answer: "You can book a tutor by browsing our list of available tutors, selecting one that fits your needs, clicking the tutor card, and paying through Paypal's secure checkout options. We also accept credit and debit card. Once your payment has gone through, you will be redirected to a Zoom meeting where you will be automatically allocated to your selected tutor."
    },
    {
      question: 'How do I get tutored?',
      answer: "After payment, you will be redirected to a Zoom meeting on our website. You will then be put into a breakout room with your booked tutor. For more information on how the tutoring process works, visit the How It Works page"
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
      answer: 'After booking a tutor, you will be redirected to a Zoom meeting. You can join the session by entering the waiting room, where you will be automatically put into a room with your selected tutor. For more information on how the tutoring process works, visit the How It Works page'
    },
    {
        question: "I didn't get a Zoom link",
        answer: 'Please close all payment popups including Paypal checkout, Paypal Pay Later, and Debit or Credit options. If you are still not redirected to a Zoom meeting page, please contact us. We will respond ASAP.'
    },
    {
      question: 'What does Rapid Tutor offer?',
      answer: 'We offer affordable, quality tutoring to help students crush their academic goals. Through innovative technology and a welcoming environment, we personalize learning for everyone. Our goal? Empower YOU to shine in school! For more information on how the tutoring process works, visit the How It Works page'
    },
    {
      question: 'How can I become a tutor on Rapid Tutor?',
      answer: 'If you are passionate about teaching and want to join our platform as a tutor, we welcome you to apply through our website. Navigate to the contact section and submit your qualifications. Our team will review your application and reach out to you with further instructions.'
    },
    {
      question: 'Is Rapid Tutor available worldwide?',
      answer: 'Yes! Rapid Tutor allows students to connect with a tutor via Zoom, an online meeting platform. For more information on how the tutoring process works, visit the How It Works page'
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height = activeIndex === index ? `${ref.scrollHeight + 30}px` : '0px';
      }
    });
  }, [activeIndex]);

  return (
    <div className='faqall'>
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
              <div
                ref={el => contentRefs.current[index] = el}
                className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
              >
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
