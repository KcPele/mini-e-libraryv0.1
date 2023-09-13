"use client";
import FAQ from "@/component/FAQ";
import BookCard from "@/component/BookCard";
import React, { useState } from "react";
import Footer from "@/component/Footer";
import News from "@/component/News";
import FloatSidebar from "@/component/FloatSidebar";
import Sidebar from "@/component/Sidebar";
import Header from "@/component/Header";

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
];
const Tour = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Header />
      <div className="flex h-screen bg-gray-100">
        {/* <!-- sidebar --> */}
        <div className={`${isOpen ? "flex" : "hidden"} md:flex`}>
          <Sidebar />
        </div>

        {/* <!-- Main content --> */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between   w-full pl-4 py-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 md:hidden focus:outline-none focus:text-gray-700"
              >
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
              <input
                className="mx-4 bg-transparent text-end self-end max-w-lg border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="p-4">
            <div>
              <h2 className="text-black text-xl">New Arrivals</h2>
              <div className="mt-6 tour__card-section2 grid gap-4 justify-between">
                {bookDatas.map((bookData) => (
                  <BookCard
                    key={bookData.id}
                    title={bookData.title}
                    discription={bookData.discription}
                    img={bookData.img}
                    url={bookData.url}
                  />
                ))}
              </div>
              <div className="text-end mt-6">
                <p className="text-cusgreen">see more</p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-black text-xl">Library News & Events</h2>
              <div className="mt-6 tour__card-section2 grid gap-4 justify-between">
                {bookDatas.map((bookData) => (
                  <BookCard
                    key={bookData.id}
                    title={bookData.title}
                    discription={bookData.discription}
                    img={bookData.img}
                    url={bookData.url}
                  />
                ))}
              </div>
              <div className="text-end mt-6">
                <p className="text-cusgreen">Opening Hours 10am -6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tour;
