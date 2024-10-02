import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const navigate = useNavigate(); // Hook for navigation

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (currentState === 'Sign Up') {
      // Simulate sign-up success and navigate to Sign Up success page
      navigate('/signup-success');
    } else if (currentState === 'Login') {
      // Simulate sign-in success and navigate to Sign In success page
      navigate('/signin-success');
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-gray-100">
      <form onSubmit={onSubmitHandler} className='d-flex flex-column align-items-center w-50 sm:max-w-md bg-white p-4 rounded-lg shadow-lg'>
        <div className='inline-flex items-center gap-2 mb-4'>
          <h2 className='text-4xl font-weight-bold text-gray-800'>{currentState}</h2>
          <hr className='border-0 h-2 w-12 bg-gray-800' />
        </div>

        {currentState === 'Login' ? null : (
          <input 
            type="text" 
            className='form-control mb-3' 
            placeholder='Name' 
            required 
          />
        )}
        <input 
          type="email" 
          className='form-control mb-3' 
          placeholder='Email' 
          required 
        />
        <input 
          type="password" 
          className='form-control mb-3' 
          placeholder='Password' 
          required 
        />

        <div className='w-100 d-flex justify-content-between text-sm text-gray-600 mb-4'>
          <p className="cursor-pointer hover:underline">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer hover:underline">Create account</p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer hover:underline">Login Here</p>
          )}
        </div>

        <button className='btn btn-dark '>
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Login;
