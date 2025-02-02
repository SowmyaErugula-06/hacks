import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (userType === 'student') {
      navigate('/complaint-form'); // Navigate to student complaint form
    } else if (userType === 'faculty') {
      navigate('/scomplaint-form'); // Navigate to faculty complaint form
    } else {
      alert('Please select a valid user type.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="https://www.pcproblemsolving.com/cdn/shop/files/PC_problem_solving_logo_db72fc31-92c2-4083-b949-f09b340d17da.png?v=1733174398&width=1272" alt="Tech Solver Logo" />
      </div>
      <div className="login-card">
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <select name="userType" value={userType} onChange={(e) => setUserType(e.target.value)} required>
            <option value="" disabled>Select User Type</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
          <button className="login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;