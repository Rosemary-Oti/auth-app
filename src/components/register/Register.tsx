import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const navigate = useNavigate();


  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // clear emailError if the input is not empty
    if (value) {
      setEmailError('');
    }
  };

  // handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // clear passwordError if the input is not empty
    if (value) {
      setPasswordError('');
    }
  };

  // Handle repeat password input change
  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRepeatPassword(value);

    // clear repeatPasswordError if the input is not empty
    if (value) {
      setRepeatPasswordError('');
    }
  };

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Create a password');
      isValid = false;
    }

    if (!repeatPassword) {
      setRepeatPasswordError('Repeat same password');
      isValid = false;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    if (isValid) {
      console.log('Email:', email);
      console.log('Password:', password);

      // link your register to login page
      navigate('/login');
    }
  };

  return (
    <div className="h-screen bg-indigo-500 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Register</h2>

        {/* for email */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-lg font-bold text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border rounded-md bg-gray-200"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            <div className="h-5">
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
          </div>
          
          {/* for password */}
          <div className="relative">
            <label htmlFor="password" className="block mb-2 text-lg font-bold text-gray-600">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-4 py-3 border rounded-md bg-gray-200"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            <div className="h-5">
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>  
            <span
              className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          {/* for repeat password */}
          <div className="relative">
            <label htmlFor="repeatPassword" className="block mb-2 text-lg font-bold text-gray-600">Repeat Password</label>
            <input
              type={showRepeatPassword ? 'text' : 'password'}
              id="repeatPassword"
              className="w-full px-4 py-3 border rounded-md bg-gray-200"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              placeholder="Repeat password"
            />
            <div className="h-5">
              {repeatPasswordError && <p className="text-red-500 text-sm">{repeatPasswordError}</p>}
            </div>
            <span
              className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center cursor-pointer"
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            >
              <FontAwesomeIcon icon={showRepeatPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-indigo-500 rounded-md focus:outline-none hover:bg-indigo-600"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-black">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-500 hover:underline">Log In</Link>
          </p>

        </div>
        
      </div>
    </div>
  );
};

export default Register;
