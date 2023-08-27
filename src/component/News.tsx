import React from "react";
import { MdLibraryBooks, MdNewspaper } from "react-icons/md";
const News = () => {
  return (
    <div className="max-w-7xl w-full mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
      <div className="flex cursor-pointer flex-col group hover:bg-cusgreen justify-center items-center gap-2 shadow-md p-4 rounded-lg h-32">
        <div className="flex gap-2 items-center">
          <MdLibraryBooks size={32} className="group-hover:text-white/80" />
        </div>
        <span className="font-semibold group-hover:text-white/80  text-black text-lg text-center">
          Library News & Events
        </span>
      </div>
      <div className="flex cursor-pointer flex-col group hover:bg-cusgreen justify-center items-center gap-2 shadow-md p-4 rounded-lg h-32">
        <div className="flex gap-2 items-center">
          <MdLibraryBooks size={32} className="group-hover:text-white/80" />
        </div>
        <span className="font-semibold group-hover:text-white/80  text-black text-lg text-center">
          Library News & Events
        </span>
      </div>
      <div className="flex cursor-pointer flex-col group hover:bg-cusgreen justify-center items-center gap-2 shadow-md p-4 rounded-lg h-32">
        <div className="flex gap-2 items-center">
          <MdLibraryBooks size={32} className="group-hover:text-white/80" />
        </div>
        <span className="font-semibold group-hover:text-white/80  text-black text-lg text-center">
          Library News & Events
        </span>
      </div>
      <div className="flex cursor-pointer flex-col group hover:bg-cusgreen justify-center items-center gap-2 shadow-md p-4 rounded-lg h-32">
        <div className="flex gap-2 items-center">
          <MdNewspaper size={32} className="group-hover:text-white/80" />
        </div>
        <span className="font-semibold group-hover:text-white/80  text-black text-lg text-center">
          Library News & Events
        </span>
      </div>
    </div>
  );
};

export default News;
