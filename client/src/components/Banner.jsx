import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url('https://itempire.net/web/images/software-houses-in-pakistan.jpg')`,
      }}>
      <div className='absolute w-full h-full bg-black opacity-50'>

      </div >
      <div className='absolute w-full h-full'>
        <div className='flex flex-col w-full h-full'>

          <div className='mt-20 mb-5 ml-5 text-white'>
            GIẢI PHÁP CHO VIỆC TĂNG TRƯỞNG KINH DOANH
          </div>
          <div className='text-white text-7xl text-wrap w-[500px] ml-5 mb-5'>
            <p>Từ ý tưởng đến hoàn thiện sản phẩm</p>
          </div>
          <div className='text-white text-wrap w-[400px] ml-5'>
            Nhận các giải pháp chuyên nghiệp và đáng tin cậy, tập trung vào nghiên cứu cho các nhu cầu kinh doanh về Khoa học Dữ liệu và Học máy!
          </div>
          <button className="bg-indigo-800 mt-6 ml-5 flex flex-row h-[50px] w-[150px] text-white text-xs font-bold rounded-lg">
            <div className="m-4">BẮT ĐẦU</div>
            <div className="mt-[18px] mr-3">
              <FaArrowRight />
            </div>
          </button>

        </div>

      </div>

    </div>
  )
}

export default Banner