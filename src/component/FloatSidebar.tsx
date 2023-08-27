import React from "react";

const FloatSidebar = () => {
  return (
    <div className="fixed z-[100]">
      <div className=" grid max-w-[140px]   sm:max-w-md bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
        <button className="p-4 rounded-lg w-full hover:bg-cusgreen hover:text-white/95 text-lg text-center text-gray-700 ">
          Book Request
        </button>

        <button className="p-4 rounded-lg w-full hover:bg-cusgreen text-lg text-center hover:text-white/95 text-gray-700 ">
          Guidlines and policies
        </button>
        <button className="p-4 rounded-lg w-full hover:bg-cusgreen text-lg  hover:text-white/95 text-center text-gray-700">
          Libary services
        </button>
      </div>
    </div>
  );
};

export default FloatSidebar;
