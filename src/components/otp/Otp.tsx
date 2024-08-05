import React, { useState, useEffect, useRef } from 'react';

const Otp: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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
    // Add your OTP verification logic here
  };

  const handleResend = () => {
    setResendTimer(30);
    // Add your resend OTP logic here
    console.log('OTP resent');
  };

  return (
    <div className="h-screen bg-indigo-500 flex items-center justify-center">
      <div className="w-full ml-30 max-w-lg p-8 space-y-6 bg-white rounded shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 text-center">OTP Verification</h2>
          <p className="text-sm text-gray-600 text-center">Enter the OTP sent to rosemary@gmail.com</p>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-2">
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
        </form>
        <button
          type="submit"
          className={`w-full px-4 py-3 text-white rounded-md ${isButtonDisabled ? 'bg-indigo-600 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-400'}`}
          disabled={isButtonDisabled}
        >
          Verify
        </button>
        <div className="flex justify-center space-x-1">
          <p className="text-gray-500">Didn't receive any OTP?</p>
          <button
            type="button"
            className="text-indigo-600 font-bold "
            onClick={handleResend}
            disabled={resendTimer > 0}
          >
            {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend OTP'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;

