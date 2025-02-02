// FacultyComplaints.jsx (if necessary for faculty)
import React, { useState, useEffect } from 'react';

const FacultyComplaints = () => {
  const [facultyComplaints, setFacultyComplaints] = useState([]);

  useEffect(() => {
    // Logic to fetch faculty complaints, either from localStorage or API
    const savedComplaints = JSON.parse(localStorage.getItem('facultyComplaintData')) || [];
    setFacultyComplaints(savedComplaints);
  }, []);

  return (
    <div>
      <h2>Faculty Complaints</h2>
      {facultyComplaints.length > 0 ? (
        <ul>
          {facultyComplaints.map((complaint, index) => (
            <li key={index}>
              <strong>{complaint.name}</strong>: {complaint.issue}
            </li>
          ))}
        </ul>
      ) : (
        <p>No faculty complaints yet.</p>
      )}
    </div>
  );
};

export default FacultyComplaints;
