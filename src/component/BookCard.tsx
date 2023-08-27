"use client";
import { IBookCard } from "@/utils";
import { useRouter } from "next/navigation";

import React from "react";

const BookCard = ({ img, title, discription, url }: IBookCard) => {
  let router = useRouter();
  return (
    <div className="max-w-2xl w-full rounded-xl overflow-hidden bg-[#4fc18f]">
      <div className="max-h-[400px]">
        <img className="w-full object-contain" src={img} alt="" />
      </div>
      <div className="">
        <div className="grid gap-2 px-6 py-6 text-white">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="w-[50%]">
            <hr />
          </div>
          <p className="max-w-[60%] mb-6 text-white/80 text-base truncate">
            {discription}
          </p>
          <button
            onClick={() => router.push(url)}
            className="text-white/80 w-fit "
          >
            Tap to read the whole book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
