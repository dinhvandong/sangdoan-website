import React from "react";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdSettingsSuggest } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div
      className="flex flex-col items-center justify-center lg:w-full md:w-full sm:w-auto xs:w-[320px] h-full"
      style={{
        backgroundImage: `url('https://wallpaperswide.com/download/space_colors_blue_purple_stars-wallpaper-1920x1080.jpg')`,
      }}
    >
      <div className="mt-20 font-bold text-pink-600">
        TẠI SAO NÊN LỰA CHỌN CHÚNG TÔI
      </div>
      <div className="text-white lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl text-wrap lg:w-[600px] md:w-[600px] sm:w-[320px] xs:w-[300px] flex justify-center items-center text-center mt-10 mb-20">
        Chúng tôi luôn cung cấp cho khách hàng những dịch vụ tốt nhất hiện nay.
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col mt-10 mb-40">
        <div className="relative w-full h-64 ">
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform "></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform rotate-[60deg]"></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform -rotate-[60deg]"></div>
            <div className="absolute text-6xl text-white">
              <FaUsersViewfinder />
            </div>
          </div>
          <div className=" h-[230px] w-[250px] bg-gray-500 backdrop-blur-lg bg-opacity-50 border-[1px] border-gray-400 rounded-lg">
            <div className="relative text-center text-white">
              <div className="mt-20 text-lg">Tư vấn giải pháp</div>
              <div className="mt-5 ml-3 mr-3 text-sm text-gray-300">
                Thiết kế các sản phẩm và giải pháp phần mềm.
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 lg:ml-10 md;ml-10 sm:ml-0">
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform "></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform rotate-[60deg]"></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform -rotate-[60deg]"></div>
            <div className="absolute text-6xl text-white">
              <MdSettingsSuggest />
            </div>
          </div>
          <div className=" h-[230px] w-[250px] bg-gray-500 backdrop-blur-lg bg-opacity-50 border-[1px] border-gray-400 rounded-lg">
            <div className="relative text-center text-white">
              <div className="mt-20 text-lg">Xây dựng sản phẩm</div>
              <div className="mt-5 ml-3 mr-3 text-sm text-gray-300">
                Phát triển các sản phẩm phần mềm.
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 lg:ml-10 md;ml-10 sm:ml-0">
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform "></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform rotate-[60deg]"></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform -rotate-[60deg]"></div>
            <div className="absolute text-6xl text-white">
              <FaCloud />
            </div>
          </div>
          <div className=" h-[230px] w-[250px] bg-gray-500 backdrop-blur-lg bg-opacity-50 border-[1px] border-gray-400 rounded-lg">
            <div className="relative text-center text-white">
              <div className="mt-20 text-lg">Tích hợp nền tảng thanh toán</div>
              <div className="mt-5 ml-3 mr-3 text-sm text-gray-300">
                Cung cấp giải pháp cho việc thanh toán và xử lý giao dịch.
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 lg:ml-10 md;ml-10 sm:ml-0">
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform "></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform rotate-[60deg]"></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform -rotate-[60deg]"></div>
            <div className="absolute text-6xl text-white">
              <FaHandsHelping />
            </div>
          </div>
          <div className=" h-[230px] w-[250px] bg-gray-500 backdrop-blur-lg bg-opacity-50 border-[1px] border-gray-400 rounded-lg">
            <div className="relative text-center text-white">
              <div className="mt-20 text-lg">
                Dịch vụ quảng cáo truyền thông
              </div>
              <div className="mt-5 ml-3 mr-3 text-sm text-gray-300">
                Cung cấp các dịch vụ về công nghệ và truyền thông.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
