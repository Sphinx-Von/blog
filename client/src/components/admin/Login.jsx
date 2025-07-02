import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

  const {axios, setToken} = useAppContext();

    const handleSubmit = async (e) => {
   e.preventDefault();
   try {
    const {data} = await axios.post('/api/admin/login', {email, password})
    
    if(data.success){
      setToken(data.token)
      localStorage.setItem('token', data.token)
      axios.defaults.headers.common['Authorization'] = data.token;
    }
    else{
      toast.error(data.message)
    }
   } catch (error) {
    toast.error(error.message)
   }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden">
      {/* Sparkle Background Effect */}
      <div className="absolute inset-0 pointer-events-none animate-pulse bg-[radial-gradient(#93c5fd_1px,transparent_1px)] bg-[length:20px_20px] opacity-30 z-0" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-sm p-6 border border-blue-300 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-extrabold text-blue-600 mb-2">
            <span className="text-blue-700">Admin</span> Login
          </h1>
          <p className="text-sm text-gray-600 mb-6">Enter your credentials to access the admin panel</p>

          {/* Example input fields */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input onChange={e=> setEmail(e.target.value)} value={email}
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input onChange={e=> setPassword(e.target.value)} value={password}
              type="password"
              placeholder="Password"
              className="px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
