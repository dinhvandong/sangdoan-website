import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const Service = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col mt-20 ml-20 mb-10">
          <div className="text-indigo-800 font-bold">OUR SERVICE</div>
          <div className="text-5xl mt-5 text-wrap w-[500px]">
            We Offer a Wide Variety of IT Services
          </div>
        </div>
        <div className="flex flex-row mt-36 mr-10 ml-52">
          <div className="text-wrap w-[400px] text-sm text-gray-500">
            Web designing in a powerful way of just not a profession, however,
            in a passion for our Company. We have a tendency to believe the idea
            that smart looking.
          </div>
          <button className="bg-indigo-800 mt-6 ml-5 flex flex-row h-[50px] w-[25%] text-white text-xs font-bold rounded-lg">
            <div className="m-4">GET STARTED</div>
            <div className="mt-[18px] mr-3">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Service;
