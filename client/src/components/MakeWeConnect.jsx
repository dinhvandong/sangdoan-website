import React from "react";
import ReactPlayer from "react-player";
import { FaArrowRight } from "react-icons/fa";

const MakeWeConnect = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center mt-24 relative">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Ttl8Gg-P-Ao"
          controls
          className="w-full h-full absolute"
        />
      </div>
      <div className="mt-60 font-bold text-indigo-800">WE MAKE CONNECTIONS</div>
      <div className="mt-5 text-5xl">Explore Recent Projects</div>
      <div className="text-sm text-gray-500 mt-5 text-wrap w-[800px] text-center">
        oftware development outsourcing is just a tool to achieve business
        goals. But there is no way to get worthwhile results without cooperation
        and trust between a client company.
      </div>
      <button className="bg-indigo-800 mt-6 ml-5 flex flex-row h-[50px] w-[9%] text-white text-xs font-bold rounded-lg">
        <div className="m-4">GET STARTED</div>
        <div className="mt-[18px] mr-3">
          <FaArrowRight />
        </div>
      </button>
      <div className="flex flex-row ">
        <div className="flex flex-col w-[400px] h-full justify-center items-center bg-white shadow-md mt-10 mb-20 rounded-lg">
          <div>
            <img
              src="https://img.freepik.com/free-photo/researchers-looking-alternative-energy-souces_23-2149311493.jpg"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="text-xs text-gray-500 mt-10">DESIGN/DEVELOPMENT</div>
          <div className="text-2xl mt-5 mb-10">Crypto App Project</div>
        </div>
        <div className="flex flex-col w-[400px] h-full justify-center items-center bg-white shadow-md mt-10 mb-20 rounded-lg ml-10">
          <div>
            <img
              src="https://img.freepik.com/free-photo/researchers-looking-alternative-energy-souces_23-2149311493.jpg"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="text-xs text-gray-500 mt-10">DESIGN/DEVELOPMENT</div>
          <div className="text-2xl mt-5 mb-10">Crypto App Project</div>
        </div>
        <div className="flex flex-col w-[400px] h-full justify-center items-center bg-white shadow-md mt-10 mb-20 rounded-lg ml-10">
          <div>
            <img
              src="https://img.freepik.com/free-photo/researchers-looking-alternative-energy-souces_23-2149311493.jpg"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="text-xs text-gray-500 mt-10">DESIGN/DEVELOPMENT</div>
          <div className="text-2xl mt-5 mb-10">Crypto App Project</div>
        </div>
      </div>
    </div>
  );
};

export default MakeWeConnect;
