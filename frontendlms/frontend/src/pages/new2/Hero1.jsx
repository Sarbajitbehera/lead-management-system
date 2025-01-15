// const Hero1 = () => {
//     return (
//         <div className="w-[100%] flex">
//             {/* left side */}
//             <div className="w-[25%] h-[480px] mt-10 text-center">
//                 <div className="w-[250px] border-[1px] border-black ml-[50px]   hover:bg-blue-500 py-1 rounded-lg mb-2 mt-[80px]">Home</div>
//                 <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500 py-1 rounded-lg mt-[20px] mb-7">NEW</div>
//                 <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500 py-1 rounded-lg mt-[20px]  mb-7">FOLLOW UP</div>
//                 <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500  py-1 rounded-lg mt-[20px]mb-2">IMPORTANT</div>
//                 <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500 py-1 rounded-lg mt-[30px] mb-6">CONFIRM</div>
//                 <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500 py-1 rounded-lg mb-8">ONBOARD</div>
//                 <div className="w-[250px] border-[1px] border-black ml-[50px] hover:bg-blue-500  py-1 rounded-lg mb-2">REJECTED</div>
//             </div>

//             {/* right side */}
//             <div className="">
//                 <div className="flex gap-10 mt-11 ml-5 mb-2">
//                     <div className="px-6 py-1 bg-yellow-400 rounded-lg">New Leads</div>
//                     <div className="px-6 py-1 bg-blue-400 rounded-lg">ADD</div>
//                     <div className="px-6 py-1 bg-blue-400 rounded-lg">DELETE</div>
//                 </div>
//                 <div className="items-center text-center flex">
//                     <div className="border-[1px] border-black h-[455px] w-[100px]">SL no</div>


//                     <div className="border-[1px] border-black h-[455px] w-[870px] items-center place-items-center">
//                         <span className="font-bold text-[20px] px-2 text-white bg-blue-500 rounded-lg mt-1 items-center">all cols fields</span>

//                         <div className="h-[100px] w-[700px] mt-[100px] bg-red-500 mb-8 rounded-lg"><h1 className="pt-[30px] text-white">IMPORTANT</h1></div>
//                         <div className="h-[100px] w-[700px] bg-yellow-500 rounded-lg"><h1 className="pt-[30px] text-white">REGULAR</h1></div>
//                     </div>


//                     <div className="border-[1px] border-black h-[455px] w-[100px]">
//                         <h1 className=" mt-1 mx-1 text-white rounded-lg bg-blue-500">View Bio</h1>
//                         <div className="mb-2 h-[20px] w-[80px] bg-blue-500 ml-2 mt-4 rounded-lg"></div>
//                         <div className="mb-2 h-[20px] w-[80px] bg-blue-500 ml-2 rounded-lg"></div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }
// export default Hero1


import React, { useState } from "react";

const Hero1 = () => {
  const [data, setData] = useState([
    { id: 1, name: "Aarav Gupta", status: "Important" },
    { id: 2, name: "Aditya Mehra", status: "Important" },
    { id: 3, name: "Neha Verma", status: "Important" },
    { id: 4, name: "Ananya Roy", status: "Important" },
    { id: 5, name: "Karan Sharma", status: "Important" },
    { id: 6, name: "Priya Singh", status: "Important" },
    { id: 7, name: "Ruhan Das", status: "Important" },
    { id: 8, name: "Simran Kaur", status: "Important" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-purple-600">New</h1>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>

      {/* List Items */}
      <div className="bg-white shadow rounded-lg">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b last:border-none"
          >
            {/* Checkbox and Number */}
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
              />
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 text-blue-600 font-bold">
                {index + 1}
              </div>
            </div>

            {/* Name */}
            <div className="flex-1 ml-4 text-gray-700 font-medium">
              {item.name}
            </div>

            {/* Status */}
            <div className="text-red-500 font-semibold">{item.status}</div>

            {/* Edit Button */}
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero1
