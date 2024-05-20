import React from "react";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdSettingsSuggest } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center"
      style={{
        backgroundImage: `url('https://wallpaperswide.com/download/space_colors_blue_purple_stars-wallpaper-1920x1080.jpg')`,
      }}
    >
      <div className="text-pink-600 font-bold mt-20">WHY CHOOES US</div>
      <div className="text-white text-4xl text-wrap w-[600px] flex justify-center items-center text-center mt-10 mb-20">
        How Ghy Help of Your Business Grow And Successful
      </div>
      <div className="flex flex-row mt-10 mb-40">
        <div className="relative h-64 w-full ">
          <div className="relative z-10 justify-center items-center flex">
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform "></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform rotate-[60deg]"></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform -rotate-[60deg]"></div>
            <div className="absolute text-6xl text-white">
              <FaUsersViewfinder />
            </div>
          </div>
          <div className=" h-[230px] w-[250px] bg-gray-500 backdrop-blur-lg bg-opacity-50 border-[1px] border-gray-400 rounded-lg">
            <div className="relative text-white text-center">
              <div className="text-lg mt-20">IT Design Project</div>
              <div className="text-sm text-gray-300 mt-5 mr-3 ml-3">
                Design and propose product improvements through periodical and
                accurate testing.
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full ml-10">
          <div className="relative z-10 justify-center items-center flex">
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform "></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform rotate-[60deg]"></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform -rotate-[60deg]"></div>
            <div className="absolute text-6xl text-white">
              <MdSettingsSuggest />
            </div>
          </div>
          <div className=" h-[230px] w-[250px] bg-gray-500 backdrop-blur-lg bg-opacity-50 border-[1px] border-gray-400 rounded-lg">
            <div className="relative text-white text-center">
              <div className="text-lg mt-20">Product Engineer</div>
              <div className="text-sm text-gray-300 mt-5 mr-3 ml-3">
                Develop and propose product improvements through periodical and
                accurate testing.
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full ml-10">
          <div className="relative z-10 justify-center items-center flex">
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform "></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform rotate-[60deg]"></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform -rotate-[60deg]"></div>
            <div className="absolute text-6xl text-white">
              <FaCloud />
            </div>
          </div>
          <div className=" h-[230px] w-[250px] bg-gray-500 backdrop-blur-lg bg-opacity-50 border-[1px] border-gray-400 rounded-lg">
            <div className="relative text-white text-center">
              <div className="text-lg mt-20">Cloud Integration</div>
              <div className="text-sm text-gray-300 mt-5 mr-3 ml-3">
                Cloud Integrate for product improvements through periodical and
                accurate testing.
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full ml-10">
          <div className="relative z-10 justify-center items-center flex">
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform "></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform rotate-[60deg]"></div>
            <div className="absolute w-[81px] h-[140px] bg-pink-400 transform -rotate-[60deg]"></div>
            <div className="absolute text-6xl text-white">
              <FaHandsHelping />
            </div>
          </div>
          <div className=" h-[230px] w-[250px] bg-gray-500 backdrop-blur-lg bg-opacity-50 border-[1px] border-gray-400 rounded-lg">
            <div className="relative text-white text-center">
              <div className="text-lg mt-20">IT Consultancy</div>
              <div className="text-sm text-gray-300 mt-5 mr-3 ml-3">
                IT Consultancy for products improvements through periodical and
                accurate testing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
