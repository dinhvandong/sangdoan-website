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
        <div className="flex flex-col mt-20 mb-10 ml-20">
          <div className="font-bold text-indigo-800">DỊCH VỤ CỦA CHÚNG TÔI</div>
          <div className="text-2xl mt-5 text-wrap w-[500px]">
            Chúng tôi cung cấp đa dạng các giải pháp về công nghệ thông tin và truyền thông
          </div>
        </div>
        <div className="flex flex-row mr-10 mt-36 ml-52">
          <div className="text-sm text-gray-500 text-wrap">
          Thiết kế web không chỉ đơn thuần là một nghề nghiệp mạnh mẽ, mà còn là một niềm đam mê của chúng tôi đối với Công ty. Chúng tôi tin rằng ý tưởng về giao diện hấp dẫn là quan trọng.
          </div>
          {/* <button className="bg-indigo-800 mt-6 ml-5 flex flex-row h-[50px] w-[25%] text-white text-xs font-bold rounded-lg">
            <div className="m-4">GET STARTED</div>
            <div className="mt-[18px] mr-3">
              <FaArrowRight />
            </div>
          </button> */}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Service;
