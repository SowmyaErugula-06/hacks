import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ComplaintForm from './ComplaintForm';
import SComplaintForm from './SComplaintForm';
import FacultyDashboard from './FacultyDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/scomplaint-form" element={<SComplaintForm />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
