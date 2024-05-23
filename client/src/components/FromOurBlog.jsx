import React from "react";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
// import { CgAdidas } from "react-icons/cg";

const FromOurBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-full md:w-full sm:w-auto xs:w-[320px]">
      <div className="mt-20 font-bold text-indigo-800">TIN TỨC TỪ DOANH NGHIỆP</div>
      <div className="mt-5 text-center lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl">
        Xem các tin tức từ doanh nghiệp
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col">
        <div className="flex flex-col lg:w-[400px] md:w-[400px] sm:w-[320px] xs:w-[300px] h-full justify-center items-center bg-white shadow-md mt-10 lg:mb-20 md:mb-20 sm:mb-5 rounded-lg">
          <div>
            <img
              src="https://www.freecodecamp.org/news/content/images/2022/12/software-development-team.jpg"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="absolute flex flex-row lg:mt-20 md:mt-20 sm:mt-20 xs:mb-3 lg:ml-0 md:ml-0 sm:ml-16 xs:ml-16 ">
            <div className="text-xs text-white bg-indigo-800 rounded-lg hover:cursor-pointer ">
              <p className="m-3">Giải pháp tư vấn</p>
            </div>
            <div className="ml-2 text-xs text-white bg-pink-600 rounded-lg hover:cursor-pointer mr-28">
              <p className="m-3">Đặt lịch hẹn</p>
            </div>
          </div>
          {/* <div className="flex flex-row items-center justify-start mt-10 text-start mr-28 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-7">
            <div className="">
              <CiCalendar />
            </div>
            <div className="ml-2 text-sm text-gray-500 ">FEBRUARY 1, 2021</div>
            <div className="ml-2">
              <CiUser />
            </div>
            <div className="ml-1 text-sm text-gray-500">By</div>
            <div className="ml-2 text-sm font-bold text-indigo-800">ADMIN</div>
          </div> */}
          <div className="text-xl mt-[30px] text-start text-wrap w-[300px] mr-10 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-16">
            Tư vấn cho doanh nghiệp về các giải pháp marketing và truyền thông.
          </div>
          <div className="flex items-start justify-start mb-5">
            <button className=" flex flex-row h-[50px] text-indigo-800 text-xs font-bold rounded-lg lg:mr-60 md:mr-60 sm:mr-60 xs:mr-40 mt-1">
              <div className="m-4">GET STARTED</div>
              <div className="mt-[18px] mr-3">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div
          className="flex flex-col lg:w-[400px] md:w-[400px] sm:w-[320px] xs:w-[300px] h-full justify-center items-center bg-white shadow-md mt-10 lg:mb-20 md:mb-20 sm:mb-5 rounded-lg
        lg:ml-10 md:ml-10 sm:ml-0 xs:ml-0"
        >
          <div>
            <img
              src="https://www.freecodecamp.org/news/content/images/2022/12/software-development-team.jpg"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="absolute flex flex-row lg:mt-20 md:mt-20 sm:mt-20 xs:mb-3 lg:ml-0 md:ml-0 sm:ml-16 xs:ml-16 ">
            <div className="text-xs text-white bg-indigo-800 rounded-lg hover:cursor-pointer ">
              <p className="m-3">Hệ thống marketing doanh nghiệp</p>
            </div>
            <div className="ml-2 text-xs text-white bg-pink-600 rounded-lg hover:cursor-pointer mr-28">
              <p className="m-3">Đặt lịch hẹn</p>
            </div>
          </div>
          {/* <div className="flex flex-row items-center justify-start mt-10 text-start mr-28 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-7">
            <div className="">
              <CiCalendar />
            </div>
            <div className="ml-2 text-sm text-gray-500">FEBRUARY 1, 2021</div>
            <div className="ml-2">
              <CiUser />
            </div>
            <div className="ml-1 text-sm text-gray-500">By</div>
            <div className="ml-2 text-sm font-bold text-indigo-800">ADMIN</div>
          </div> */}
          <div className="text-xl mt-[30px] text-start text-wrap w-[300px] mr-10 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-16">
            Phát triển hệ thống web/app để phục vụ quản trị doanh nghiệp
          </div>
          <div className="flex items-start justify-start mb-5">
            <button className=" flex flex-row h-[50px] text-indigo-800 text-xs font-bold rounded-lg lg:mr-60 md:mr-60 sm:mr-60 xs:mr-40 mt-1">
              <div className="m-4">GET STARTED</div>
              <div className="mt-[18px] mr-3">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div
          className="flex flex-col lg:w-[400px] md:w-[400px] sm:w-[320px] xs:w-[300px] h-full justify-center items-center bg-white shadow-md mt-10 lg:mb-20 md:mb-20 sm:mb-5 rounded-lg
        lg:ml-10 md:ml-10 sm:ml-0 xs:ml-0"
        >
          <div>
            <img
              src="https://www.freecodecamp.org/news/content/images/2022/12/software-development-team.jpg"
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="absolute flex flex-row lg:mt-20 md:mt-20 sm:mt-20 xs:mb-3 lg:ml-0 md:ml-0 sm:ml-16 xs:ml-16 ">
            <div className="text-xs text-white bg-indigo-800 rounded-lg hover:cursor-pointer ">
              <p className="m-3">Phát triển web/app</p>
            </div>
            <div className="ml-2 text-xs text-white bg-pink-600 rounded-lg hover:cursor-pointer mr-28">
              <p className="m-3">Đặt lịch hẹn</p>
            </div>
          </div>
          {/* <div className="flex flex-row items-center justify-start mt-10 text-start mr-28 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-7">
            <div className="">
              <CiCalendar />
            </div>
            <div className="ml-2 text-sm text-gray-500 ">FEBRUARY 1, 2021</div>
            <div className="ml-2">
              <CiUser />
            </div>
            <div className="ml-1 text-sm text-gray-500">By</div>
            <div className="ml-2 text-sm font-bold text-indigo-800">ADMIN</div>
          </div> */}
          <div className="text-xl mt-[30px] text-start text-wrap w-[300px] mr-10 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-16">
            Tư vấn giải pháp về thanh toán trực tuyến cho doanh nghiệp
          </div>
          <div className="flex items-start justify-start mb-5">
            <button className=" flex flex-row h-[50px] text-indigo-800 text-xs font-bold rounded-lg lg:mr-60 md:mr-60 sm:mr-60 xs:mr-40 mt-1">
              <div className="m-4">GET STARTED</div>
              <div className="mt-[18px] mr-3">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-[90%] lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center justify-center mb-20 text-gray-500">
        <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-row xs:flex-col lg:mt-0 md:mt-0 sm:mt-0 xs:mt-10">
          <div className="flex flex-row items-center justify-center">
            <div className="text-5xl">
              <img
                src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_640.png"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="ml-2 text-xl">Microsoft</div>
          </div>
          <div className="flex flex-row items-center justify-center lg:ml-10 md:ml-10 sm:ml-10 lg:mt-0 md:mt-0 sm:mt-5 xs:mt-5">
            <div className="text-5xl">
              <img
                src="https://itexamviet.com/wp-content/uploads/2021/07/aws-2.jpg"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="ml-2 text-xl">Amazon WebService</div>
          </div>
          <div className="flex flex-row items-center justify-center lg:ml-10 md:ml-10 sm:ml-10 lg:mt-0 md:mt-0 sm:mt-5 xs:mt-5">
            <div className="text-5xl">
              <img
                src="https://images.ctfassets.net/23aumh6u8s0i/6wTbGkTM3EBoO6hytvOcXj/d0144f86227382219fd2c8f4f53499c6/illustration"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="ml-2 text-xl">MongoDB-NoSQL</div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-row xs:flex-col lg:mt-0 md:mt-0 sm:mt-10 xs:mt-0">
          <div className="flex flex-row items-center justify-center lg:ml-10 md:ml-10 sm:ml-0 lg:mt-0 md:mt-0 sm:mt-5 xs:mt-5">
            <div className="text-5xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltfc7kHXJWyA9xfFNj5mSSk4ReOJ8GncRifmvIDtrA-FlxkdAQTA6MA8vN8aPOc4bl1Q&usqp=CAU"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="ml-2 text-xl">Java SpringBoot</div>
          </div>
          <div className="flex flex-row items-center justify-center lg:ml-10 md:ml-10 sm:ml-10 lg:mt-0 md:mt-0 sm:mt-5 xs:mt-5">
            <div className="text-5xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="ml-2 text-xl">Apple Store</div>
          </div>
          <div className="flex flex-row items-center justify-center lg:ml-10 md:ml-10 sm:ml-10 lg:mt-0 md:mt-0 sm:mt-5 xs:mt-5">
            <div className="text-5xl">
              <img
                src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_640.png"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="ml-2 text-xl">Microsoft</div>
          </div>
        </div>
      </div>
      <div className="font-bold text-indigo-800">LIÊN HỆ VỚI CHÚNG TÔI</div>
      <div className="mt-5 mb-40 text-5xl text-center">Chúng tôi luôn ở đây để giúp đỡ các bạn.</div>
    </div>
  );
};

export default FromOurBlog;
