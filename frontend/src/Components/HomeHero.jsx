import React, { useState } from 'react';

const HeroSection = () => {
  // State to toggle between Client and Scientist login
  const [loginType, setLoginType] = useState('Client');

  // Function to handle toggle between logins
  const toggleLoginType = () => {
    setLoginType(loginType === 'Client' ? 'Scientist' : 'Client');
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Animated DNA Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 dna-animation"></div>

      <div className="relative flex items-center justify-between h-full px-8">
        {/* Left Side Text */}
        <div className="text-white text-7xl font-bold w-2/3">
          <h1>Genome Data Analysis Platform</h1>
          <p className="mt-6 text-2xl">Unlocking the potential of genomic data with modern tools.</p>
        </div>

        {/* Right Side Login Form */}
        <div className="w-1/3 bg-black p-10 rounded-lg shadow-2xl ml-10 bg-opacity-90">
          {/* Toggle between Client and Scientist */}
          <div className="flex justify-center mb-6">
            <button
              onClick={toggleLoginType}
              className={`px-4 py-2 rounded-l-md ${loginType === 'Client' ? 'bg-red-400 text-white' : 'bg-gray-700 text-gray-300'} focus:outline-none`}
            >
              Client Login
            </button>
            <button
              onClick={toggleLoginType}
              className={`px-4 py-2 rounded-r-md ${loginType === 'Scientist' ? 'bg-red-400 text-white' : 'bg-gray-700 text-gray-300'} focus:outline-none`}
            >
              Scientist Login
            </button>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">
            {loginType} Login
          </h2>

          <form className="space-y-6">
            {/* Client Login Fields */}
            {loginType === 'Client' && (
              <>
                <div>
                  <label htmlFor="client_id" className="block text-sm font-medium text-gray-300">
                    Client ID
                  </label>
                  <input
                    type="text"
                    id="client_id"
                    className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter Client ID"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </>
            )}

            {/* Scientist Login Fields */}
            {loginType === 'Scientist' && (
              <>
                <div>
                  <label htmlFor="scientist_id" className="block text-sm font-medium text-gray-300">
                    Scientist ID
                  </label>
                  <input
                    type="text"
                    id="scientist_id"
                    className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter Scientist ID"
                  />
                </div>
                <div>
                  <label htmlFor="institution_id" className="block text-sm font-medium text-gray-300">
                    Institution ID
                  </label>
                  <input
                    type="text"
                    id="institution_id"
                    className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter Institution ID"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-red-400 text-white py-3 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;