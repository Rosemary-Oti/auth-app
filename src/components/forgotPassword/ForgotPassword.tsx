
import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleResetPassword = (event: React.FormEvent) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Reset password for email:', email);
    console.log('New Password:', newPassword);
    // Add your reset password logic here
  };

  return (
    <div className="h-screen bg-indigo-500 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded">
        <h2 className="text-3xl font-bold text-indigo-600">Reset your password</h2>
        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-lg font-bold text-gray-600">Enter your registered email address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address"
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block mb-2 text-lg font-bold text-gray-600">Create a New Password</label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-4 py-2 text-gray-600 border rounded-md bg-gray-100"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="new password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmNewPassword" className="block mb-2 text-lg font-bold text-gray-600">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              className="w-full px-4 text-gray-600 py-2 border rounded-md bg-gray-100"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="confirm new password"
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-3 text-white bg-indigo-600 rounded-md focus:outline-none">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

