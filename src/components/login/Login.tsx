import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // If the input is not empty, clear email error 
    if (value) {
      setEmailError('');
    }
  };

  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // Clear password error if the input is not empty
    if (value) {
      setPasswordError('');
    }
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    // clear previous error
    setEmailError('');
    setPasswordError('');

    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
    navigate('/dashboard');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-indigo-500">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block font-bold text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-200"
              value={email}
              onChange={handleEmailChange}  
              placeholder="Enter your email"
            />

            {/* for Email error container with a fixed height */}
            <div className="h-5">
            {emailError && <p className="text-red-500 text-sm ">{emailError}</p>}
            </div>

          </div>
          <div className="relative">
            <label htmlFor="password" className="block font-bold text-gray-600 mb-2">Password</label>
            <div>
            <input
              type="text"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-200"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pt-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
            </div>

            {/* for Password error container with a fixed height */}
            <div className="h-5">
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
            
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/otp" className="text-indigo-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-2 text-center">
          <p className="text-black">Don't have an account?{' '}
          <Link to="/" className="text-indigo-500 hover:underline">
            Register
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
