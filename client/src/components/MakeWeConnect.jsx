import React from "react";
import ReactPlayer from "react-player";
import { FaArrowRight } from "react-icons/fa";

const MakeWeConnect = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center mt-24 ">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Ttl8Gg-P-Ao"
          controls
          className="absolute w-full h-full"
        />
      </div>
      <div className="font-bold text-indigo-800 mt-60">CHÚNG TÔI TẠO RA SỰ KẾT NỐI</div>
      <div className="mt-5 text-5xl">Khám phá các dự án gần đây</div>
      <div className="text-sm text-gray-500 mt-5 text-wrap w-[800px] text-center">
      Outsourcing phát triển phần mềm chỉ là một công cụ để đạt được mục tiêu kinh doanh. Nhưng không có cách nào để đạt được kết quả đáng giá mà không có sự hợp tác và lòng tin giữa công ty khách hàng và nhà cung cấp dịch vụ.
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
              src="https://www.eweblink.net/travelcrm/assets/img/bookmatic-travel-crm-dashboard.png"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="mt-10 text-xs text-gray-500">DESIGN/DEVELOPMENT</div>
          <div className="mt-5 mb-10 text-2xl">Dự án Website Booking Tour cho khách du lịch</div>
        </div>
        <div className="flex flex-col w-[400px] h-full justify-center items-center bg-white shadow-md mt-10 mb-20 rounded-lg ml-10">
          <div>
            <img
              src="https://cdn.dribbble.com/users/1726280/screenshots/10556530/movie_cinema_website_design_4x.jpg"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="mt-10 text-xs text-gray-500">DESIGN/DEVELOPMENT</div>
          <div className="mt-5 mb-10 text-2xl">Phần mềm xem phim trực tuyến</div>
        </div>
        <div className="flex flex-col w-[400px] h-full justify-center items-center bg-white shadow-md mt-10 mb-20 rounded-lg ml-10">
          <div>
            <img
              src="https://writeupcafe.com/wp-content/uploads/2020/09/crypto-wallet-development-1.png"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="mt-10 text-xs text-gray-500">DESIGN/DEVELOPMENT</div>
          <div className="mt-5 mb-10 text-2xl">Dự án về Crypto</div>
        </div>
      </div>
    </div>
  );
};

export default MakeWeConnect;
