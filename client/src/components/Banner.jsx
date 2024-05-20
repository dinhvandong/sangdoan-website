import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] bg-cover bg-center flex flex-col"
    style={{
      backgroundImage: `url('https://itempire.net/web/images/software-houses-in-pakistan.jpg')`,
    }}>
        <div className='mt-20 mb-5 ml-5 text-white'>
            GROWTH YOUR BUSINESS
        </div>
        <div className='text-white text-7xl text-wrap w-[500px] ml-5 mb-5'>
            <p>From idea to Products</p>
        </div>
        <div className='text-white text-wrap w-[400px] ml-5'>
            Get professional & reliable  research  oriented solutions  fo Data Science and Machine Learning business needs. Enjoy stress free
            decision making!
        </div>
        <button className="bg-indigo-800 mt-6 ml-5 flex flex-row h-[50px] w-[150px] text-white text-xs font-bold rounded-lg">
        <div className="m-4">GET STARTED</div>
        <div className="mt-[18px] mr-3">
          <FaArrowRight />
        </div>
      </button>
    </div>
  )
}

export default Banner