import { useState } from 'react';
import '../App.css';
import Auth from '../components/auth/index';
import MainContainer from '../components/container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/footer';

const Accordion = () => {
  const [open, setOpen] = useState(false)

  return (
  <div className='w-full inline-flex flex-col bg-gray-50 rounded-xl px-6 py-8 gap-6'>
    <div onClick={()=>{ setOpen(!open) }} className='w-full inline-flex justify-between items-center cursor-pointer'>
      <p className="w-full inline-flex gap-1 rounded-xl text-[18px]">نحوه دریافت<span className='text-primary-default'>وقت مشاوره</span>؟</p>
      <span className=''>
        {
          open ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <rect width="41.5" height="41.5" rx="8" fill="#EEF0F2"/>
            <path d="M11.5547 20.8906C11.5547 20.3383 12.0024 19.8906 12.5547 19.8906H28.5547C29.107 19.8906 29.5547 20.3383 29.5547 20.8906C29.5547 21.4429 29.107 21.8906 28.5547 21.8906H12.5547C12.0024 21.8906 11.5547 21.4429 11.5547 20.8906Z" fill="#EC3A4C"/>
          </svg> 
          : 
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <rect width="41.5" height="41.5" rx="8" fill="#EEF0F2"/>
            <path d="M19.5547 12.8906C19.5547 12.3383 20.0024 11.8906 20.5547 11.8906C21.107 11.8906 21.5547 12.3383 21.5547 12.8906V28.8906C21.5547 29.4429 21.107 29.8906 20.5547 29.8906C20.0024 29.8906 19.5547 29.4429 19.5547 28.8906V12.8906Z" fill="#EC3A4C"/>
            <path d="M11.5547 20.8906C11.5547 20.3383 12.0024 19.8906 12.5547 19.8906H28.5547C29.107 19.8906 29.5547 20.3383 29.5547 20.8906C29.5547 21.4429 29.107 21.8906 28.5547 21.8906H12.5547C12.0024 21.8906 11.5547 21.4429 11.5547 20.8906Z" fill="#EC3A4C"/>
          </svg>
        }

      </span>
    </div>
    {
      open ? 
      <div>
        <p className='text-gray-600 text-right leading-8 text-[14px]'>
          جهت دریافت مشاوره در صفحه اصلی وارد قسمت مربوطه شوید و پس از انتخاب نوع مشاوره فرم مربوطه به آن را تکمیل نمایید. پس از اتمام ثبت نام و واریز وجه، برای تلفن همراه شما پیامکی از سوی مجموعه ایران آوسبیلدونگ ارسال خواهد شد که حاوی اطلاعات مرتبط با رزرو مشاوره شما خواهد بود. این پیامک به منزله تایید ثبت نام شما می باشد. در صورت بروز هرگونه مشکل در هنگام ثبت نام یا پس از آن، از پشتیبان آنلاین راهنمایی‌های لازم را دریافت نمایید 
        </p>
      </div>
      :
      ''
    }
    
  </div>)
}

function FAQ() {
  

  return (
    <div className="bg-gray-50">
      <Auth />
      <div className='w-full flex flex-col items-center text-center'>
        <div className='w-full bg-gray-50 flex-col justify-center py-14 pb-0 relative'>
          <div className='absolute bg-gray-200 top-0 right-0 left-0 h-96 '></div>
          <MainContainer className='inline-flex flex-col justify-center items-center z-10 relative pb-10'>
            <div className='inline-flex flex-col rounded-md overflow-hidden text-center gap-5 pb-14'>
              <div className='text-3xl font-bold'><span className='text-primary-default'>سوالات متداول</span></div>
              <div className='text-sm text-gray-600'>پاسخ  سریع به سوالات شما</div>
            </div>
            <div className='w-[80%] bg-white flex flex-row gap-10 items-start justify-center gap-my-10 p-10 shadow-lg rounded-2xl'>
              <div className="w-1/2 flex flex-col gap-8">
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
              </div>
              <div className="w-1/2 flex flex-col gap-8">
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
              </div>
            </div>
          </MainContainer>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default FAQ;