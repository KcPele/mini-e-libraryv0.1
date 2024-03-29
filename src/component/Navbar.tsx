"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black">
      <div className=" px-4 max-w-[1800px] mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between w-full ">
            <div className="flex-shrink-0">
              <h3 className="text-white text-xl font-bold">NUMLW</h3>
            </div>
            <div className="hidden nav:block">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <Link
                  href="/"
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md  font-medium"
                >
                  HOME
                </Link>

                <Link
                  href="/#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  ABOUT
                </Link>

                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  CATALOG OPAC
                </Link>

                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  EBOOKS
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  DATABASE
                </Link>

                <Link
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white px-6 md:px-10 py-3 rounded-full bg-[#4fc18f] font-medium"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 mb-2 flex nav:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref: React.LegacyRef<HTMLDivElement>) => (
          <div className="nav:hidden " id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md  font-medium"
              >
                HOME
              </Link>

              <Link
                href="#"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md  font-medium"
              >
                ABOUT
              </Link>

              <Link
                href="#"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md  font-medium"
              >
                CATALOG OPAC
              </Link>

              <Link
                href="#"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md  font-medium"
              >
                EBOOKS
              </Link>
              <Link
                href="#"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="mb-2text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md  font-medium"
              >
                DATABASE
              </Link>

              <Link
                href="#"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-white hover:bg-gray-700 hover:text-white block px-8 py-3 rounded-full bg-[#4fc18f] text-center  font-medium"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
