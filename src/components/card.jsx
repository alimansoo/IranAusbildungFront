import React from "react";
import cardimage from '../images/ALINOUR.png'
import mingcute_left from '../icons/mingcute_left.svg'
import { Link } from "react-router-dom";

function Card(
    {
      className,
      isSmall,
    }
  ) {
  return (
    <Link to={'/ausbildung'} className={`flex min-w-[270px] justify-center items-center flex-col gap-3 bg-white border border-gray-200 p-3 relative rounded-lg ${className}`}>
      <img src={cardimage} alt="" className="rounded w-full"/>
      <div className="">پیرا پزشکی</div>
      <div className="text-primary-default">Gesundheitswesen</div>
      {
        !isSmall ? 
        <div className="w-full flex flex-col gap-4 px-3 pb-3">
          <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-3 rounded-md">
            <span>حقوق سال اول:</span>
            <span>۳۰۰ - ۶۱۹</span>
          </div>
          <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-3 rounded-md">
            <span>حقوق سال اول:</span>
            <span>۳۰۰ - ۶۱۹</span>
          </div>
          <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-3 rounded-md">
            <span>حقوق سال اول:</span>
            <span>۳۰۰ - ۶۱۹</span>
          </div>
          
        </div> : ''
      }
      <div className="w-full inline-flex justify-center gap-3 bg-primary-0 hover:bg-primary-default hover:text-white text-primary-default py-3 px-2 rounded-md">
        <span>مشاهده اطلاعات بیشتر</span>
        <span><img src={mingcute_left} alt=""/></span>
      </div>
      
      <div className="inline-flex absolute top-5 right-5 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="5" fill="white" fill-opacity="0.8"/>
          <path d="M19.3454 21.9983C19.0527 21.9983 18.7727 21.9185 18.5054 21.7587L14.3182 19.1766C14.2193 19.1177 14.1074 19.0867 13.9936 19.0867C13.8798 19.0867 13.768 19.1177 13.6691 19.1766L9.48181 21.7587C8.96 22.0782 8.34909 22.0782 7.82727 21.772C7.30545 21.4659 7 20.8936 7 20.268V7.99646C7 6.89175 7.85273 6 8.90909 6H19.0909C20.1473 6 21 6.89175 21 7.99646V20.268C21.0011 20.4945 20.9596 20.719 20.8776 20.9286C20.7957 21.1382 20.675 21.3288 20.5225 21.4896C20.37 21.6503 20.1886 21.778 19.9888 21.8653C19.789 21.9526 19.5747 21.9978 19.3582 21.9983H19.3454ZM14 17.7392C14.3309 17.7392 14.6745 17.8324 14.9673 18.0187L19.1545 20.6008C19.32 20.7073 19.4727 20.6407 19.5363 20.6008C19.6 20.5609 19.7273 20.4677 19.7273 20.2547V7.99646C19.7273 7.62379 19.4473 7.33097 19.0909 7.33097H8.90909C8.55272 7.33097 8.27273 7.62379 8.27273 7.99646V20.268C8.27273 20.481 8.4 20.5742 8.46363 20.6141C8.52727 20.654 8.66727 20.7206 8.84545 20.6141L13.0327 18.032C13.3382 17.8457 13.6691 17.7525 14 17.7525V17.7392Z" fill="black"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="5" fill="white" fill-opacity="0.8"/>
          <path d="M11.5833 14.2502C11.5833 14.858 11.3419 15.4408 10.9121 15.8706C10.4823 16.3004 9.89945 16.5418 9.29167 16.5418C8.68388 16.5418 8.10098 16.3004 7.67121 15.8706C7.24144 15.4408 7 14.858 7 14.2502C7 13.6424 7.24144 13.0595 7.67121 12.6297C8.10098 12.1999 8.68388 11.9585 9.29167 11.9585C9.89945 11.9585 10.4823 12.1999 10.9121 12.6297C11.3419 13.0595 11.5833 13.6424 11.5833 14.2502Z" stroke="black" stroke-width="1.25"/>
          <path d="M16.1673 9.2085L11.584 12.4168M16.1673 19.2918L11.584 16.0835" stroke="black" stroke-width="1.25" stroke-linecap="round"/>
          <path d="M20.7493 20.2083C20.7493 20.8161 20.5079 21.399 20.0781 21.8288C19.6484 22.2586 19.0655 22.5 18.4577 22.5C17.8499 22.5 17.267 22.2586 16.8372 21.8288C16.4075 21.399 16.166 20.8161 16.166 20.2083C16.166 19.6005 16.4075 19.0177 16.8372 18.5879C17.267 18.1581 17.8499 17.9167 18.4577 17.9167C19.0655 17.9167 19.6484 18.1581 20.0781 18.5879C20.5079 19.0177 20.7493 19.6005 20.7493 20.2083ZM20.7493 8.29167C20.7493 8.89945 20.5079 9.48235 20.0781 9.91212C19.6484 10.3419 19.0655 10.5833 18.4577 10.5833C17.8499 10.5833 17.267 10.3419 16.8372 9.91212C16.4075 9.48235 16.166 8.89945 16.166 8.29167C16.166 7.68388 16.4075 7.10098 16.8372 6.67121C17.267 6.24144 17.8499 6 18.4577 6C19.0655 6 19.6484 6.24144 20.0781 6.67121C20.5079 7.10098 20.7493 7.68388 20.7493 8.29167Z" stroke="black" stroke-width="1.25"/>
        </svg>
      </div>
    </Link>
  );
}

export default Card;