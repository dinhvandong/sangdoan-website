import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import logo from "../assets/logo_sangdoanict.png";

const FooterComp = () => {
  return (
    <div className="flex flex-col lg:w-full md:w-full sm:w-full xs:w-[320px] items-center justify-center bg-indigo-950">
      <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col  bg-white lg:w-[70%] md:w-[70%] sm:w-[90%] xs:w-[90%] absolute rounded-lg lg:mb-[500px] md:mb-[500px] sm:mb-[1000px] xs:mb-[1000px] shadow-lg">
        <div className="flex lg:w-[35%] md:w-[35%] sm:w-[50%] xs:w-full">
          <img
            src="https://www.herzing.edu/sites/default/files/2021-11/software-developers-at-work.jpg"
            alt=""
            className="rounded-l-lg"
          />
        </div>
        <div className="flex flex-col lg:mr-0 md:mr-0 sm:mr-10 lg:w-[70%] md:w-[70%] sm:w-[50%] xs:w-[90%] lg:items-start md:items-start sm:items-center xs:items-center">
          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:mt-20 md:mt-20 sm:mt-20 xs:mt-5 lg:items-start md:items-start sm:items-start xs:items-center">
            <div
              className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 lg:ml-20 md:ml-20 sm:ml-10 xs:ml-7
            lg:w-full md:w-full sm:w-[220px] xs:w-[220px]"
            >
              <input
                type="text"
                className="focus:outline-none m-2 lg:w-[250px] md:w-[250px] sm:w-[200px] xs:w-[200px]"
                placeholder="Your name*"
              />
            </div>
            <div
              className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 lg:ml-20 md:ml-20 sm:ml-10 xs:ml-7
            lg:w-full md:w-full sm:w-[220px] lg:mt-0 md:mt-0 sm:mt-5 xs:mt-3"
            >
              <input
                type="number"
                className="focus:outline-none m-2 lg:w-[250px] md:w-[250px] sm:w-[200px] xs:w-[200px]"
                placeholder="Phone number*"
              />
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:mt-10 md:mt-10 sm:mt-5 xs:mt-3">
            <div
              className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 lg:ml-20 md:ml-20 sm:ml-10 xs:ml-7
            lg:w-full md:w-full sm:w-[220px] xs:w-[220px]"
            >
              <input
                type="text"
                className="focus:outline-none m-2 lg:w-[250px] md:w-[250px] sm:w-[200px] xs:w-[200px]"
                placeholder="Email*"
              />
            </div>
            <div
              className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 lg:ml-20 md:ml-20 sm:ml-10 xs:ml-7
            lg:w-full md:w-full sm:w-[220px] xs:w-[220px] lg:mt-0 md:mt-0 sm:mt-5 xs:mt-3"
            >
              <input
                type="number"
                className="focus:outline-none m-2 lg:w-[250px] md:w-[250px] sm:w-[200px]"
                placeholder="Subject*"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 lg:ml-20 md:ml-20 sm:ml-10 xs:ml-7 lg:mt-10 md:mt-10 sm:mt-10 xs:mt-5">
            <textarea
              name=""
              id=""
              placeholder="Message*"
              className="lg:w-[600px] md:w-[600px] sm:w-[200px] xs:w-[200px] rounded-lg m-2 focus:outline-none"
            ></textarea>
          </div>
          <button
            className="bg-indigo-800 mt-6 flex flex-row h-[50px] lg:w-[20%] md:w-[20%] sm:w-[140px]  text-white text-xs font-bold rounded-lg lg:ml-20 md:ml-20 sm:ml-20 xs:ml-6
          mb-10"
          >
            <div className="m-4">GET STARTED</div>
            <div className="mt-[18px] mr-3">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div> 
      <div
        className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:mt-[400px] md:mt-[400px] sm:mt-[500px] xs:mt-[500px]
      border-b-[1px] border-gray-500 lg:justify-normal md:justify-normal sm:justify-center 
      lg:items-start md:items-start sm:items-center"
      >
        <div
          className="flex flex-col lg:border-b-0 md:border-b-0 sm:border-b-[1px] xs:border-b-[1px]
        lg:border-r-[1px] md:border-r-[1px] sm:border-r-0 xs:border-r-0 border-gray-500 mt-10 mb-10
        lg:justify-normal md:justify-normal sm:justify-center xs:justify-center 
      lg:items-start md:items-start sm:items-center xs:items-center"
        >
          <div className="text-white">Công ty Sáng đoàn ICT</div>
          {/* <img className="w-[50px] h-[50px] mt-5 ml-4" src={logo} alt="" /> */}
          <div className="text-gray-400 text-wrap lg:w-[400px] md:w-[400px] sm:w-[400px] xs:w-[220px] mt-5 lg:text-start md:text-start sm:text-center xs:text-center
          lg:mb-0 md:mb-0 sm:mb-10 xs:mb-10">
           Chúng tôi là Công ty Công nghệ Thông tin tốt nhất thế giới. 
           Cung cấp các dịch vụ chất lượng cao nhất về phần cứng, phần mềm và giải pháp mạng.
          </div>
        </div>
        <div
          className="lg:border-b-0 md:border-b-0 sm:border-b-[1px] xs:border-b-[1px]
         lg:border-r-[1px] md:border-r-[1px] sm:border-r-0 xs:border-r-0 border-gray-500 
         flex flex-col lg:mt-10 md:mt-10 sm:mt-0 lg:ml-20 md:ml-20 sm:ml-0 xs:ml-0 mb-10
         lg:justify-start md:justify-start sm:justify-start xs:justify-center lg:items-start md:items-start sm:items-center xs:items-center"
        >
          <div className="text-white">Truy cập nhanh</div>
          <div className="flex flex-row text-gray-400 lg:mr-20 md:mr-20 sm:mr-0 xs:mr-0 lg:text-sm md:text-sm sm:text-sm xs:text-xs lg:mb-0 md:mb-0 sm:mb-10 xs:mb-10 lg:mt-0 md:mt-0 sm:mt-5 ">
            <div>
              <div className="mt-2">Đặt lịch hẹn</div>
              <div className="mt-2">Dịch vụ khách hàng</div>
              <div className="mt-2">Các phòng ban</div>
              <div className="mt-2">Về chúng tôi</div>
            </div>
            <div className="ml-20">
              <div className="mt-2">Dịch vụ công nghệ</div>
              <div className="mt-2">Dịch vụ tư vấn</div>
              <div className="mt-2">Dịch vụ truyền thông</div>
              <div className="mt-2">Dịch vụ marketing</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:justify-normal md:justify-normal sm:justify-center xs:justify-center lg:items-start md:items-start sm:items-center xs:items-center">
          <div className="mt-10 text-white lg:ml-20 md:ml-20 sm:ml-0 xs:ml-0">
            Gửi thư cho chúng tôi
          </div>
          <div className="mt-5 text-gray-400 lg:ml-20 md:ml-20 sm:ml-0 xs:ml-0 text-wrap w-[220px]">
            Gửi thư ngay cho chúng tôi để nhận được những ưu đãi dịch vụ.
          </div>
          <div className="flex flex-row mt-5 bg-white rounded-lg lg:ml-20 md:ml-20 sm:ml-0 lg:mb-0 md:mb-0 sm:mb-10">
            <div>
              <input
                type="text"
                name=""
                id=""
                className="focus:outline-none w-[200px] rounded-lg m-3 ml-4"
                placeholder="Your email"
              />
            </div>
            <div className="m-1 ml-8 text-2xl font-thin text-white bg-indigo-800 rounded-lg">
              <div className="m-2">
                <FaRegPaperPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 mb-20 lg:flex-row md:flex-row sm:flex-col xs:flex-col">
        <div className="text-gray-400 lg:mr-[650px] md:mr-[450px] sm:mr-0 xs:mr-0 lg:text-base md:text-base sm:text-base xs:text-sm">
          Copyright © 2021 <span className="text-pink-500">SangdoanICT</span>. All
          Rights Reserved.
        </div>
        <div className="flex flex-row font-bold text-white lg:items-end md:items-end sm:items-center xs:items-center lg:justify-end md:justify-end sm:justify-center xs:justify-center lg:mt-0 md:mt-0 sm:mt-5 xs:mt-3">
          <div>FAQs</div>
          <div className="ml-10">Về chúng tôi</div>
          <div className="ml-10">Liên hệ</div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
