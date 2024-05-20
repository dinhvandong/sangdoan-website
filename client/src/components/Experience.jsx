import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { SiSoundcharts } from "react-icons/si";

const Experience = () => {
  return (
    <div className="flex flex-row w-[90%] justify-center mb-20">
      <div className="flex flex-col w-[50%]">
        <div className="text-indigo-800 font-bold">OUR EXPERIENCE</div>
        <div className="text-5xl mt-5">Experts With Experiecne</div>
        <div className="text-sm text-gray-500 mt-5 text-wrap w-[80%]">
          Quality & Customer version of lorem ipsum proin gravida nibh vel velit
          auctor aliquet aenean sollicitudin lorem quis bibendum auctor nisi
          elit consequat ipsum nec sagittis sem nibh id elit.
        </div>
        <div className="flex flex-row mt-10 mb-10 border-b-[1px] border-gray-300">
          <div className="flex flex-col mb-10">
            <div className="flex flex-row justify-center items-center">
              <div className="text-indigo-600">
                <FaCheckCircle />
              </div>
              <div className="ml-5">Proin gravida nibh vel</div>
            </div>
            <div className="flex flex-row justify-center items-center mt-2">
              <div className="text-indigo-600">
                <FaCheckCircle />
              </div>
              <div className="ml-5">Proin gravida nibh vel</div>
            </div>
            <div className="flex flex-row justify-center items-center mt-2">
              <div className="text-indigo-600">
                <FaCheckCircle />
              </div>
              <div className="ml-5">Proin gravida nibh vel</div>
            </div>
          </div>
          <div className="flex flex-col ml-20 mb-10 ">
            <div className="flex flex-row justify-center items-center">
              <div className="text-indigo-600">
                <FaCheckCircle />
              </div>
              <div className="ml-5">Proin gravida nibh vel</div>
            </div>
            <div className="flex flex-row justify-center items-center mt-2">
              <div className="text-indigo-600">
                <FaCheckCircle />
              </div>
              <div className="ml-5">Proin gravida nibh vel</div>
            </div>
            <div className="flex flex-row justify-center items-center mt-2">
              <div className="text-indigo-600">
                <FaCheckCircle />
              </div>
              <div className="ml-5">Proin gravida nibh vel</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mb-10">
          <div className="text-5xl text-indigo-800">
            <SiSoundcharts />
          </div>
          <div className="flex flex-col ml-5">
            <div className="text-xl">Best Practices From Industry Experts</div>
            <div className="mt-5 text-sm text-gray-500 text-wrap w-[80%]">
              We’ve designed a culture that allows our stewards to assimilate
              with our clients and bring.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
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
          <div className="text-6xl text-pink-500 mt-10 ml-20 mr-20">
            35+
          </div>
          <div className="font-bold text-center mt-5 mb-10">
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
          <div className="ml-28 z-10 ">
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
