"use client";
import FAQ from "@/component/FAQ";
import BookCard from "@/component/BookCard";
import React, { useState } from "react";
import Footer from "@/component/Footer";
import News from "@/component/News";
import FloatSidebar from "@/component/FloatSidebar";
import Sidebar from "@/component/Sidebar";
import Header from "@/component/Header";

const slidedatas = [
  {
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "NIGERIAN UNIVERSITIES MEDICAL LIBRARY WEBSITE",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    text: "NIGERIAN UNIVERSITIES MEDICAL LIBRARY WEBSITE",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    text: "NIGERIAN UNIVERSITIES MEDICAL LIBRARY WEBSITE",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    text: "NIGERIAN UNIVERSITIES MEDICAL LIBRARY WEBSITE",
  },
];

const bookDatas = [
  {
    id: 1,
    title: "Rich Dad poor Dad",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam.",
    img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    url: "#",
  },
  {
    id: 2,
    title: "Rich Dad poor Dad",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam.",
    img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    url: "#",
  },
  {
    id: 3,
    title: "Rich Dad poor Dad",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam.",
    img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    url: "#",
  },
  {
    id: 4,
    title: "Rich Dad poor Dad",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam.",
    img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    url: "#",
  },
  {
    id: 5,
    title: "Rich Dad poor Dad",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam.",
    img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    url: "#",
  },
  {
    id: 6,
    title: "Rich Dad poor Dad",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam.",
    img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    url: "#",
  },
  {
    id: 7,
    title: "Rich Dad poor Dad",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam.",
    img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    url: "#",
  },
];
const Tour = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Header />
      <div className="flex h-screen bg-gray-100">
        {/* <!-- sidebar --> */}
        <Sidebar />

        {/* <!-- Main content --> */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <input
                className="mx-4 w-full border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
            <p className="mt-2 text-gray-600">
              This is an example dashboard using Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
