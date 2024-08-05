import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import Otp from './components/otp/Otp';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

