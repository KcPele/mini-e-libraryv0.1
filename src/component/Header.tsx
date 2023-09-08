import React from "react";

const Header = () => {
  return (
    <div className="bg-headerGradient text-center min-h-[435px] w-full flex flex-col items-center justify-center gap-10 ">
      <div className="max-w-[800px] ">
        <h1 className="font-bold text-2xl sm:text-4xl lg:text-6xl">
          Nigerian Universities Medical Library Website
        </h1>
      </div>
      <div className="flex gap-6">
        <button className="text-white px-6 rounded-md py-2 bg-[#008000]">
          Login
        </button>
        <button className="text-white border-2 border-[#008000] bg-transparent px-6 rounded-md py-2">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
