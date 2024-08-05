
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const Register: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(false);

//   const handleRegister = (event: React.FormEvent) => {
//     event.preventDefault();
//     if (password !== repeatPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Add your registration logic here
//   };

//   return (
//     <div className="h-screen bg-gray-300">
//       <div className="flex-col ml-30 p-10 items-center space-y-6 w-full max-w-lg bg-white ">
//           <div>
//             <label htmlFor="email" className="block bg-white mb-2 text-lg font-bold text-gray-600">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-4 border-red-200 rounded-md bg-gray-200"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="relative">
//             <label htmlFor="password" className="block mb-2 text-lg font-bold text-gray-600">Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               className="w-full px-4 py-3 border rounded-md bg-gray-200"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//              <span
//               className="absolute inset-y-0 right-0 pr-3 pt-9 flex items-center cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//             </span>
//           </div>
//           <div className="relative">
//             <label htmlFor="repeatPassword" className="block mb-2 text-lg font-bold text-gray-600">Repeat Password</label>
//             <input
//               type={showRepeatPassword ? 'text' : 'password'}
//               id="repeatPassword"
//               className="w-full px-4 py-3 border rounded-md bg-gray-200"
//               value={repeatPassword}
//               onChange={(e) => setRepeatPassword(e.target.value)}
//               placeholder="Repeat password"
//               required
//             />
//             <span
//               className="absolute inset-y-0 right-0 pr-3 pt-9 flex items-center cursor-pointer"
//               onClick={() => setShowRepeatPassword(!showRepeatPassword)}
//             >
//               <FontAwesomeIcon icon={showRepeatPassword ? faEyeSlash : faEye} />
//             </span>


//           </div>
//           <button type="submit" className="w-full px-4 py-3 text-white bg-indigo-500 rounded-md focus:outline-none focus:bg-indigo-600">
//             Register
//           </button>
//         <div>
//         <p className="text-black flex justify-center ">
//           Already have an account? 
//         </p>
//         <button className="w-full bg-gray-100 border-indigo-500 text-indigo-500  hover:underline ">Log In</button>
//         </div>
//       </div>
//       </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your registration logic here
  };

  return (
    <div className="h-screen bg-indigo-500 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-lg font-bold text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border rounded-md bg-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block mb-2 text-lg font-bold text-gray-600">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-4 py-3 border rounded-md bg-gray-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="relative">
            <label htmlFor="repeatPassword" className="block mb-2 text-lg font-bold text-gray-600">Repeat Password</label>
            <input
              type={showRepeatPassword ? 'text' : 'password'}
              id="repeatPassword"
              className="w-full px-4 py-3 border rounded-md bg-gray-200"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat password"
              required
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
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
