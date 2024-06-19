import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TutorList from './components/TutorList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import How from './components/How';
import ZoomEmbed from './components/ZoomEmbed';
import Footer from './components/Footer';
import Faq from './components/Faq';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-LL4JR6BV16"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutors" element={<TutorList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how" element={<How />} />
        <Route path="/zoom/:meetingId" element={<ZoomEmbed />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
