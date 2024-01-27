import React from "react";
import cardimage from '../images/blogimage.png'

function BlogCard(
  {
    horizontal = false,
    className
  }
  ) {
  return (
    <div className={`flex ${horizontal?'flex-row gap-7':'flex-col gap-5'} w-full rounded-lg text-right ${className}`}>
      <img src={cardimage} alt="" className="rounded"/>
      <div className="flex flex-col gap-4">
        <div className={` ${horizontal?'text-lg leading-10':'text-base leading-9'}`}>لورم ایپسوم متن ساختگی برای طراحان میباشد که میتوانید آن را با المان های جذاب دیگر ترکیب کنید و استفاده کنید</div>
        <div className="text-sm text-gray-400 leading-8">لورم ایپسوم متن ساختگی برای طراحان میباشد که میتوانید آن را با المان های جذاب دیگر ترکیب کنید و استفاده کنید. طراحان از این متن برای استفاده در سمپل های خود استفاده میکنند و ...</div>
        <div className="inline-flex gap-3 justify-start items-center">
          <span className="text-primary-default text-[14px]">راهنمای محاجرت</span>
          <span className="w-[6px] h-[6px] bg-gray-200 rounded"></span>
          <span className=" text-[13px] text-gray-500">زمان مطالعه ۱۰ دقیقه</span>
        </div>
      </div>
      
    </div>
  );
}

export default BlogCard;