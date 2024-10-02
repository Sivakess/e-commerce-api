// </*----------------------------SignUP Success------------------------------------------------------- */>

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const SignUpSuccess = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goToLogin = () => {
    navigate('/login'); // Navigate to the login page
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-green-100">
      <div className="text-center">
        <h1 className="display-4 font-weight-bold text-success mb-4">Sign Up Successful!</h1>
        <p className="lead text-secondary mb-4">Thank you for signing up. You can now log in.</p>
        <button 
          onClick={goToLogin} 
          className='btn btn-dark btn-lg px-4 py-2 rounded hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105'>
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default SignUpSuccess;
