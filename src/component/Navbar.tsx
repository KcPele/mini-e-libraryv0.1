"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      id: 1,
      name: "Catalog Opac",
      url: "/",
    },
    {
      id: 2,
      name: "Ebooks",
      url: "/",
    },
    {
      id: 3,
      name: "About",
      url: "/",
    },
    {
      id: 4,
      name: "Database",
      url: "/",
    },
    {
      id: 5,
      name: "Contact",
      url: "/",
    },
  ];
  return (
    <nav className="py-2.5 bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <div className=" rounded-full w-[60px] h-[60px] bg-[#008000] "></div>

        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <a
            href="#"
            className="text-white bg-[#008000] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  "
          >
            Login
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className=" w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          {
            // <!-- Mobile menu -->
            isOpen && (
              <ul className="flex flex-col mt-4 font-medium lg:hidden">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-[#008000]  lg:hover:bg-transparent lg:border-0 lg:hover:bg-[#008000]   dark:text-gray-400 rounded"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )
          }
          <ul className="hidden  flex-col mt-4 font-medium lg:flex lg:flex-row lg:space-x-8 lg:mt-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-[#008000]  lg:hover:bg-transparent lg:border-0 lg:hover:bg-[#008000]   dark:text-gray-400 rounded"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
