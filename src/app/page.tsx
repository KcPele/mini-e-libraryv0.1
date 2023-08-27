"use client";
import FAQ from "@/component/FAQ";
import BookCard from "@/component/BookCard";
import React, { useState } from "react";
import Footer from "@/component/Footer";
import News from "@/component/News";
import FloatSidebar from "@/component/FloatSidebar";

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
    <main className="  bg-white  min-h-screen">
      <div className="carousel relative  w-full max-h-[34rem] h-fit">
        {slidedatas.map((slide, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className=" carousel-item relative w-full"
          >
            <img src={slide.image} className="w-full object-cover" />
            <div className="absolute  bg-black/50 inset-0">
              <div className="h-full mx-20 md:mx-32  xl:ml-72 w-fit flex items-center lg:max-w-4xl">
                <h2 className=" text-white font-bold  lg:leading-[4rem] text-2xl sm:text-4xl lg:text-6xl">
                  {slide.text}
                </h2>
              </div>
            </div>
            <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
              {index != 0 ? (
                <a href={`#slide${index - 1}`} className="btn btn-circle">
                  ❮
                </a>
              ) : (
                <p></p>
              )}
              {index != slidedatas.length - 1 && (
                <a href={`#slide${index + 1}`} className="btn btn-circle">
                  ❯
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <FloatSidebar />
      </div>
      <div className="px-3">
        <div className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
          <input
            type="text"
            placeholder="Search anything"
            value={search}
            onChange={handleSearch}
            className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
            name="search"
          />
          <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full   border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#4fc18f] text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
            Search
          </button>
        </div>
      </div>

      <div className="px-3">
        <News />
      </div>

      <div className="px-10 md:px-32 py-16 md:py-28 tour__card-section2 grid gap-12">
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

      <div className="mb-24 px-10">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};

export default Tour;
