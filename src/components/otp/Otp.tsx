import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSend = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    // Navigate to forgotPassword page
    navigate('/forgotPassword');
  };

  return (
    <div className="h-screen bg-indigo-500 flex items-center justify-center">
      <div className="w-full ml-30 max-w-lg p-8 space-y-6 bg-white rounded shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 text-center">OTP Verification</h2>
          <p className="text-sm text-gray-700 text-center">Enter your registered email address</p>
        </div>
        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-400 rounded-md bg-gray-200"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-3 text-white rounded-md ${email ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-indigo-400 cursor-not-allowed'}`}
            disabled={!email}
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
