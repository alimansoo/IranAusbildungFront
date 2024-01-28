import React from "react";
import videoImage from '../images/videoplayer.png'

function VideoPlayer({className}) {
  return (
    <div className={`flex w-full h-1/2 flex-col gap-3  rounded-lg text-right ${className}`}>
      <div className="w-full h-[350px] bg-gray-300 overflow-hidden relative rounded-xl">
        <img src={videoImage} alt="" className="w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        <div className="bg-gray-900 flex items-center justify-center bg-opacity-30 absolute top-0 left-0 right-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 115 115" fill="none">
            <circle cx="57.5" cy="57.5" r="57.5" fill="#EC3A4C"/>
            <path d="M78.2707 55.8766C80.3303 57.0191 80.3303 59.9809 78.2706 61.1234L49.2052 77.2463C47.2057 78.3554 44.75 76.9094 44.75 74.6229L44.75 42.3771C44.75 40.0905 47.2057 38.6446 49.2052 39.7537L78.2707 55.8766Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div className="leading-8">لورم ایپسوم متن ساختگی برای طراحان میباشد که میتوانید آن را با المان های جذاب دیگر ترکیب کنید و استفاده کنید</div>
      <div className="inline-flex gap-2 justify-start items-center">
        <span className="text-primary-default text-[12px]">راهنمای محاجرت</span>
        <span className="w-[6px] h-[6px] bg-gray-200 rounded"></span>
        <span className=" text-[12px] text-gray-400">زمان مطالعه ۱۰ دقیقه</span>
      </div>
    </div>
  );
}

export default VideoPlayer;