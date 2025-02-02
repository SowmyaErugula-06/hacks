import React from 'react';
import { Link } from 'react-router-dom';

const FacultyDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Faculty Dashboard</h2>
      <div className="dashboard-buttons">
        <div className="dashboard-button">
          <h3>1) Fill Complaint Form</h3>
          <Link to="/scomplaint-form">
            <button>Go to Faculty Complaint Form</button>
          </Link>
        </div>
        <div className="dashboard-button">
          <h3>2) View Faculty Complaints</h3>
          <Link to="/faculty-complaints">
            <button>View Faculty Complaints</button>
          </Link>
        </div>
        <div className="dashboard-button">
          <h3>3) View Student Complaints</h3>
          <Link to="/view-student-complaints">
            <button>View Student Complaints</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
