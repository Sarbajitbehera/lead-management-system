import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";

const Hero = () => {
  const data = [
    {
      name: "Raju Das",
      address: "123 Mumbai St.",
      status: "Follow-up",
      phone: "9876543210",
      businessType: "Retail",
      clientType: "Premium",
      category: "Important",
    },
    {
      name: "Anil Sharma",
      address: "333 Ahmedabad St.",
      status: "Pending",
      phone: "4321098765",
      businessType: "Retail",
      clientType: "Standard",
      category: "Important",
    },
    {
      name: "Nihar Rao",
      address: "401 Jaipur Rd.",
      status: "Interested",
      phone: "3210987654",
      businessType: "Manufacturing",
      clientType: "Premium",
      category: "Important",
    },
    {
      name: "Ananya pani",
      address: "601 Chandigarh",
      status: "Confirm",
      phone: "7896541230",
      businessType: "Technology",
      clientType: "Premium",
      category: "Important",
    },
    {
      name: "Aryan Seth",
      address: "123 Mumbai St.",
      status: "Follow-up",
      phone: "9876543210",
      businessType: "Retail",
      clientType: "Premium",
      category: "Important",
    },
    {
      name: "Raghab Jha",
      address: "333 Ahmedabad St.",
      status: "Pending",
      phone: "4321098765",
      businessType: "Retail",
      clientType: "Standard",
      category: "Important",
    },
    {
      name: "Niki Deo",
      address: "401 Jaipur Rd.",
      status: "Interested",
      phone: "3210987654",
      businessType: "Manufacturing",
      clientType: "Premium",
      category: "Important",
    },
    {
      name: "Sai pani",
      address: "601 Chandigarh",
      status: "Confirm",
      phone: "7896541230",
      businessType: "Technology",
      clientType: "Premium",
      category: "Important",
    },
  ];

  return (
    <div className="w-[100%] flex">

      {/* left side */}
      <div className="w-[25%] h-[480px] mt-5 text-center">
        <div className="w-[250px] border-[1px] border-black ml-[50px]   hover:bg-blue-500 py-1 rounded-lg mb-2 mt-[120px]"><button><Link to="/home">Home</Link></button></div>
        <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500 py-1 rounded-lg mt-[20px] mb-7"><button><Link to="/new">New</Link></button></div>
        <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500 py-1 rounded-lg mt-[20px]  mb-7">FOLLOW UP</div>
        <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500  py-1 rounded-lg mt-[20px]mb-2">IMPORTANT</div>
        <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500 py-1 rounded-lg mt-[30px] mb-6">CONFIRM</div>
        <div className="w-[250px] border-[1px] border-black ml-[50px]  hover:bg-blue-500 py-1 rounded-lg mb-6">ONBOARD</div>
        <div className="w-[250px] border-[1px] border-black ml-[50px] hover:bg-blue-500  py-1 rounded-lg mb-2">REJECTED</div>
      </div>

      <div className="min-h-screen bg-gray-50 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-1xl font-bold text-red-600 "><FaHome />Home</h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search here by Name"
              className="border rounded-lg px-4 py-2 text-sm w-72"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Search
            </button>
          </div>
        </header>

        <div className="bg-slate-50 rounded-lg shadow-md p-4">
          <div className="flex space-x-40 border-b pb-3 mb-4">
            <button className="text-purple-600 border-b-2 border-purple-600 font-semibold">
              Important
            </button>
            <button className="text-purple-600">Pending</button>
            <button className="text-purple-600">Interested</button>
            <button className="text-purple-600">Follow-up</button>
          </div>

<div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border bg-cyan-400 ">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Biz.Type</th>
                <th className="border border-gray-300 px-4 py-2">Clt.Type</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.address}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.status}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.businessType}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.clientType}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Hero