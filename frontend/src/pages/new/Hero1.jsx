import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import { Link } from "react-router-dom";

const Hero1 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const bring = async () => {
      try {
        const result = await fetch("http://localhost:3000/lead");
        const info = await result.json();
        setData(info);
      } catch (error) {
        console.log(error);
      };
    }
    bring();

  }, []);

  const handleDelete = () => {
    setShowPopup(true); // Show the popup
  };

  const confirmDelete = () => {
    setShowPopup(false); // Close the popup
    alert("Contacts deleted successfully!"); // Implement your delete logic here
  };

  const cancelDelete = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 px-5 py-3">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
          <h1 className="text-xl font-bold">Lead Management System</h1>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 border border-indigo-500 hover:bg-blue-600 rounded text-sm font-medium"
            >
              <Link to="/add">Add</Link>
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-sm font-medium"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th>SL No.</th>
                <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Name</th>
                <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Status</th>
                <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Company</th>
                <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Important</th>
                <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Phone Numbers</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td>
                    <div className="flex items-center gap-4 ml-4">
                      <input
                        type="checkbox"
                        className="w-3 h-3 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
                      />
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-200 text-blue-600 font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-gray-800 font-semibold text-sm">{data.name}</td>
                  <td className="p-2 text-gray-800 font-semibold text-sm flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${data.status === "CONFIRM"
                        ? "bg-green-500"
                        : data.status === "ONBOARD"
                          ? "bg-yellow-500"
                        : data.status === "REJECTED"
                          ? "bg-red-700"
                          : "bg-pink-600"
                        }`}
                    ></span>
                    {data.status}
                  </td>
                  <td className="p-2 text-gray-800 font-semibold text-sm">{data.businessType}</td>
                  <td className="p-2 text-gray-800 font-semibold text-sm">{data.important ? "Important" : ""}</td>
                  <td className="p-2 text-gray-800 font-semibold text-sm">{data.mobile}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Popup Card */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-lg font-bold mb-4">Are you want to delete?</h2>
              <div className="flex justify-end gap-4">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                >
                  No
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero1;