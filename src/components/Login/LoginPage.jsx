import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirect
import Footer from '../Footer/Footer';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.email === 'kevin@gmail.com' && formData.password === 'kevin') {
      console.log('Login successful');
      navigate('/dashboard'); 
    } else {
      console.log('Invalid credentials');
      
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Enter your credentials to access your account</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-gray-700">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 pr-10 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            {/* <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</Link> */}
            <p className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</p>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>

        {/* Sign Up link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account? <Link to="/register" className="text-blue-600 hover:text-blue-800">Sign up</Link>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginPage;
