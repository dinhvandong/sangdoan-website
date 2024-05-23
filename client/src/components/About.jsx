import React from "react";
import { ImProfile } from "react-icons/im";
import { GiVendingMachine } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col w-full sm:justify-center sm:items-center lg:w-full md:w-full sm:w-auto">
      <div className="w-[320px] mb-10">
        <img
          src="https://demo2.themelexus.com/editech/wp-content/uploads/2021/02/h1-banner1.jpg"
          alt=""
        />
      </div>
      <div className="">
        <div className="font-bold text-indigo-800 ml-10">VỀ CHÚNG TÔI</div>
        <div className="text-3xl text-wrap lg:w-[500px] md:w-[500px] sm:w-[320px] xs:w-[220px] mt-10 ml-10 ">
          Chúng tôi xử lý các dịch vụ Công nghệ thông tin một cách chuyên
          nghiệp.
        </div>
        <div className="text-sm text-gray-500 mt-10 text-wrap lg:w-[600px] md:w-[600px] sm:w-[320px] xs:w-[220px] mb-10 ml-10">
          SangDoanICT là đối tác lựa chọn của nhiều doanh nghiệp hàng đầu trên
          thế giới, các doanh nghiệp vừa và những thách thức về công nghệ. Chúng
          tôi giúp các doanh nghiệp nâng cao giá trị của mình thông qua phát
          triển phần mềm tùy chỉnh, thiết kế sản phẩm
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-center items-center">
          <div className="flex flex-row border-[1px] border-gray-300 rounded-lg lg:w-[50%] md:w-[50%] sm:w-[80%] xs:w-[80%]">
            <div className="m-5 text-6xl font-thin text-indigo-800">
              <ImProfile />
            </div>
            <div>
              <p className="mt-3 text-lg font-bold">Experience</p>
              <p className="text-gray-500 text-sm mb-4 mt-2 text-wrap lg:w-[200px] md:w-[200px] sm:w-[120px] xs:w-[120px]">
                Đội ngũ tuyệt vời của chúng tôi có hơn 1400 chuyên gia phần mềm.
              </p>
            </div>
          </div>
          <div
            className="flex flex-row border-[1px] border-gray-300 rounded-lg lg:w-[50%] md:w-[50%] sm:w-[80%] xs:w-[80%] 
          lg:ml-7 md:ml-7 sm:ml-0 xs:ml-0 lg:mr-10 md:mr-10 sm:mr-0 xs:mr-0 lg:mt-0 md:mt-0 sm:mt-5 xs:mt-5"
          >
            <div className="m-5 text-6xl font-thin text-indigo-800">
              <GiVendingMachine />
            </div>
            <div>
              <p className="mt-3 text-lg font-bold">Experience</p>
              <p className="text-gray-500 text-sm mb-4 mt-2 text-wrap lg:w-[200px] md:w-[200px] sm:w-[120px] xs:w-[120px]">
                Chúng tôi có nhiều kinh nghiệp trong việc phát triển phần mềm,
                tư vấn các giải pháp về truyền thông.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm text-gray-500 text-wrap lg:w-full md:w-full sm:w-[300px] xs:w-[250px] lg:ml-0 md:ml-0 sm:ml-8 xs:ml-8">
          Chúng tôi luôn luôn cung cấp cho khách hàng những dịch vụ chất lượng
          và tốt nhất.
        </div>
        <button className="flex flex-row mt-10 text-xs font-bold text-white bg-indigo-800 rounded-lg sm:mb-10 xs:mb-10 lg:ml-0 md:ml-0 sm:ml-8 xs:ml-8">
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
