import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`h-screen bg-gray-800 p-5 pt-8 duration-300 ${
          isOpen ? "w-64" : "w-20"
        } sm:relative absolute sm:w-64 z-50 transition-transform`}
      >
        <button
          className="absolute top-4 right-4 sm:hidden text-white"
          onClick={toggleSidebar}
          aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
        >
          {isOpen ? "Close" : "Open"}
        </button>

        <h1
          className={`text-white font-bold text-xl duration-300 ${
            !isOpen && "hidden"
          }`}
        >
          Dukaan
        </h1>

        <ul className="mt-10">
          <li className="text-white hover:bg-gray-600 p-2 rounded-lg cursor-pointer mb-4">
            Home
          </li>
          <li className="text-white hover:bg-gray-600 p-2 rounded-lg cursor-pointer mb-4">
            Dashboard
          </li>
          <li className="text-white hover:bg-gray-600 p-2 rounded-lg cursor-pointer mb-4">
            Settings
          </li>
          <li className="text-white hover:bg-gray-600 p-2 rounded-lg cursor-pointer mb-4">
            Logout
          </li>
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && !window.matchMedia("(min-width: 640px)").matches && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
