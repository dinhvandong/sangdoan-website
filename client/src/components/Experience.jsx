import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { SiSoundcharts } from "react-icons/si";

const Experience = () => {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:w-[90%] md:w-[90%] sm:w-auto xs:w-[320px] justify-center mb-20 ">
      <div className="flex flex-col  lg:items-start md:items-start sm:items-center lg:w-[50%] md:w-[50%] sm:w-full">
        <div className="flex flex-col lg:justify-normal md:justify-normal sm:justify-center xs:justify-center lg:items-start md:items-start sm:items-center xs:items-center">
          <div className="font-bold text-indigo-800">KINH NGHIỆM CỦA CHÚNG TÔI</div>
          <div className="mt-5 text-5xl text-center">Các chuyên gia nhiều năm kinh nghiệm</div>
          <div className="text-sm text-gray-500 mt-5 text-wrap w-[80%] lg:text-start md:text-start sm:text-center xs:text-center">
            Chúng tôi với hơn 100 chuyên gia kinh nghiệm trong nhiều lĩnh vực về công nghệ và truyền thông - marketing cho doanh nghiệp.
          </div>
        </div>
        <div className="flex flex-col lg:justify-normal md:justify-normal sm:justify-center xs:justify-center lg:items-start md:items-start sm:items-center xs:items-center">
          <div className="flex flex-row mt-10 mb-10 border-b-[1px] border-gray-300 w-[80%] lg:text-base md:text-base sm:text-sm xs:text-sm">
            <div className="flex flex-col mb-10">
              <div className="flex flex-row items-center justify-center">
                <div className="text-indigo-600">
                  <FaCheckCircle />
                </div>
                <div className="ml-5">Xây dựng hệ thống quản trị cho doanh nghiệp</div>
              </div>
              <div className="flex flex-row items-center justify-center mt-2">
                <div className="text-indigo-600">
                  <FaCheckCircle />
                </div>
                <div className="ml-5">Xây dựng website bán hàng cho doanh nghiệp</div>
              </div>
              <div className="flex flex-row items-center justify-center mt-2">
                <div className="text-indigo-600">
                  <FaCheckCircle />
                </div>
                <div className="ml-5">Xây dựng ứng dụng trên mobile cho doanh nghiệp dễ dàng quản lý và thao tác</div>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:ml-20 md:ml-20 sm:ml-20 xs:ml-10 ">
              <div className="flex flex-row items-center justify-center">
                <div className="text-indigo-600">
                  <FaCheckCircle />
                </div>
                <div className="ml-5">Xây dựng các phần mềm hỗ trợ marketing cho doanh nghiệp</div>
              </div>
              <div className="flex flex-row items-center justify-center mt-2">
                <div className="text-indigo-600">
                  <FaCheckCircle />
                </div>
                <div className="ml-5">Tư vấn giải pháp công nghệ </div>
              </div>
              <div className="flex flex-row items-center justify-center mt-2">
                <div className="text-indigo-600">
                  <FaCheckCircle />
                </div>
                <div className="ml-5">Tư vấn giải pháp marketing cho doanh nghiệp</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mb-10 lg:w-full md:w-full sm:w-[80%] xs:w-[80%]">
            <div className="text-5xl text-indigo-800">
              <SiSoundcharts />
            </div>
            <div className="flex flex-col ml-5">
              <div className="text-xl">
                Kinh nghiệm thực tế từ các chuyên gia
              </div>
              <div className="mt-5 text-sm text-gray-500 text-wrap w-[80%]">
                Chúng tôi đã thực hiện thành công nhiều dự án cho doanh nghiệp và các cá nhân.
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <div className="">
            <img
              src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/03/h1-banner01.jpg"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="ml-20">
            <img
              src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/03/h1-banner03.jpg"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="absolute bg-white rounded-lg shadow-md">
          <div className="mt-10 ml-20 mr-20 text-6xl text-pink-500">35+</div>
          <div className="mt-5 mb-10 font-bold text-center">
            Satisfied Client
          </div>
        </div>
        <div className="flex flex-row mt-20">
          <div className="">
            <img
              src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/03/h1-banner02.jpg"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="z-10 ml-28 ">
            <img
              src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/03/h1-banner04.jpg"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
