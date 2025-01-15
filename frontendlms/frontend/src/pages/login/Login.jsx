import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition duration-300"><Link to="/home">Login</Link>
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 text-sm hover:underline">
            Forgot Password?
          </a>
          <p className="text-gray-700 text-sm mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;