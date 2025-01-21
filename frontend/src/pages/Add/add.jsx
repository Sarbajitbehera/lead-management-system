import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {

const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    status: "PENDING",
    address: "",
    businessType: "",
    offerBudget: "",
    clientType: "",
    referredBy: "",
    followUpDate: "",
    confirmDate: "",
    important: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const process = async ()=>{
      const result  = await fetch("http://localhost:3000/lead/add",{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const convert = await result.json();
      console.log(convert);
      if(convert.ok){
        navigate('/home');
      }
      else{
        alert("Some error occured");
      }
    }
    process()
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Client Registration
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter client name"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter mobile number"
              required
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="PENDING">PENDING</option>
              <option value="FOLLOWUP">FOLLOWUP</option>
              <option value="ONBOARD">ONBOARD</option>
              <option value="REJECTED">REJECTED</option>
              <option value="CONFIRM">CONFIRM</option>
            </select>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter address"
            />
          </div>

          {/* Business Type */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="businessType">
              Business Type
            </label>
            <input type="text"
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              placeholder="Type of service it provide"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required />
              
          </div>

          {/* Offer Budget */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="offerBudget">
              Offer Budget
            </label>
            <input
              type="number"
              id="offerBudget"
              name="offerBudget"
              value={formData.offerBudget}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter offer budget"
              required
            />
          </div>

          {/* Client Type */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="clientType">
              Client Type
            </label>
            <input
              type="text"
              id="clientType"
              name="clientType"
              value={formData.clientType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter client type"
              required
            />
          </div>

          {/* Referred By */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="referredBy">
              Referred By
            </label>
            <input
              type="text"
              id="referredBy"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter referred by"
            />
          </div>

          {/* Follow-Up Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="followUpDate">
              Follow-Up Date
            </label>
            <input
              type="date"
              id="followUpDate"
              name="followUpDate"
              value={formData.followUpDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Confirm Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmDate">
              Confirm Date
            </label>
            <input
              type="date"
              id="confirmDate"
              name="confirmDate"
              value={formData.confirmDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Important */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="important"
              name="important"
              checked={formData.important}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
            <label htmlFor="important" className="ml-2  font-medium text-red-600">
               ! Important Client
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
           Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
