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
    <div className="bg-footer text-white min-h-[222px] w-full flex flex-col md:flex-row p-4 sm:p-10 gap-3 md:items-end justify-between">
      <div className="max-w-[365px]">
        <p className="font-semibold sm:text-2xl">
          Nigerian Universities Medical Library Website
        </p>
      </div>
      <p>Copyright 2023</p>
      <div className="md:text-end">
        <p>Janedoe@gmail.com</p>
        <div className="flex gap-2">
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
