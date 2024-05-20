import React from "react";
import { PiChatCircleFill } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const TechnologyIndex = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white absolute flex flex-row z-20 shadow-lg rounded-lg mb-[600px]">
        <div className="w-[40%] mt-10 ml-10 mb-10">
          <div className="text-indigo-800 font-bold ">OUR CLIENT'S</div>
          <div className="text-5xl mt-5">Trusted From Over 1,500 Clients</div>
        </div>
        <div className="flex flex-col w-[50%] mt-10 ml-10 mb-10">
          <div className="text-gray-500 text-wrap w-[500px]">
            "Great team to work with, they understood my requirements and helped
            me go live within hours, and delivered the results ahead of
            schedule."
          </div>
          <div className="flex flex-row mt-5">
            <div className="flex flex-row">
              <div className="text-6xl absolute">
                <PiChatCircleFill />
              </div>
              <div className="w-[50px] h-[50px] ml-10">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                  alt=""
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="ml-5 mt-2">
              <div className="font-bold">Tom Cruise</div>
              <div className="text-sm text-gray-500">Actor</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('https://wallpapers.com/images/featured/blue-gray-background-10abwhajm4nwc3ps.jpg')`,
        }}
      >
        <div className="text-indigo-800 font-bold mt-60">TECHNOLOGY INDEX</div>
        <div className="text-5xl mt-5 text-wrap w-[900px] text-center text-white">
          We Deliver Solution with the Goal of Trusting Relationships
        </div>
        <div className="flex flex-row mt-20 mb-10">
          <div className="flex flex-col justify-center items-center">
            <div className="relative z-10 justify-center items-center flex">
              <div className=" w-[81px] h-[140px] bg-indigo-800 transform "></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform rotate-[60deg]"></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform -rotate-[60deg]"></div>
              <div className="absolute text-6xl text-white">
                <AiOutlineFundProjectionScreen />
              </div>
            </div>
            <div className="text-lg text-white mt-5">Web Design</div>
            <div className="text-sm text-gray-300 mt-3 text-wrap w-[200px] text-center">Topnotch & modern design for website.</div>
          </div>
          <div className="flex flex-col justify-center items-center text-wrap w-[200px] text-center ml-10">
            <div className="relative z-10 justify-center items-center flex">
              <div className=" w-[81px] h-[140px] bg-indigo-800 transform "></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform rotate-[60deg]"></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform -rotate-[60deg]"></div>
              <div className="absolute text-6xl text-white">
                <AiOutlineFundProjectionScreen />
              </div>
            </div>
            <div className="text-lg text-white mt-5">Web Design</div>
            <div className="text-sm text-gray-300 mt-3">Topnotch & modern design for website.</div>
          </div>
          <div className="flex flex-col justify-center items-center text-wrap w-[200px] text-center ml-10">
            <div className="relative z-10 justify-center items-center flex">
              <div className=" w-[81px] h-[140px] bg-indigo-800 transform "></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform rotate-[60deg]"></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform -rotate-[60deg]"></div>
              <div className="absolute text-6xl text-white">
                <AiOutlineFundProjectionScreen />
              </div>
            </div>
            <div className="text-lg text-white mt-5">Web Design</div>
            <div className="text-sm text-gray-300 mt-3">Topnotch & modern design for website.</div>
          </div>
          <div className="flex flex-col justify-center items-center text-wrap w-[200px] text-center ml-10">
            <div className="relative z-10 justify-center items-center flex">
              <div className=" w-[81px] h-[140px] bg-indigo-800 transform "></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform rotate-[60deg]"></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform -rotate-[60deg]"></div>
              <div className="absolute text-6xl text-white">
                <AiOutlineFundProjectionScreen />
              </div>
            </div>
            <div className="text-lg text-white mt-5">Web Design</div>
            <div className="text-sm text-gray-300 mt-3">Topnotch & modern design for website.</div>
          </div>
          <div className="flex flex-col justify-center items-center text-wrap w-[200px] text-center ml-10">
            <div className="relative z-10 justify-center items-center flex">
              <div className=" w-[81px] h-[140px] bg-indigo-800 transform "></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform rotate-[60deg]"></div>
              <div className="absolute w-[81px] h-[140px] bg-indigo-800 transform -rotate-[60deg]"></div>
              <div className="absolute text-6xl text-white">
                <AiOutlineFundProjectionScreen />
              </div>
            </div>
            <div className="text-lg text-white mt-5">Web Design</div>
            <div className="text-sm text-gray-300 mt-3">Topnotch & modern design for website.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyIndex;
