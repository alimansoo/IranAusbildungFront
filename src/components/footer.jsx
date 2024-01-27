import React from "react";
import ph_copyright from '../icons/ph_copyright-duotone.svg'
import ic_twotone from '../icons/ic_twotone-mail.svg'
import solar_end from '../icons/solar_end-call-bold-duotone.svg'
import zarinpal from '../icons/zarinpal.svg'
import enamad from '../images/enamad.png'
import largelogo from '../large-logo.svg'
import MainContainer from "./container";
import basil_twitter from '../icons/basil_twitter-outline.svg'
import iconoir_telegram from '../icons/iconoir_telegram.svg'
import mdi_instagram from '../icons/mdi_instagram.svg'

function Footer() {
  return (
    <div className='bg-gray-900 py-8'>
        <MainContainer className='inline-flex flex-col gap-3'>
            <div className='inline-flex justify-center pb-8 border-b border-gray-700'>
            <img src={largelogo} className='h-14' alt='' />
            </div>
            <div className='inline-flex justify-between border-b border-gray-700 py-8 gap-10'>
                <div className='inline-flex flex-col gap-8 text-white text-right pl-12 w-3/6'>
                    <h6 className='text-primary-default text-md font-bold'>درباره آوسبیلدونگ</h6>
                    <p className='text-sm text-white leading-9'>آوسبیلدونگ سریعترین و ارزانترین راه مهاجرت به آلمان است که این امکان را به متقاضی می‌دهد تا نه تنها در کشور آلمان تحصیل کند بلکه یک حرفه جدید بیاموزد و کسب درآمد داشته باشد.</p>
                    <div className='inline-flex gap-1 w-max text-sm items-center'><img src={solar_end} className='w-8' alt='' /> ۶۱۹۳۰۰۰۰ - ۰۲۱</div>
                    <div className='inline-flex gap-2 w-max text-sm'><img src={ic_twotone} alt='' />info@iranausbildung.com</div>
                </div>
                <div className='inline-flex flex-col gap-8 text-white text-right w-1/6'>
                    <h6 className='text-primary-default text-md font-bold'>دسترسی سریع</h6>
                    <ul className='inline-flex flex-col gap-6'>
                    <li className="text-sm">خدمات ما</li>
                    <li className="text-sm">مطالب منتخب</li>
                    <li className="text-sm">تماس با ما</li>
                    <li className="text-sm">درباره ما</li>
                    </ul>
                </div>
                <div className='inline-flex flex-col gap-8 text-white text-right w-1/6'>
                    <h6 className='text-primary-default text-md font-bold'>خدمات ما</h6>
                    <ul className='inline-flex flex-col gap-6'>
                    <li className="text-sm">درخواست مشاوره</li>
                    <li className="text-sm">فرم رزومه و انگیزه نگاری</li>
                    <li className="text-sm">تماس با ما</li>
                    <li className="text-sm">درباره ما</li>
                    </ul>
                </div>
                <div className='inline-flex flex-col gap-7 text-white text-right w-2/6'>
                    <h6 className='text-primary-default text-md font-bold'>نماد های اعتبار ما</h6>
                    <div className='inline-flex gap-3'>
                    <img src={enamad} alt='' className='bg-gray-800 rounded-lg ' />
                    <img src={zarinpal} alt='' className='w-[92px]' />
                    <div className='inline-flex flex-col gap-3'>
                        <span className='bg-gray-800 px-4 py-4 rounded-lg'>نماد وزارت گردشگری</span>
                        <span className='bg-gray-800 px-4 py-4 rounded-lg'>نماد وزارت علوم کشور</span>
                    </div>
                    </div>
                    <h6 className='text-primary-default text-md font-bold'>عضویت در خبرنامه</h6>
                    <div className='inline-flex w-full'>
                        <input className='bg-gray-800 w-3/5 p-4 text-sm rounded-r-lg outline-none' placeholder='ایمیل خود را وارد کنید' />
                        <button className='bg-primary-default w-2/5 p-4 text-sm rounded-l-lg'>عضویت در خبر نامه</button>
                    </div>
                </div>
            </div>
            <div className='inline-flex flex-row justify-between gap-3 py-4'>
                <div className='inline-flex items-center gap-2 text-gray-400'>
                    <img src={ph_copyright} alt='' />
                    <p className='text-right text-xs'>برای استفاده از مطالب ایران آوسبیلدونگ، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست.  در غیر این‌صورت هرگونه کپی‌برداری، برداشت و بازنشر بخش یا کل هر کدام از محتوا‌ های ارائه شده تنها با کسب مجوز مکتوب امکان پذیر خواهد بود.</p>
                </div>
                <div className='inline-flex gap-4'>
                    <div className='bg-gray-700 p-2 rounded-md'><img src={basil_twitter} alt='' /></div>
                    <div className='bg-gray-700 p-2 rounded-md'><img src={iconoir_telegram} alt='' /></div> 
                    <div className='bg-gray-700 p-2 rounded-md'><img src={mdi_instagram} alt='' /></div>
                </div>
            </div>
        </MainContainer>
    </div>
  );
}

export default Footer;