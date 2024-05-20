import React from "react";
import { ImProfile } from "react-icons/im";
import { GiVendingMachine } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-full mb-10">
        <img
          src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/02/h1-banner1.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="font-bold text-indigo-800">ABOUT US</div>
        <div className="text-5xl text-wrap w-[500px] mt-10 ">
          We deal With The Aspects Of Professional IT Services
        </div>
        <div className="text-sm text-gray-500 mt-10 text-wrap w-[600px] mb-10">
          Engitech is the partner of choice for many of the world’s leading
          enterprises, SMEs and technology challengers. We help businesses
          elevate their value through custom software development, product
          design,
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row border-[1px] border-gray-300 rounded-lg w-[50%]">
            <div className="text-6xl font-thin text-indigo-800 m-5">
              <ImProfile />
            </div>
            <div>
              <p className="text-lg font-bold mt-3">Experience</p>
              <p className="text-gray-500 text-sm mb-4 mt-2 text-wrap w-[200px]">
                Our great team of more than 1400 software experts.
              </p>
            </div>
          </div>
          <div className="flex flex-row border-[1px] border-gray-300 rounded-lg w-[50%] ml-7 mr-10">
            <div className="text-6xl font-thin text-indigo-800 m-5">
              <GiVendingMachine />
            </div>
            <div>
              <p className="text-lg font-bold mt-3">Experience</p>
              <p className="text-gray-500 text-sm mb-4 mt-2 text-wrap w-[200px]">
                Our great team of more than 1400 software experts.
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit
          officiis provident quaerat natus. Molestias aspernatur, sint minima
          libero veniam est praesentium, earum minus officiis alias suscipit
          dicta quae atque.
        </div>
        <button className="bg-indigo-800 mt-10 flex flex-row text-white text-xs font-bold rounded-lg">
          <div className="m-4">READ MORE</div>
          <div className="mt-[18px] mr-3">
            <FaArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default About;
