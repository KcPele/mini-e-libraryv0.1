import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMessenger,
  BsTwitter,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="relative bg-[#4fc18f]">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <footer className="flex flex-col space-y-10 justify-center m-10">
            <nav className="flex justify-center flex-wrap gap-6 text-white/95 font-medium">
              <a className="hover:text-gray-900" href="#">
                HOME
              </a>
              <a className="hover:text-gray-900" href="#">
                ABOUT
              </a>
              <a className="hover:text-gray-900" href="#">
                CATALOG OPAC
              </a>
              <a className="hover:text-gray-900" href="#">
                EBOOKS
              </a>
              <a className="hover:text-gray-900" href="#">
                DATABASE
              </a>
              <a className="hover:text-gray-900" href="#">
                CONTACT US
              </a>
            </nav>

            <div className="flex justify-center space-x-5">
              <BsFacebook size={24} className="text-white" />
              <BsLinkedin size={24} className="text-white" />
              <BsInstagram size={24} className="text-white" />

              <BsMessenger size={24} className="text-white" />
              <BsTwitter size={24} className="text-white" />
            </div>
            <p className="text-center text-white/80 font-medium">
              &copy; 2023. All rights reservered.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
