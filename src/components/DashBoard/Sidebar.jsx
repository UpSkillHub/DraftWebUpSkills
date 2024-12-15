// import { FaUserGraduate, FaUsers, FaMailBulk, FaChalkboardTeacher } from "react-icons/fa";
// import { IoMdLogOut } from "react-icons/io";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white text-blue-700 h-screen px-4 fixed w-16 md:w-64 border-r border-blue-200 dark:bg-gray-900 dark:text-white">
//       <h1 className="text-2xl font-bold hidden md:block mt-4 text-center italic text-blue-700">Up Skills Hub</h1>
//       <ul className="flex flex-col mt-5 text-xl">
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
//         onClick={() => navigate("/dashboard")}>
//           <LuLayoutDashboard />
//           <span className="hidden md:inline">Dashboard</span>
//         </li>
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white" 
//         onClick={() => navigate("/dashboard/users")}>
//           <FaUsers />
//           <span className="hidden md:inline">Users</span>
//         </li>
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
//         onClick={() => navigate("/dashboard/interns")}>
//           <FaUserGraduate />
//           <span className="hidden md:inline">Intern</span>
//         </li>
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
//         onClick={() => navigate("/dashboard/trainees")}>
//           <FaChalkboardTeacher />
//           <span className="hidden md:inline">Trainees</span>
//         </li>
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
//           <FaMailBulk />
//           <span className="hidden md:inline">Newsletter</span>
//         </li>
//         <li
//           className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
//           onClick={() => navigate("/login")}
//         >
//           <IoMdLogOut />
//           <span className="hidden md:inline">Log Out</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';
import { FaUserGraduate, FaUsers, FaMailBulk, FaChalkboardTeacher } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <LuLayoutDashboard />, text: "Dashboard", path: "/dashboard" },
    { icon: <FaUsers />, text: "Users", path: "/dashboard/users" },
    { icon: <FaUserGraduate />, text: "Intern", path: "/dashboard/interns" },
    { icon: <FaChalkboardTeacher />, text: "Trainees", path: "/dashboard/trainees" },
    { icon: <FaMailBulk />, text: "Newsletter", path: "" },
    { icon: <IoMdLogOut />, text: "Log Out", path: "/login" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 p-2 bg-blue-700 text-white rounded-md lg:hidden z-50"
      >
        <Menu size={24} />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-screen bg-white text-blue-700 
        transition-transform duration-300 ease-in-out
        border-r border-blue-200 dark:bg-gray-900 dark:text-white
        w-64 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:w-64
      `}>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center italic text-blue-700 mt-12 lg:mt-4">
            Up Skills Hub
          </h1>
          
          <ul className="flex flex-col mt-5 text-xl">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                    setIsOpen(false);
                  }
                }}
              >
                {item.icon}
                <span className="inline">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
