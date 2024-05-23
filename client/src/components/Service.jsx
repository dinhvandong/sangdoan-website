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
    <div className="flex flex-col lg:w-full md:w-full sm:w-auto xs:w-[320px]">
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col">
        <div className="flex flex-col mt-20 mb-10 ml-10">
          <div className="font-bold text-indigo-800">DỊCH VỤ CỦA CHÚNG TÔI</div>
          <div className="text-2xl mt-5 text-wrap lg:w-[500px] md:w-[500px] sm:w-[320px]">
            Chúng tôi cung cấp đa dạng các giải pháp về công nghệ thông tin và
            truyền thông
          </div>
        </div>
        <div className="flex flex-row lg:mr-10 md:mr-10 sm:mr-0 xs:mr-0 lg:mb-0 md:mb-0 sm:mb-10 xs:mb-10
        lg:mt-36 md:mt-36 sm:mt-0 lg:ml-52 md:ml-52 sm:ml-20 xs:ml-10">
          <div className="text-sm text-gray-500 text-wrap lg:w-full md:w-full sm:w-[200px] xs:w-[200px]">
            Thiết kế web không chỉ đơn thuần là một nghề nghiệp mạnh mẽ, mà còn
            là một niềm đam mê của chúng tôi đối với Công ty. Chúng tôi tin rằng
            ý tưởng về giao diện hấp dẫn là quan trọng.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
