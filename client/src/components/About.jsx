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
        <div className="font-bold text-indigo-800">VỀ CHÚNG TÔI</div>
        <div className="text-3xl text-wrap w-[500px] mt-10 ">
          Chúng tôi xử lý các dịch vụ Công nghệ thông tin một cách chuyên nghiệp.

        </div>
        <div className="text-sm text-gray-500 mt-10 text-wrap w-[600px] mb-10">
        SangDoanICT là đối tác lựa chọn của nhiều doanh nghiệp hàng đầu trên thế giới, các doanh nghiệp vừa và những thách thức về công nghệ. Chúng tôi giúp các doanh nghiệp nâng cao giá trị của mình thông qua phát triển phần mềm tùy chỉnh, thiết kế sản phẩm
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row border-[1px] border-gray-300 rounded-lg w-[50%]">
            <div className="m-5 text-6xl font-thin text-indigo-800">
              <ImProfile />
            </div>
            <div>
              <p className="mt-3 text-lg font-bold">Experience</p>
              <p className="text-gray-500 text-sm mb-4 mt-2 text-wrap w-[200px]">
              Đội ngũ tuyệt vời của chúng tôi có hơn 1400 chuyên gia phần mềm.

</p>
            </div>
          </div>
          <div className="flex flex-row border-[1px] border-gray-300 rounded-lg w-[50%] ml-7 mr-10">
            <div className="m-5 text-6xl font-thin text-indigo-800">
              <GiVendingMachine />
            </div>
            <div>
              <p className="mt-3 text-lg font-bold">Experience</p>
              <p className="text-gray-500 text-sm mb-4 mt-2 text-wrap w-[200px]">
                Chúng tôi có nhiều kinh nghiệp trong việc phát triển phần mềm, tư vấn các giải pháp về truyền thông.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm text-gray-500">
          Chúng tôi luôn luôn cung cấp cho khách hàng những dịch vụ chất lượng và tốt nhất.
        </div>
        <button className="flex flex-row mt-10 text-xs font-bold text-white bg-indigo-800 rounded-lg">
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
