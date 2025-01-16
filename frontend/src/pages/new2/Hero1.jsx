// import React, { useState } from "react";

// const Hero1 = () => {
//   const [data, setData] = useState([
//     { id: 1, name: "Aarav Gupta", status: "Important" },
//     { id: 2, name: "Aditya Mehra", status: "Important" },
//     { id: 3, name: "Neha Verma", status: "Important" },
//     { id: 4, name: "Ananya Roy", status: "Important" },
//     { id: 5, name: "Karan Sharma", status: "Important" },
//     { id: 6, name: "Priya Singh", status: "Important" },
//     { id: 7, name: "Ruhan Das", status: "Important" },
//     { id: 8, name: "Simran Kaur", status: "Important" },
//   ]);

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-purple-600">New</h1>
//         <div className="flex gap-2">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//             Add
//           </button>
//           <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//             Delete
//           </button>
//         </div>
//       </div>

//       {/* List Items */}
//       <div className="bg-white shadow rounded-lg">
//         {data.map((item, index) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between p-4 border-b last:border-none"
//           >
//             {/* Checkbox and Number */}
//             <div className="flex items-center gap-4">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
//               />
//               <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 text-blue-600 font-bold">
//                 {index + 1}
//               </div>
//             </div>

//             {/* Name */}
//             <div className="flex-1 ml-4 text-gray-700 font-medium">
//               {item.name}
//             </div>

//             {/* Status */}
//             <div className="text-red-500 font-semibold">{item.status}</div>

//             {/* Edit Button */}
//             <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
//               Edit
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero1



// ContactTable.jsx


import React from "react";
import { useState, useEffect } from "react";

const Hero1 = () => {



  const contacts = [
    {
      name: "Ronald Richards",
      title: "Founder & CEO",
      company: "Aster Medical",
      email: "ronaldrichards@gmail.com",
      phone: "(219) 555-0114",
    },
    {
      name: "Courtney Henry",
      title: "CEO",
      company: "Big Kahuna Burger Ltd.",
      email: "courtneyhenry@gmail.com",
      phone: "(907) 555-0101",
    },
    {
      name: "Ronald Richards",
      title: "Founder & CEO",
      company: "Aster Medical",
      email: "ronaldrichards@gmail.com",
      phone: "(219) 555-0114",
    },
    {
      name: "Courtney Henry",
      title: "CEO",
      company: "Big Kahuna Burger Ltd.",
      email: "courtneyhenry@gmail.com",
      phone: "(907) 555-0101",
    },
    {
      name: "Ronald Richards",
      title: "Founder & CEO",
      company: "Aster Medical",
      email: "ronaldrichards@gmail.com",
      phone: "(219) 555-0114",
    },
    {
      name: "Courtney Henry",
      title: "CEO",
      company: "Big Kahuna Burger Ltd.",
      email: "courtneyhenry@gmail.com",
      phone: "(907) 555-0101",
    },
    {
      name: "Ronald Richards",
      title: "Founder & CEO",
      company: "Aster Medical",
      email: "ronaldrichards@gmail.com",
      phone: "(219) 555-0114",
    },
    {
      name: "Courtney Henry",
      title: "CEO",
      company: "Big Kahuna Burger Ltd.",
      email: "courtneyhenry@gmail.com",
      phone: "(907) 555-0101",
    },
    {
      name: "Ronald Richards",
      title: "Founder & CEO",
      company: "Aster Medical",
      email: "ronaldrichards@gmail.com",
      phone: "(219) 555-0114",
    },
    {
      name: "Courtney Henry",
      title: "CEO",
      company: "Big Kahuna Burger Ltd.",
      email: "courtneyhenry@gmail.com",
      phone: "(907) 555-0101",
    },
    {
      name: "Ronald Richards",
      title: "Founder & CEO",
      company: "Aster Medical",
      email: "ronaldrichards@gmail.com",
      phone: "(219) 555-0114",
    },
    {
      name: "Courtney Henry",
      title: "CEO",
      company: "Big Kahuna Burger Ltd.",
      email: "courtneyhenry@gmail.com",
      phone: "(907) 555-0101",
    },
  ];
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          {/* <table className="w-full table-auto border-collapse border bg-cyan-400 "> */}
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Name</th>
              <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Title</th>
              <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Company</th>
              <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Email</th>
              <th className="p-2 text-left font-medium text-gray-700 border border-gray-300">Phone Numbers</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-2 text-gray-800 flex">
                    
<div className="flex items-center gap-4 mr-2">
  <input
    type="checkbox"
    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
  />
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 text-blue-600 font-bold">
    {index + 1}
  </div>
</div>   
                  {contact.name}
                </td>
                <td className="p-2 text-gray-800">{contact.title}</td>
                <td className="p-2 text-gray-800">{contact.company}</td>
                <td className="p-2 text-gray-800">{contact.email}</td>
                <td className="p-2 text-gray-800">{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero1;

