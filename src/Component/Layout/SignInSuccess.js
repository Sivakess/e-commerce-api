
// // </*----------------------------Sign IN Success------------------------------------------------------- */>

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const SignInSuccess = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goToLogin = () => {
    navigate('/'); // Navigate back to the home page
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-blue-100">
      <div className="text-center">
        <h1 className="display-4 font-weight-bold text-primary mb-4">Sign In Successful!</h1>
        <p className="lead text-secondary mb-4">Welcome back! You have successfully signed in.</p>
        <button 
          onClick={goToLogin} 
          className='btn btn-dark btn-lg px-4 py-2 rounded hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105'>
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default SignInSuccess;
