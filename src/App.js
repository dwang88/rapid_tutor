import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TutorList from './components/TutorList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import How from './components/How';
import Footer from './components/Footer';

const App = () => {
  return (
    // create router for different pages
    <Router>
      <Routes>
        {/* home path is / */}
        <Route path="/" element={<Home />} />
        {/* rest of paths (imported at top of file) */}
        <Route path="/tutors" element={<TutorList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how" element={<How />} />
      </Routes>
    </Router>
  );
};

export default App;
