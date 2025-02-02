import React, { useState } from 'react';
import './ComplaintForm.css';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    block: '',
    room: '',
    system: '',
    complaint: '',
  });

  const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display submitted data after form submission
    setSubmittedData(formData);
    // Optionally reset the form after submission
    setFormData({
      name: '',
      email: '',
      department: '',
      block: '',
      room: '',
      system: '',
      complaint: '',
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      department: '',
      block: '',
      room: '',
      system: '',
      complaint: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Complaint Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
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
        <div className="form-row">
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
            <label htmlFor="block">Block:</label>
            <input
              type="text"
              id="block"
              name="block"
              value={formData.block}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="room">Room:</label>
            <input
              type="text"
              id="room"
              name="room"
              value={formData.room}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="system">System:</label>
            <input
              type="text"
              id="system"
              name="system"
              value={formData.system}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {/* Display submitted data after the form is submitted */}
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Complaint Details</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Department:</strong> {submittedData.department}</p>
          <p><strong>Block:</strong> {submittedData.block}</p>
          <p><strong>Room:</strong> {submittedData.room}</p>
          <p><strong>System:</strong> {submittedData.system}</p>
          <p><strong>Complaint:</strong> {submittedData.complaint}</p>
        </div>
      )}
    </div>
  );
};

export default ComplaintForm;
