import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const FooterComp = () => {
  return (
    <div className="flex flex-col bg-indigo-950 justify-center items-center">
      <div className="flex flex-row bg-white w-[70%] absolute rounded-lg mb-[500px] shadow-lg">
        <div className="flex w-[30%]">
          <img
            src="https://ca-times.brightspotcdn.com/dims4/default/55c6aba/2147483647/strip/true/crop/4000x6000+0+0/resize/1200x1800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6c%2F77%2F4ffc98cc4ac7984c43d03f8160e4%2Fet-top-gun-maverick-02.jpg"
            alt=""
            className="rounded-l-lg"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row mt-20">
            <div className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 ml-20">
              <input
                type="text"
                className="focus:outline-none m-2 w-[250px]"
                placeholder="Your name*"
              />
            </div>
            <div className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 ml-20">
              <input
                type="number"
                className="focus:outline-none m-2 w-[250px]"
                placeholder="Phone number*"
              />
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <div className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 ml-20">
              <input
                type="text"
                className="focus:outline-none m-2 w-[250px]"
                placeholder="Email*"
              />
            </div>
            <div className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 ml-20">
              <input
                type="number"
                className="focus:outline-none m-2 w-[250px]"
                placeholder="Subject*"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg border-[1px] border-gray-300 hover:border-indigo-800 ml-20 mt-10">
            {/* <input
              type="text"
              className="focus:outline-none m-2 w-[600px] text-start"
            /> */}
            <textarea
              name=""
              id=""
              placeholder="Message*"
              className="w-[600px] rounded-lg m-2"
            ></textarea>
          </div>
          <button className="bg-indigo-800 mt-6 flex flex-row h-[50px] w-[20%] text-white text-xs font-bold rounded-lg ml-20">
            <div className="m-4">GET STARTED</div>
            <div className="mt-[18px] mr-3">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row mt-[400px] border-b-[1px] border-gray-500">
        <div className="border-r-[1px] border-gray-500 mt-10 mb-10">
          <img
            className="w-[30%] mt-5 ml-4"
            src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/02/logo-white.svg"
            alt=""
          />
          <div className="text-gray-400 text-wrap w-[400px] mt-5">
            We are the best world Information Technology Company. Providing the
            highest quality in hardware, Software & Network solutions.
          </div>
        </div>
        <div className="border-r-[1px] border-gray-500 flex flex-col mt-10 ml-20 mb-10">
          <div className="text-white">Quick Links</div>
          <div className="flex flex-row text-sm text-gray-400 mr-20">
            <div>
              <div className="mt-2">Make Appointment</div>
              <div className="mt-2">Customer Services</div>
              <div className="mt-2">Department</div>
              <div className="mt-2">About Company</div>
            </div>
            <div className="ml-20">
              <div className="mt-2">Make Appointment</div>
              <div className="mt-2">Customer Services</div>
              <div className="mt-2">Department</div>
              <div className="mt-2">About Company</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white mt-10 ml-20">News Letter</div>
          <div className="mt-5 text-gray-400 ml-20 text-wrap w-[300px]">
            Sign up today for hints, tips and the latest product news
          </div>
          <div className="flex flex-row bg-white ml-20 rounded-lg mt-5">
            <div>
              <input
                type="text"
                name=""
                id=""
                className="focus:outline-none w-[200px] rounded-lg m-3 ml-4"
                placeholder="Your email"
              />
            </div>
            <div className="bg-indigo-800 text-white m-1 rounded-lg text-2xl font-thin ml-8">
              <div className="m-2">
                <FaRegPaperPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-10 mb-20">
        <div className="text-gray-400 mr-[650px]">
          Copyright © 2021 <span className="text-pink-500">editech</span>. All
          Rights Reserved.
        </div>
        <div className="flex flex-row text-white font-bold justify-end items-end">
            <div>FAQs</div>
            <div className="ml-10">About Us</div>
            <div className="ml-10">Contract Us</div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;