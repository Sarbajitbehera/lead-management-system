import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Sidebar from "../../components/sidebar";
import Detail from "./Detail";
import { useState, useEffect } from "react";

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const bring = async () => {
      try {
        const result = await fetch("http://localhost:3000/lead");
        const info = await result.json();
        setData(info);
      } catch (error) {
        console.log(error);
      }
    };
    bring();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-md px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-red-600 flex items-center">
              <FaHome className="mr-2" />
              Home
            </h1>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search here by Name"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-72 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Search
              </button>
            </div>
          </div>

          {/* Tabs */}
          <nav className="flex justify-between mt-4 border-t border-b py-2">
            <button className="flex-1 text-center text-green-600 font-semibold border-b-2 border-green-600 px-4 py-1">
              Important
            </button>
            <button className="flex-1 text-center text-gray-600 hover:text-green-600 px-4 py-1">
              Pending
            </button>
            <button className="flex-1 text-center text-gray-600 hover:text-green-600 px-4 py-1">
              Interested
            </button>
            <button className="flex-1 text-center text-gray-600 hover:text-green-600 px-4 py-1">
              Follow-up
            </button>
          </nav>
        </header>

        {/* Table */}
        <div className="mt-1 mx-0 bg-white rounded-lg shadow-md overflow-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-cyan-500 text-white">
                <th className="border font-semibold px-4 py-2">Name</th>
                <th className="border font-semibold px-4 py-2">Address</th>
                <th className="border font-semibold px-4 py-2">Status</th>
                <th className="border font-semibold px-4 py-2">Phone Numbers</th>
                <th className="border font-semibold px-4 py-2">Biz.Type</th>
                <th className="border font-semibold  px-4 py-2">Clt.Type</th>
                <th className="border font-semibold px-4 py-2">offerBudget</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-200`}
                >
                  <td className="border px-4 py-2">
                    <Link to={"/detail"}>{item.name}</Link>
                  </td>
                  <td className="border font-semibold px-4 py-2">{item.address}</td>
                  <td className="border font-semibold px-4 py-2">{item.status}</td>
                  <td className="border font-semibold px-4 py-2">{item.mobile}</td>
                  <td className="border font-semibold px-4 py-2">{item.businessType}</td>
                  <td className="border font-semibold px-4 py-2">{item.clientType}</td>
                  <td className="border font-semibold px-4 py-2">{item.offerBudget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
