// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (event: React.FormEvent) => {
//     event.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // input your details
//   };

//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gray-300">
//       <div className="w-full max-w-lg bg-white p-8 rounded">
//         <h1 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Login</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block font-bold text-gray-600">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-2 py-2 border bg-gray-200 rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-600 font-bold">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-2 py-2 bg-gray-200 border rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <Link to="/forgot-password" className="text-indigo-500 hover:underline">
//             Forgot Password?
//           </Link>
//         </div>
//         <div className="mt-4 text-center">
//           <a href="/forgot-password" className="text-indigo-500 hover:underline">
//             Forgot Password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (event: React.FormEvent) => {
//     event.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // input your details
//   };

//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gray-300">
//       <div className="w-full max-w-lg bg-white p-8 rounded">
//         <h1 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Login</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block font-bold text-gray-600">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-2 py-2 border bg-gray-200 rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-600 font-bold">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-2 py-2 bg-gray-200 border rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <Link to="/forgot-password" className="text-indigo-500 hover:underline">
//             Forgot Password?
//           </Link>
//         </div>
//         <div className="mt-2 text-center">
//           <Link to="/register" className="text-indigo-500 hover:underline">
//             Don't have an account? Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-bold text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
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
