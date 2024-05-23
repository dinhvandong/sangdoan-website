import React from "react";
import ReactPlayer from "react-player";
import { FaArrowRight } from "react-icons/fa";

const MakeWeConnect = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-full md:w-full sm:w-[320px] xs:w-[320px]">
      <div className="relative flex items-center justify-center mt-24 w-[320px]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Ttl8Gg-P-Ao"
          controls
          className="absolute lg:w-full md:w-full sm:w-[50%] xs:w-[50%]"
        />
      </div>
      <div className="font-bold text-indigo-800 mt-60">
        CHÚNG TÔI TẠO RA SỰ KẾT NỐI
      </div>
      <div className="mt-5 lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-center ">Khám phá các dự án gần đây</div>
      <div className="text-sm text-gray-500 mt-5 text-wrap lg:w-[800px] md:w-[800px] sm:w-[500px] xs:w-[280px] text-center">
        Outsourcing phát triển phần mềm chỉ là một công cụ để đạt được mục tiêu
        kinh doanh. Nhưng không có cách nào để đạt được kết quả đáng giá mà
        không có sự hợp tác và lòng tin giữa công ty khách hàng và nhà cung cấp
        dịch vụ.
      </div>
      <button className="bg-indigo-800 mt-6 ml-5 flex flex-row h-[50px] lg:w-[9%] md:w-[9%] sm:w-[140px] xs:w-[140px] text-white text-xs font-bold rounded-lg">
        <div className="m-4">GET STARTED</div>
        <div className="mt-[18px] mr-3">
          <FaArrowRight />
        </div>
      </button>
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:w-full md:w-full sm:w-[320px] justify-center items-center">
        <div className="flex flex-col lg:w-[400px] md:w-[400px] sm:w-[320px] xs:w-[300px] h-full justify-center items-center bg-white shadow-md mt-10 lg:mb-20 md:mb-20 sm:mb-0 rounded-lg">
          <div>
            <img
              src="https://www.eweblink.net/travelcrm/assets/img/bookmatic-travel-crm-dashboard.png"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="mt-10 text-xs text-gray-500">DESIGN/DEVELOPMENT</div>
          <div className="mt-5 mb-10 text-2xl text-center">
            Dự án Website Booking Tour cho khách du lịch
          </div>
        </div>
        <div className="flex flex-col lg:w-[400px] md:w-[400px] sm:w-[320px] xs:w-[300px] h-full justify-center items-center bg-white shadow-md mt-10 lg:mb-20 md:mb-20 sm:mb-0 rounded-lg lg:ml-10 md:ml-10 sm:ml-0">
          <div>
            <img
              src="https://cdn.dribbble.com/users/1726280/screenshots/10556530/movie_cinema_website_design_4x.jpg"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="mt-10 text-xs text-gray-500">DESIGN/DEVELOPMENT</div>
          <div className="mt-5 mb-10 text-2xl text-center">
            Phần mềm xem phim trực tuyến
          </div>
        </div>
        <div className="flex flex-col lg:w-[400px] md:w-[400px] sm:w-[320px] xs:w-[300px] h-full justify-center items-center bg-white shadow-md mt-10 mb-20 rounded-lg lg:ml-10 md:ml-10 sm:ml-0">
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
