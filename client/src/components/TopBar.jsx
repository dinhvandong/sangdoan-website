import React from "react";
import { HiMapPin } from "react-icons/hi2";
import { FiMail } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex flex-row justify-between bg-[#1F243D] text-gray-300">
      <div className="flex flex-row">
        <div className="flex flex-row transition-colors duration-500 hover:text-pink-500">
          <div className="ml-3 mt-[9px]">
            <HiMapPin />
          </div>
          <div className="m-2 text-sm border-r-[1px] border-gray-500">
            <p className="mr-3">24 Tp. Haiphong</p>
          </div>
        </div>
        <div className="flex flex-row transition-colors duration-500 hover:text-pink-500">
          <div className="ml-3 mt-[10px]">
            <FiMail />
          </div>
          <div className="m-2 text-sm">
            <p className="mr-3">sangdoan.ict@mail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row transition-colors duration-500 hover:text-pink-500">
          <div className="mb-2 mt-[10px]">
            <FaRegClock />
          </div>
          <div className="m-2 text-sm border-r-[1px] border-gray-500">
            <p className="mr-3">Office Hour : 08:00am - 6:00pm</p>
          </div>
        </div>
        <button className="m-2 mt-[10px] transition-colors duration-500 hover:text-pink-500">
          <FaFacebookF />
        </button>
        <button className="m-2 mt-[10px] transition-colors duration-500 hover:text-pink-500">
          <FaTwitter />
        </button>
        <button className="m-2 mt-2 text-2xl transition-colors duration-500 hover:text-pink-500">
          <FaGooglePlusG />
        </button>
        <button className="ml-1 mb-2 mt-[10px] mr-5 transition-colors duration-500 hover:text-pink-500 text-lg">
          <FaInstagram />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
