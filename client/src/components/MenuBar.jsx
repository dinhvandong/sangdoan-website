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
    <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col border-b-[1px] border-gray-300 
    lg:justify-normal md:justify-normal sm:justify-center xs:justify-center items-center lg:w-full md:w-full sm:w-auto xs:w-[320px]">
      <div className="flex items-center lg:justify-normal md:justify-normal sm:justify-center xs:justify-center">
        <img
          className="w-[20%] mt-5 lg:ml-4 md:ml-4 sm:ml-0 xs:ml-0"
          src={logo}
          //src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/02/logo.svg"
          alt=""
        />
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:justify-normal md:justify-normal sm:justify-center xs:justify-center lg:items-start md:items-start sm:items-center xs:items-center">
        <div onMouseLeave={handleMouseLeave}>
          <button
            className="flex flex-col w-[120px] transition-colors duration-100 hover:text-blue-800"
            onMouseEnter={handleMouseEnter}
          >
            <div className="flex flex-row ">
              <div className="flex flex-row transition-colors duration-300 border-b-4 hover:border-b-4 hover:border-blue-800 border-b-white">
                <div className="mt-8 font-bold lg:mb-8 md:mb-8 sm:mb-0">Trang chủ</div>
              </div>
              <div className="mt-10 ml-2 text-xs">
                <IoIosArrowDown />
              </div>
            </div>
          </button>
          {!isHovered && (
            <div></div>
            // <div
            //   className="flex flex-col z-10 w-[250px] mt-1 absolute transition-transform duration-500 transform
            //  bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow"
            // >
            //   <p className="mt-3 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            // </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeave3}>
          <button
            className="w-[100px] lg:ml-5 md:ml-5 sm:ml-0 transition-colors duration-100 hover:text-blue-800 "
            onMouseEnter={handleMouseEnter3}
          >
            <div className="flex flex-row ">
              <div className="flex flex-row transition-colors duration-300 border-b-4 hover:border-b-4 hover:border-blue-800 border-b-white">
                <div className="mt-8 font-bold lg:mb-8 md:mb-8 sm:mb-0">Dịch vụ</div>
              </div>
              <div className="mt-10 ml-2 text-xs">
                <IoIosArrowDown />
              </div>
            </div>
          </button>
          {!isHovered3 && (
            <div
              className="flex flex-col z-10 ml-5 mt-1 w-[250px] absolute transition-transform duration-500 transform 
            bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow"
            >
              <p className="mt-3 ml-3 text-sm text-gray-500">
                Tư vấn giải pháp công nghệ
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Tư vấn giải pháp truyền thông marketing
              </p>
              <p className="mt-1 ml-3 text-sm text-gray-500">
                Cung cấp các gói dịch vụ phát triển phần mềm
              </p>
              <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
                Cung cấp các dịch vụ về marketing
              </p>
            </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeave4}>
          <button
            className="lg:ml-5 md:ml-5 sm:ml-0 w-[100px] transition-colors duration-100 hover:text-blue-800 "
            onMouseEnter={handleMouseEnter4}
          >
            <div className="flex flex-row ">
              <div className="flex flex-row transition-colors duration-300 border-b-4 hover:border-b-4 hover:border-blue-800 border-b-white">
                <div className="mt-8 font-bold lg:mb-8 md:mb-8 sm:mb-0">Đối tác</div>
              </div>
              <div className="mt-10 ml-2 text-xs">
                <IoIosArrowDown />
              </div>
            </div>
          </button>
          {!isHovered4 && (
            <div></div>
            // <div
            //   className="flex flex-col z-10 ml-5 mt-1 w-[250px] absolute transition-transform duration-500 transform 
            // bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow"
            // >
            //   <p className="mt-3 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            // </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeave5}>
          <button
            className="lg:ml-5 md:ml-5 sm:ml-0 w-[100px] transition-colors duration-100 hover:text-blue-800 "
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
            <div></div>
            // <div
            //   className="flex flex-col z-10 ml-5 mt-1 w-[250px] absolute transition-transform duration-500 transform 
            // bg-white border-t-gray-300 border-t-[1px] rounded-b-lg shadow"
            // >
            //   <p className="mt-3 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            //   <p className="mt-1 mb-4 ml-3 text-sm text-gray-500">
            //     Revealed on hover!
            //   </p>
            // </div>
          )}
        </div>
      </div>
      <button className="bg-indigo-800 lg:ml-10 md:ml-10 sm:ml-0 xs:ml-0 flex flex-row h-[50px] sm:w-[150px] text-white text-xs font-bold rounded-lg
      lg:mb-0 md:mb-0 sm:mb-10 xs:mb-10">
        <div className="m-4">NHẬN BÁO GIÁ</div>
        <div className="mt-[18px] mr-3">
          <FaArrowRight />
        </div>
      </button>
    </div>
  );
};

export default MenuBar;
