import React from "react";

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Create an Account</h2>
        <p className="text-gray-600 text-center mb-6">Sign up to access exclusive features.</p>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Create a password"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
