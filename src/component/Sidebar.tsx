import React from "react";
import { BiSolidBookReader } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
import { RiGuideFill, RiQuestionnaireFill } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
const Sidebar = () => {
  return (
    // <!-- sidebar -->
    <div className="flex flex-col w-fit sm:w-64 bg-white border-r-[3px] border-gray-400">
      <div className="flex items-center justify-center  h-16"></div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex-1 px-2 py-4  text-black">
          <a
            href="#"
            className="group flex gap-2 items-center   px-4 py-2  hover:text-white  hover:bg-cusgreen"
          >
            <RiQuestionnaireFill
              size={20}
              className="text-cusgreen group-hover:text-white"
            />
            <span className="hidden sm:flex">Book Request</span>
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 px-4 py-2  hover:text-white mt-2  hover:bg-cusgreen"
          >
            <BsHeadset
              size={20}
              className="text-cusgreen group-hover:text-white"
            />
            <span className="hidden sm:flex">Library Service</span>
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 px-4 py-2  hover:text-white mt-2  hover:bg-cusgreen"
          >
            <RiGuideFill
              size={20}
              className="text-cusgreen group-hover:text-white"
            />
            <span className="hidden sm:flex">Guidelines and politics</span>
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 px-4 py-2  hover:text-white mt-2  hover:bg-cusgreen"
          >
            <FaQuestion
              size={20}
              className="text-cusgreen group-hover:text-white"
            />
            <span className="hidden sm:flex">Ask a Forefront Liberian</span>
          </a>
        </div>
        <div className="px-2 py-4 text-black">
          <a
            href="#"
            className="flex items-center px-4 py-2  hover:bg-cusgreen"
          >
            Site Map
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2    hover:bg-cusgreen"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
