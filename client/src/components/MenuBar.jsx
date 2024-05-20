import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo_sangdoanict.png";

const MenuBar = () => {
  const [isHovered, setIsHovered] = useState(true);
  const [isHovered2, setIsHovered2] = useState(true);
  const [isHovered3, setIsHovered3] = useState(true);
  const [isHovered4, setIsHovered4] = useState(true);
  const [isHovered5, setIsHovered5] = useState(true);


  const handleMouseEnter = () => {
    setIsHovered(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(false);
  };
  const handleMouseEnter5 = () => {
    setIsHovered5(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(true);
  };
  const handleMouseLeave4 = () => {
    setIsHovered4(true);
  };
  const handleMouseLeave5 = () => {
    setIsHovered5(true);
  };
  return (
    <div className="flex flex-row border-b-[1px] border-gray-300">
      <div>
        <img
          className="w-[20%] mt-5 ml-4"
          src={logo}
          //src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/02/logo.svg"
          alt=""
        />
      </div>
      <div className="flex flex-row">
        <div onMouseLeave={handleMouseLeave}>
          <button
            className="flex flex-col w-[120px] transition-colors duration-100 hover:text-blue-800"
            onMouseEnter={handleMouseEnter}
          >
            <div className="flex flex-row ">
              <div className="flex flex-row transition-colors duration-300 border-b-4 hover:border-b-4 hover:border-blue-800 border-b-white">
                <div className="mt-8 mb-8 font-bold">Trang chủ</div>
              </div>
              <div className="mt-10 ml-2 text-xs">
                <IoIosArrowDown />
              </div>
            </div>
          </button>
          {!isHovered && (
            <div className="flex flex-col z-10 w-[250px] mt-1 absolute transition-transform duration-500 transform
             bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow">
              <p className="mt-3 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
            </div>
          )}
        </div>
        {/* <div onMouseLeave={handleMouseLeave2}>
          <button
            className="ml-5 transition-colors duration-100 hover:text-blue-800 "
            onMouseEnter={handleMouseEnter2}
          > */}
            {/* <div className="flex flex-row ">
              <div className="flex flex-row transition-colors duration-300 border-b-4 hover:border-b-4 hover:border-blue-800 border-b-white">
                <div className="mt-8 mb-8 font-bold">PAGES</div>
              </div>
              <div className="mt-10 ml-2 text-xs">
                <IoIosArrowDown />
              </div>
            </div>
          </button>
          {!isHovered2 && (
            <div className="flex flex-col z-10 ml-5 mt-1 w-[250px] absolute transition-transform duration-500 transform 
            bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow">
              <p className="mt-3 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
            </div>
          )} */}
        {/* </div> */}
        <div onMouseLeave={handleMouseLeave3}>
          <button
            className="w-[100px] ml-5 transition-colors duration-100 hover:text-blue-800 "
            onMouseEnter={handleMouseEnter3}
          >
            <div className="flex flex-row ">
              <div className="flex flex-row transition-colors duration-300 border-b-4 hover:border-b-4 hover:border-blue-800 border-b-white">
                <div className="mt-8 mb-8 font-bold">Dịch vụ</div>
              </div>
              <div className="mt-10 ml-2 text-xs">
                <IoIosArrowDown />
              </div>
            </div>
          </button>
          {!isHovered3 && (
            <div className="flex flex-col z-10 ml-5 mt-1 w-[250px] absolute transition-transform duration-500 transform 
            bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow">
              <p className="mt-3 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
            </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeave4}>
          <button
            className="ml-5 w-[100px] transition-colors duration-100 hover:text-blue-800 "
            onMouseEnter={handleMouseEnter4}
          >
            <div className="flex flex-row ">
              <div className="flex flex-row transition-colors duration-300 border-b-4 hover:border-b-4 hover:border-blue-800 border-b-white">
                <div className="mt-8 mb-8 font-bold">Đối tác</div>
              </div>
              <div className="mt-10 ml-2 text-xs">
                <IoIosArrowDown />
              </div>
            </div>
          </button>
          {!isHovered4 && (
            <div className="flex flex-col z-10 ml-5 mt-1 w-[250px] absolute transition-transform duration-500 transform 
            bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow">
              <p className="mt-3 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
            </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeave5}>
          <button
            className="ml-5 w-[100px] transition-colors duration-100 hover:text-blue-800 "
            onMouseEnter={handleMouseEnter5}
          >
            <div className="flex flex-row ">
              <div className="flex flex-row transition-colors duration-300 border-b-4 hover:border-b-4 hover:border-blue-800 border-b-white">
                <div className="mt-8 mb-8 font-bold">Liên hệ</div>
              </div>
              <div className="mt-10 ml-2 text-xs">
                <IoIosArrowDown />
              </div>
            </div>
          </button>
          {!isHovered5 && (
            <div className="flex flex-col z-10 ml-5 mt-1 w-[250px] absolute transition-transform duration-500 transform 
            bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow">
              <p className="mt-3 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
              <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
                Revealed on hover!
              </p>
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex flex-row ml-32">
        <div className="text-4xl text-blue-800 mt-7">
          <TfiHeadphoneAlt />
        </div>
        <div className="flex flex-col ml-3">
          <div className="mt-6 text-gray-600">Giải đáp về dịch vụ?</div>
          <div className="font-bold text-pink-500">+ 84 1800 688 900</div>
        </div>
      </div> */}
      {/* <div className="text-2xl mt-8 ml-10 mb-8 border-l-[1px]">
        <button className="ml-8">
          <IoSearchOutline />
        </button>
      </div> */}
      <button className="bg-indigo-800 mt-6 ml-10 flex flex-row h-[50px] text-white text-xs font-bold rounded-lg">
        <div className="m-4">NHẬN BÁO GIÁ</div>
        <div className="mt-[18px] mr-3">
          <FaArrowRight />
        </div>
      </button>
    </div>
  );
};

export default MenuBar;
