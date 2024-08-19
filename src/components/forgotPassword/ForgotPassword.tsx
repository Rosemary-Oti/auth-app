import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('');

  const newPasswordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    setIsButtonDisabled(otp.includes(''));
  }, [otp]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!/^\d*$/.test(value)) return; // Ensure numeric input only

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('OTP:', otp.join(''));
    // Add your OTP verification code here

    
    // Assuming the OTP is valid when it has 6 digits
    if (otp.join('').length === 6) { 

      // Focus on the new password input after verifying the OTP
      newPasswordRef.current?.focus();
    }
  };

  const handleResend = () => {
    setResendTimer(30);
    // Add your resend OTP code here
    console.log('OTP resent');
  };

  // handle new password input change
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);

    if (value) {
      setNewPasswordError('');
    }
  };

  // handle confirm new password input change
  const handleConfirmNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmNewPassword(value);

    if (value) {
      setConfirmNewPasswordError('');
    }
  };

  
  const handleResetPassword = (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;
  if (!newPassword) {
    setNewPasswordError('Required');
    isValid = false;
  }

  if (!confirmNewPassword) {
    setConfirmNewPasswordError('Required');
    isValid = false;
  }


    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match');
      return;
    }
    if (isValid) {
    console.log('New Password:', newPassword);
    // Navigate to Login page
    navigate('/login');
  }
  };

  return (
    <div className="h-screen bg-indigo-500 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded">
        <h2 className="text-3xl font-bold text-center text-indigo-600">Reset your password</h2>
        <p className="text-sm text-gray-600 text-center">Enter the OTP sent to your email</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-center space-x-2">
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 border rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                value={otp[index]}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-3 mt-3 text-white rounded-md ${isButtonDisabled ? 'bg-indigo-600 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-400'}`}
            disabled={isButtonDisabled}
          >
            Verify
          </button>
          <div className="flex justify-center space-x-1">
            <p className="text-gray-500">Didn't receive any OTP?</p>
            <button
              type="button"
              className="text-indigo-600 font-bold"
              onClick={handleResend}
              disabled={resendTimer > 0}
            >
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend OTP'}
            </button>
          </div>
          <div>
            <label htmlFor="newPassword" className="block mb-2 text-lg font-bold text-gray-600">Create a New Password</label>
            <input
              type="text"
              id="newPassword"
              className="w-full px-4 py-2 text-gray-600 border rounded-md bg-gray-100"
              value={newPassword}
              onChange={handleNewPasswordChange}
              placeholder="New password"
              ref={newPasswordRef}
            />
            <div className="h-3">
              {newPasswordError && <p className="text-red-500 text-sm">{newPasswordError}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="confirmNewPassword" className="block mb-2 text-lg font-bold text-gray-600">Confirm New Password</label>
            <input
              type="text"
              id="confirmNewPassword"
              className="w-full px-4 py-2 text-gray-600 border rounded-md bg-gray-100"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
              placeholder="Confirm new password"
            />
            <div className="h-3">
              {confirmNewPasswordError && <p className="text-red-500 text-sm">{confirmNewPasswordError}</p>}
            </div>
          </div>
          <div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-indigo-600 rounded-md focus:outline-none"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
          <p className="text-gray-700 text-end font-bold">
          Back to {''}
          <Link to="/login" className="text-indigo-500 text-end"> 
          Log in
          </Link>
        </p>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default ForgotPassword;
