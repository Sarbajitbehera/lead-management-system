import React from "react";
import { FaHome, FaStar, FaClipboardCheck } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { RiUserUnfollowFill } from "react-icons/ri";
import { MdMeetingRoom } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen bg-gray-200 flex flex-col justify-between">
      <div className="flex flex-col gap-6 p-10">
        {/* Menu Items */}
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <FaHome />
          <span><Link to={"/home"}>Home</Link></span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <IoPeople />
          <span><Link to={"/new"}>New</Link></span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <RiUserUnfollowFill />
          <span>Follow Up</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <FaStar />
          <span>Important</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <MdMeetingRoom />
          <span>Meeting</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <FaClipboardCheck />
          <span>On-Board</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <GiConfirmed />
          <span>Confirm</span>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t border-gray-300">
        <button
          className="w-full px-4 py-2 bg-red-600 hover:bg-red-00 text-white font-medium rounded-md shadow"
          // onClick={() => alert("Logout button clicked!")}
        >
          <Link to="/">Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

