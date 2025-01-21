// import React from "react";
// import { Link } from "react-router-dom";
// function Signup() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r">
//       <div className="bg-gray-400 shadow-md rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Create an Account</h2>
//         <p className="text-gray-600 text-center mb-6">Sign up to access exclusive features.</p>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your full name"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Create a password"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Confirm your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition duration-300"
//           >
//            <Link to="/">sign up</Link>
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <p className="text-gray-700 text-sm">
//             Already have an account?{" "}
//             <button href="#" className="text-blue-500 hover:underline">
//             <Link to="/">sign in</Link>
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup

import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Confirm password is not the same as passwod.")
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username: fullName,
          email: email,
          password: password 
        }),
      });
      const data = await response.json();

      if(data.error){
        alert(data.error);
      }
      else{
        alert("Log in to procced");
        navigate("/");
      }
    } catch (error) {
      console.log(error); 
      alert(error);
    }
    
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r">
      <div className="bg-gray-400 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Create an Account</h2>
        <p className="text-gray-600 text-center mb-6">Sign up to access exclusive features.</p>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700 text-sm">
            Already have an account?{" "}
            <Link to="/">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

