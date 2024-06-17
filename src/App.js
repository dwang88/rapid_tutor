import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TutorList from './components/TutorList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TutorList />} />
      </Routes>
    </Router>
  );
};

export default App;
