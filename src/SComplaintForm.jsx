import React, { useState, useEffect } from 'react';
import './SComplaintForm.css';

const SComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    issue: '',
  });

  const [facultyComplaints, setFacultyComplaints] = useState([]); // Array to store faculty complaints
  const [studentComplaints, setStudentComplaints] = useState([]); // Array to store student complaints

  // Load student complaint data from localStorage when the component mounts
  useEffect(() => {
    const savedComplaintData = JSON.parse(localStorage.getItem('studentComplaintData'));
    if (savedComplaintData) {
      setStudentComplaints([savedComplaintData]); // Save as an array to make it easy to map in the table
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFacultyComplaints([...facultyComplaints, formData]); // Add new complaint to array
    setFormData({ name: '', email: '', department: '', issue: '' }); // Clear form
  };

  return (
    <div className="form-container">
      {/* Faculty Complaint Form */}
      <h2>Faculty Complaint View</h2>

      {/* Display Student Complaints in Table */}
      {studentComplaints.length > 0 ? (
        <div className="complaint-table">
          <h3>Submitted Student Complaints</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Block</th>
                <th>Room</th>
                <th>System</th>
                <th>Complaint</th>
              </tr>
            </thead>
            <tbody>
              {studentComplaints.map((complaint, index) => (
                <tr key={index}>
                  <td>{complaint.name}</td>
                  <td>{complaint.email}</td>
                  <td>{complaint.department}</td>
                  <td>{complaint.block}</td>
                  <td>{complaint.room}</td>
                  <td>{complaint.system}</td>
                  <td>{complaint.complaint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No student complaints submitted yet.</p>
      )}

      {/* Faculty Complaint Form */}
      <h3>Faculty Complaint Form</h3>
      <form onSubmit={handleSubmit}>
        {/* Name and Email Side by Side */}
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Department and Issue Side by Side */}
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="issue">Issue:</label>
            <textarea
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Faculty Complaints Table - Always Visible */}
      <div className="complaint-table">
        <h3>Submitted Faculty Complaints</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Issue</th>
            </tr>
          </thead>
          <tbody>
            {facultyComplaints.length > 0 ? (
              facultyComplaints.map((complaint, index) => (
                <tr key={index}>
                  <td>{complaint.name}</td>
                  <td>{complaint.email}</td>
                  <td>{complaint.department}</td>
                  <td>{complaint.issue}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', color: 'gray' }} >
                  No faculty complaints yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SComplaintForm;
