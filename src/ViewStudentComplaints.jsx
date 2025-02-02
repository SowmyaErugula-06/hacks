import React, { useEffect, useState } from 'react';

const ViewStudentComplaints = () => {
  const [studentComplaints, setStudentComplaints] = useState([]);

  useEffect(() => {
    const savedComplaints = JSON.parse(localStorage.getItem('studentComplaintData')) || [];
    setStudentComplaints(savedComplaints);
  }, []);

  return (
    <div>
      <h2>Student Complaints</h2>
      {studentComplaints.length > 0 ? (
        <ul>
          {studentComplaints.map((complaint, index) => (
            <li key={index}>
              <strong>{complaint.name}</strong>: {complaint.complaint}
            </li>
          ))}
        </ul>
      ) : (
        <p>No student complaints yet.</p>
      )}
    </div>
  );
};

export default ViewStudentComplaints;
