// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold text-white">MyApp</h2>
            <p className="mt-2 text-sm">
              Your go-to platform for amazing services and resources. We are dedicated to bringing you the best experience.
            </p>
          </div>

         

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold text-white">Follow Us</h2>
            <ul className="mt-2 flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.5 0h-21A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24H12v-9H9V12h3v-3c0-3 1.79-4.65 4.52-4.65 1.31 0 2.69.22 2.69.22v3h-1.52c-1.5 0-1.97.93-1.97 1.88v2.55h4l-.65 3H15v9h7.5A1.5 1.5 0 0024 22.5v-21A1.5 1.5 0 0022.5 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.5a10 10 0 01-2.89.79A4.97 4.97 0 0023.34 3a9.96 9.96 0 01-3.16 1.21A4.92 4.92 0 0016.68 3a4.92 4.92 0 00-4.92 4.92c0 .39.04.77.13 1.14A13.96 13.96 0 012.33 3.6a4.92 4.92 0 001.52 6.56A4.87 4.87 0 012 9.94v.06a4.93 4.93 0 003.95 4.83 4.91 4.91 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 20.53a13.91 13.91 0 007.55 2.22c9.05 0 14-7.5 14-14v-.64a10 10 0 002.45-2.55z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.281 3.438 9.72 8.205 11.312.599.111.819-.261.819-.581 0-.287-.011-1.247-.016-2.261-3.338.727-4.042-1.611-4.042-1.611-.546-1.389-1.333-1.759-1.333-1.759-1.089-.744.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.806 1.305 3.492.998.109-.775.42-1.306.763-1.606-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.469-2.382 1.235-3.221-.124-.303-.536-1.52.117-3.169 0 0 1.008-.322 3.301 1.23.958-.266 1.984-.399 3.003-.404 1.019.005 2.045.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.649.241 2.866.118 3.169.767.839 1.234 1.911 1.234 3.221 0 4.609-2.804 5.63-5.475 5.924.431.372.816 1.102.816 2.222 0 1.606-.015 2.902-.015 3.293 0 .323.22.698.824.58C20.565 21.72 24 17.281 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          © 2025 MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
