import '../App.css';
import Auth from '../components/auth/index';
import mdi_flight from '../icons/mdi_flight.svg'
import search from '../icons/iconamoon_search-duotone.svg'
import germany from '../icons/emojione_flag-for-germany.svg'
import gg_more from '../icons/gg_more.svg'
import ph_chat from '../icons/ph_chat.svg'
import airplane from '../icons/airplane.svg'
import read_cv from '../icons/ph_read-cv-logo-duotone.svg'
import ph_trend from '../icons/ph_trend-up-duotone.svg'
import mingcute_left from '../icons/mingcute_left-line.svg'
import gridicons_quote from '../icons/gridicons_quote.svg'
import ph_arrow from '../icons/ph_arrow-up-duotone.svg'
import nurse from '../images/nurse.png'
import visatbama from '../images/visatbama.png'
import germany_go from '../images/germany_go.png'
import resume_see from '../images/resume_see.png'
import approved from '../images/approved.png'
import wawe from '../images/wawe.png'
import ellite from '../images/ellite.png';
import germany_girl from '../images/germany_girl.png'
import person1 from '../images/person1.png'
import ausbildong from '../images/ausbildong.png'
import image5 from '../images/image 5.png'
import image4 from '../images/image4.png'
import image3 from '../images/image 3.png'
import image2 from '../images/image 2.png'
import image1 from '../images/image 1.png'
import Button from '../components/button';
import MainContainer from '../components/container';
// import Card from '../components/card';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import BlogCard from '../components/blog_card';
import Footer from '../components/footer';
import Social from '../components/social';
import { Link } from 'react-router-dom';

function Index() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };

  return (
    <div className="text-primary">
      <Auth />
      <div className='w-full flex flex-col items-center text-center pt-16'>
        <div className='flex flex-row gap-2 w-max mb-12'>
          <span className='text-gray-400'>انتخابی هوشمندانه برای آینده</span>
          <img src={mdi_flight} alt=''/>
        </div>
        <div  className='w-full text-center text-6xl font-bold mb-20'>آیــنده تـــو ، از <span className='text-primary-default'>هـمیــن حـــالا</span> شــروع میــــشه!</div>
        <div className='bg-gray-100 w-2/4 max-w-[900px] py-[26px] px-[42px] rounded-md mb-20'>
          <div className='flex flex-row w-full rounded-md overflow-hidden'>
            <input placeholder='نام رشته مورد نظرت رو جست و جو کن ...' className='w-full outline-none p-3 px-5 text-[14px]' />
            <button className='bg-primary-default inline-flex gap-2 items-center justify-center text-white p-3 px-6 pl-7 text-[14px]'><img src={search} alt='' /><span>جستوجو</span></button>
          </div>
        </div>
        <div className='inline-flex gap-16 mb-20'>
          <Button 
            styleVariant='secondary' 
            size='large' 
            className='bg-transparent text-gray-700 !text-[16px] bg-opacity-10'
            leftIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.2" d="M22.4998 12.75V15H5.72416C5.07905 15 4.45111 14.7921 3.93351 14.4071C3.4159 14.022 3.0362 13.4804 2.85073 12.8625L1.53166 8.46563C1.49805 8.35365 1.49108 8.23537 1.51131 8.12022C1.53154 8.00507 1.57841 7.89625 1.64818 7.80243C1.71795 7.70862 1.80868 7.63242 1.91314 7.57991C2.01759 7.5274 2.13288 7.50003 2.24979 7.5H2.99979L5.24979 9.75H8.7101L7.53916 6.23719C7.5016 6.12452 7.49134 6.00454 7.50921 5.88712C7.52709 5.76971 7.57259 5.65822 7.64198 5.56183C7.71136 5.46544 7.80265 5.38691 7.90832 5.3327C8.01399 5.27848 8.13102 5.25014 8.24979 5.25H8.99979L13.4998 9.75H19.4998C20.2954 9.75 21.0585 10.0661 21.6211 10.6287C22.1837 11.1913 22.4998 11.9544 22.4998 12.75Z" fill="#1D1E22"/>
                <path d="M21.0006 20.25C21.0006 20.4489 20.9216 20.6397 20.7809 20.7803C20.6403 20.921 20.4495 21 20.2506 21H6.7506C6.55168 21 6.36092 20.921 6.22026 20.7803C6.07961 20.6397 6.00059 20.4489 6.0006 20.25C6.00059 20.0511 6.07961 19.8603 6.22026 19.7197C6.36092 19.579 6.55168 19.5 6.7506 19.5H20.2506C20.4495 19.5 20.6403 19.579 20.7809 19.7197C20.9216 19.8603 21.0006 20.0511 21.0006 20.25ZM23.2506 12.75V15C23.2506 15.1989 23.1716 15.3897 23.0309 15.5303C22.8903 15.671 22.6995 15.75 22.5006 15.75H5.72591C4.91851 15.7537 4.13175 15.4951 3.48402 15.013C2.8363 14.531 2.36264 13.8516 2.13434 13.0772L0.815282 8.68125C0.748081 8.45737 0.734129 8.22089 0.774541 7.99067C0.814952 7.76044 0.908608 7.54285 1.04804 7.35524C1.18747 7.16764 1.36881 7.01521 1.5776 6.91013C1.78639 6.80505 2.01685 6.75021 2.25059 6.75H3.0006C3.19924 6.75009 3.38974 6.82899 3.53028 6.96938L5.56184 9H7.67028L6.82653 6.47438C6.75134 6.24881 6.73084 6.0086 6.76674 5.77355C6.80263 5.53851 6.89389 5.31537 7.03298 5.12252C7.17207 4.92968 7.35501 4.77267 7.56672 4.66443C7.77842 4.55619 8.01283 4.49983 8.2506 4.5H9.0006C9.09912 4.49992 9.19669 4.51926 9.28773 4.5569C9.37878 4.59454 9.46152 4.64975 9.53122 4.71938L13.8118 9H19.5006C20.4952 9 21.449 9.39509 22.1522 10.0984C22.8555 10.8016 23.2506 11.7554 23.2506 12.75ZM21.7506 12.75C21.7506 12.1533 21.5135 11.581 21.0916 11.159C20.6696 10.7371 20.0973 10.5 19.5006 10.5H13.5006C13.3019 10.4999 13.1115 10.421 12.9709 10.2806L8.69028 6H8.2506L9.42153 9.51281C9.45909 9.62548 9.46936 9.74546 9.45148 9.86288C9.43361 9.98029 9.38811 10.0918 9.31872 10.1882C9.24933 10.2846 9.15805 10.3631 9.05238 10.4173C8.94671 10.4715 8.82967 10.4999 8.71091 10.5H5.2506C5.15207 10.5001 5.0545 10.4807 4.96346 10.4431C4.87241 10.4055 4.78967 10.3503 4.71997 10.2806L2.69028 8.25H2.25059L3.56966 12.6469C3.7068 13.1117 3.99123 13.5193 4.38013 13.8084C4.76902 14.0976 5.24132 14.2525 5.72591 14.25H21.7506V12.75Z" fill="#1D1E22"/>
              </svg>
            }
          >
            شرایط پذیرش پرونده و مهاجرت</Button>
          <Button 
            styleVariant='secondary' 
            size='large' 
            className='bg-transparent text-gray-700 !text-[16px] bg-opacity-10'
            leftIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.2" d="M21 12C21.0002 13.5806 20.5841 15.1333 19.7937 16.502C19.0033 17.8708 17.8663 19.0072 16.4972 19.797C15.1281 20.5868 13.5752 21.0021 11.9946 21.0011C10.414 21.0002 8.86158 20.583 7.49344 19.7916L3.98813 20.9606C3.85598 21.0047 3.71417 21.0111 3.57859 20.9791C3.44301 20.9471 3.31903 20.878 3.22052 20.7795C3.12202 20.681 3.0529 20.557 3.02091 20.4214C2.98891 20.2858 2.99531 20.144 3.03938 20.0119L4.20844 16.5066C3.51741 15.3113 3.11064 13.9731 3.01959 12.5955C2.92854 11.2179 3.15566 9.83775 3.68337 8.56195C4.21108 7.28615 5.02523 6.14886 6.06284 5.23807C7.10044 4.32729 8.33367 3.66744 9.66711 3.30956C11.0006 2.95169 12.3985 2.9054 13.7527 3.17426C15.1069 3.44312 16.381 4.01994 17.4766 4.86007C18.5722 5.70021 19.4598 6.78114 20.0708 8.01923C20.6818 9.25732 20.9997 10.6194 21 12Z" fill="#1D1E22"/>
                <path d="M12.0002 2.25C10.3169 2.24963 8.66213 2.68508 7.19704 3.51396C5.73194 4.34285 4.50641 5.53692 3.63971 6.97997C2.77302 8.42301 2.29469 10.0659 2.25129 11.7486C2.20789 13.4314 2.60089 15.0967 3.39205 16.5825L2.32799 19.7747C2.23985 20.039 2.22706 20.3226 2.29105 20.5938C2.35504 20.8649 2.49328 21.1129 2.69029 21.3099C2.88729 21.5069 3.13526 21.6451 3.40642 21.7091C3.67757 21.7731 3.96119 21.7603 4.22549 21.6722L7.41768 20.6081C8.72527 21.3036 10.1741 21.6921 11.6543 21.744C13.1344 21.7959 14.6069 21.51 15.9601 20.9079C17.3132 20.3057 18.5114 19.4033 19.4636 18.269C20.4159 17.1346 21.0972 15.7983 21.4559 14.3613C21.8146 12.9244 21.8412 11.4246 21.5337 9.97578C21.2263 8.52701 20.5928 7.16732 19.6813 5.99992C18.7699 4.83253 17.6045 3.88811 16.2736 3.23836C14.9427 2.58861 13.4812 2.25061 12.0002 2.25ZM12.0002 20.25C10.5498 20.251 9.12495 19.8691 7.86955 19.1428C7.75561 19.0767 7.62627 19.0418 7.49455 19.0416C7.41386 19.0416 7.33373 19.0549 7.25736 19.0809L3.75018 20.25L4.91924 16.7438C4.95294 16.643 4.96485 16.5362 4.95418 16.4305C4.94351 16.3248 4.91051 16.2226 4.85736 16.1306C3.94796 14.5584 3.58284 12.7299 3.81864 10.929C4.05444 9.12801 4.87798 7.4552 6.16151 6.17006C7.44503 4.88491 9.11679 4.05925 10.9175 3.82118C12.7181 3.5831 14.547 3.94591 16.1204 4.85333C17.6938 5.76074 18.9238 7.16204 19.6196 8.83983C20.3153 10.5176 20.4379 12.3781 19.9684 14.1327C19.4989 15.8873 18.4634 17.4379 17.0227 18.5439C15.582 19.65 13.8165 20.2497 12.0002 20.25ZM15.7502 10.5C15.7502 10.6989 15.6712 10.8897 15.5305 11.0303C15.3899 11.171 15.1991 11.25 15.0002 11.25H9.00017C8.80126 11.25 8.6105 11.171 8.46984 11.0303C8.32919 10.8897 8.25017 10.6989 8.25017 10.5C8.25017 10.3011 8.32919 10.1103 8.46984 9.96967C8.6105 9.82902 8.80126 9.75 9.00017 9.75H15.0002C15.1991 9.75 15.3899 9.82902 15.5305 9.96967C15.6712 10.1103 15.7502 10.3011 15.7502 10.5ZM15.7502 13.5C15.7502 13.6989 15.6712 13.8897 15.5305 14.0303C15.3899 14.171 15.1991 14.25 15.0002 14.25H9.00017C8.80126 14.25 8.6105 14.171 8.46984 14.0303C8.32919 13.8897 8.25017 13.6989 8.25017 13.5C8.25017 13.3011 8.32919 13.1103 8.46984 12.9697C8.6105 12.829 8.80126 12.75 9.00017 12.75H15.0002C15.1991 12.75 15.3899 12.829 15.5305 12.9697C15.6712 13.1103 15.7502 13.3011 15.7502 13.5Z" fill="#1D1E22"/>
              </svg>
            }
          >
            درخواست مشاوره</Button>
          <Button 
            styleVariant='secondary' 
            size='large' 
            className='bg-transparent text-gray-700 !text-[16px] bg-opacity-10'
            leftIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.2" d="M18.9796 3.98679L18.9186 20.074C18.9182 20.1726 18.8984 20.27 18.8603 20.3609C18.8223 20.4518 18.7667 20.5342 18.6967 20.6036C18.6268 20.673 18.5438 20.7279 18.4527 20.7652C18.3615 20.8025 18.2638 20.8215 18.1653 20.8211L5.76558 20.7674C5.56681 20.7666 5.37649 20.6869 5.23644 20.5458C5.0964 20.4048 5.01808 20.2139 5.0187 20.0151L5.07974 3.92785C5.08013 3.82933 5.09993 3.73186 5.13799 3.64099C5.17606 3.55013 5.23166 3.46765 5.30161 3.39828C5.37156 3.32891 5.45449 3.274 5.54567 3.23668C5.63685 3.19937 5.73449 3.18038 5.833 3.18081L18.2327 3.23445C18.4315 3.23528 18.6218 3.31498 18.7619 3.45605C18.9019 3.59712 18.9802 3.78801 18.9796 3.98679Z" fill="#1D1E22"/>
                <path d="M18.2362 2.48407L5.83643 2.43043C5.43869 2.42894 5.05664 2.58549 4.7743 2.86564C4.49196 3.14579 4.33245 3.52661 4.33084 3.92435L4.26979 20.0116C4.2691 20.2087 4.30725 20.4039 4.38205 20.5863C4.45686 20.7686 4.56686 20.9344 4.70577 21.0742C4.84468 21.214 5.00977 21.325 5.19162 21.401C5.37346 21.4769 5.56849 21.5163 5.76556 21.5169L18.1653 21.5705C18.3625 21.5713 18.5579 21.5333 18.7403 21.4585C18.9227 21.3837 19.0886 21.2737 19.2285 21.1348C19.3684 20.9959 19.4796 20.8307 19.5556 20.6488C19.6316 20.4669 19.671 20.2717 19.6715 20.0746L19.7325 3.98734C19.7334 3.58957 19.5763 3.20775 19.2956 2.92585C19.015 2.64394 18.6339 2.48503 18.2362 2.48407ZM18.1697 20.0705L5.76901 20.0171L5.83005 3.9298L18.2298 3.98344L18.1697 20.0705ZM7.32102 6.18647C7.32205 5.98763 7.40199 5.79735 7.54327 5.65744C7.68455 5.51753 7.87561 5.43944 8.07444 5.44035L15.9759 5.47394C16.1636 5.47449 16.3444 5.54545 16.4823 5.67277C16.6203 5.8001 16.7055 5.97455 16.7211 6.16165C16.7367 6.34874 16.6815 6.53489 16.5665 6.6833C16.4516 6.83171 16.2851 6.93159 16.1 6.96322C16.0567 6.97062 16.0127 6.97436 15.9688 6.97439L8.06714 6.93988C7.86831 6.93886 7.67802 6.85892 7.53811 6.71764C7.3982 6.57635 7.32012 6.3853 7.32102 6.18647ZM7.31044 9.18674C7.31083 9.08823 7.33062 8.99075 7.36869 8.89989C7.40676 8.80902 7.46235 8.72655 7.5323 8.65717C7.60225 8.5878 7.68519 8.53289 7.77636 8.49557C7.86754 8.45826 7.96518 8.43927 8.0637 8.4397L15.9653 8.47422C16.1541 8.47332 16.3363 8.54368 16.4755 8.67124C16.6148 8.7988 16.7007 8.97417 16.7163 9.16234C16.7319 9.35052 16.6759 9.53764 16.5596 9.68635C16.4432 9.83506 16.2751 9.93442 16.0887 9.96458C16.045 9.97219 16.0007 9.97567 15.9563 9.97499L8.05487 9.9414C7.85611 9.93993 7.66607 9.85962 7.52649 9.71812C7.3869 9.57662 7.3092 9.3855 7.31044 9.18674ZM7.29877 12.1863C7.30053 11.9878 7.38085 11.7982 7.52216 11.6588C7.66346 11.5195 7.85422 11.4419 8.05266 11.4429L12.001 11.4568C12.1887 11.4573 12.3693 11.5282 12.5072 11.6555C12.6452 11.7827 12.7304 11.957 12.7461 12.144C12.7618 12.331 12.7069 12.5171 12.5921 12.6656C12.4773 12.814 12.311 12.9141 12.126 12.9459C12.0827 12.9534 12.0388 12.9571 11.9948 12.9571L8.04396 12.9398C7.84526 12.9386 7.65519 12.8585 7.51547 12.7172C7.37575 12.5759 7.29782 12.385 7.29877 12.1863Z" fill="#1D1E22"/>
              </svg>
            }
          >
            نگارش  رزومه و انگیزه نامه</Button>
        </div>
        <div className='inline-flex flex-row justify-center gap-3 w-full overflow-hidden'>
          {
            [0,0,0,0,0,0,0,0,0,0,0,0].map((value, index, array) => {
              return (
                <div className='bg-gray-100 inline-flex flex-col min-w-[19rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
                  <div className='w-full inline-flex justify-between'>
                    <span className='font-semibold'>مشاغل پیراپزشکی</span>
                    <span className='text-primary-default'>Sanitäter</span>
                  </div>
                  <div className='w-full inline-flex justify-center align-middle'>
                    <img src={nurse} className='w-56' alt='Sanitater' />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='w-full inline-flex justify-center items-center bg-gray-900 text-white py-6'>
          <MainContainer className='inline-flex flex-row-reverse justify-around px-10'>
            <div className='flex flex-col gap-3'>
              <span className='text-[38px] font-bold'>۱۱۰۰ +</span>
              <span className='text-sm'>میانگین درآمد ماهانه</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-[38px] font-bold'>۷۰۰ +</span>
              <span className='text-sm'>دانشجو فارغ التحصیل شده</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-[38px] font-bold'>۴۰۰ +</span>
              <span className='text-sm'>رشته مختلف</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-[38px] font-bold'>۵۰۰۰ +</span>
              <span className='text-sm'> دانشجویان فعال </span>
            </div>
          </MainContainer>
        </div>
        <div className='w-full flex-row py-14'>
          <MainContainer className='inline-flex justify-between'>
            <div className='inline-flex gap-5 flex-col text-right max-w-[40vw]'>
              <div className='text-primary-default relative'>
                <span className='z-10 px-3'>راهـنـمـا</span>
                <span className='bg-primary-0 absolute right-0 w-8 h-full -z-10'></span>
              </div>
              <div className='text-[20px] text-gray-900 font-bold'>آوسبیلدونگ چی هست؟</div>
              <div className='text-[14px] leading-7 text-gray-600'>آوسبیلدونگ سریعترین و ارزانترین راه مهاجرت به آلمان است که این امکان را به متقاضی می‌دهد تا نه تنها در کشور آلمان تحصیل کند بلکه یک حرفه جدید بیاموزد و کسب درآمد داشته باشد.</div>
              <div className='text-[14px] text-gray-900'>خلاصه بگم ، آوسبیلدونگ یکی از راحت ترین راه های محاجرت به آلمانه</div>
              <div className='mt-6'>
                <Button leftIcon={<img src={gg_more} alt='more' />}>اطلاعات بیشتر</Button>
              </div>
            </div>
            <div className='relative'>
              <img src={visatbama} alt='' className='bg-primary-default w-[330px] rounded-lg' />
              <img src={germany} alt='' className='absolute top-1 -right-12 w-[90px]' />
              <span className='absolute top-1/2 -right-20 bg-primary-0 text-primary-default p-3 py-2 rounded font-semibold'>ویــــزات بــــا مــــا</span>
            </div>
          </MainContainer>
        </div>
        <div className='w-full flex-row pt-14'>
          <MainContainer className='inline-flex flex-col gap-14 justify-between'>
            <div className='inline-flex gap-5 flex-col text-right max-w-[40vw]'>
              <div className='text-primary-default relative'>
                <span className='z-10 px-3 h-12'>از کجا باید شروع کنم؟</span>
                <span className='bg-primary-0 absolute right-0 w-8 h-full -z-10'></span>
              </div>
              <div className='text-[20px] text-gray-900 font-bold'>مرحله به مرحله با ما همراه باش ...</div>
            </div>
            <div className='w-full inline-flex justify-between gap-6 pt-8'>
              <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۱</span>
                <span className='text-[14px] leading-7'>اول مشاوره بهت میدیم بهت کمک میکنیم سوابق تحیلیت رو تقویت کنی</span>
              </div>
              <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۲</span>
                <span className='text-[14px] leading-7'>یک انگیزه نامه و رزومه حرفه ای آماده میکنیم و برای کارفرما های آلمانی ارسال میکنیم</span>
              </div>
              <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۳</span>
                <span className='text-[14px] leading-7'>یک انگیزه نامه و رزومه حرفه ای آماده میکنیم و برای کارفرما های آلمانی ارسال میکنیم</span>
              </div>
              <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۴</span>
                <span className='text-[14px] leading-7'>یک انگیزه نامه و رزومه حرفه ای آماده میکنیم و برای کارفرما های آلمانی ارسال میکنیم</span>
              </div>
              <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۵</span>
                <span className='text-[14px] leading-7'>یک انگیزه نامه و رزومه حرفه ای آماده میکنیم و برای کارفرما های آلمانی ارسال میکنیم</span>
              </div>
              <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۶</span>
                <span className='text-[14px] leading-7'>یک انگیزه نامه و رزومه حرفه ای آماده میکنیم و برای کارفرما های آلمانی ارسال میکنیم</span>
              </div>
            </div>
            <div className='w-full'>
              <span className='text-primary-default text-3xl'>و در نهایت ...</span>
            </div>
            <div className='w-full inline-flex justify-between'>
              <div className='w-1/2 pb-24'>
                <img src={germany_go} alt='' />
              </div>
              <div className='w-1/2 pr-8'>
                <div className='bg-gray-100 relative flex flex-col px-7 rounded-lg py-8 w-full text-right pt-9'>
                  <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۷</span>
                  <span className='text-primary-default text-[18px] pb-2'>رســـیـــدیــم آلـــمـــان ...</span>
                  <span className='text-gray-900 text-[14px] leading-7'>
                    موفق شدیم :)<br></br>
                    ار اینجا به بعد دیگه باید کارای اقامت طولانی یا همون آنملدونگت رو انجام بدیم و کمکت کنیم تا اولین حساب بانکی خودت رو توی کشور آلمان باز کنی.
                  </span>
                </div>
                <div className='inline-flex gap-5 pt-12'>
                  <Button className='font-extralight' leftIcon={<img src={ph_chat} alt='' className='w-8'/>}>درخواست مشاوره</Button>
                  <Button className='font-extralight text-' styleVariant='secondary' leftIcon={<img src={airplane} alt='' className='w-8'/>}>شرایط پذیرش پرونده و مهاجرت</Button>
                </div>
              </div>
            </div>
          </MainContainer>
          {/* <div className='w-full bg-gray-100 py-10 z-0'>
            <MainContainer className='inline-flex items-center justify-between'>
              <div className='inline-flex flex-col gap-4 text-right'>
                <div className='w-max text-right text-primary-default relative'>
                  <div className='z-40 relative px-3 h-max w-max'>برترین آوسبیلدونگ ها</div>
                  <span className='bg-primary-0 absolute right-0 w-8 h-full top-0 z-10'></span>
                </div>
                <div className='text-[20px] text-gray-900 font-bold'>بهترین آوسبیلدونگ ها از نظر شما ...</div>
                <div className='text-[14px] leading-7 text-gray-600 w-1/2'>آوسبیلدونگ های خیلی زیادی وجود داره ، اما براتون محبوب ترین هارو اینجا آوردیم تا بتونید با شرایط درآمدیشون بیشتر آشنا بشید تا بتونید بهتر تصمیم گیری کنید.</div>
                <div>
                  <Button className='font-extralight' leftIcon={<img src={ph_chat} alt='' className='w-8'/>}>مشاهده  آوسبیلدونگ های بیشتر</Button>
                </div>
              </div>
              <div className=''>
                <div className='w-[880px] bg-gray-200 top-0 left-0 p-3'>
                    <Card className='ml-4' />
                    <Card className='ml-4' />
                    <Card className='ml-4' />
                </div>
              </div>
            </MainContainer>
          </div> */}
          <div className='w-full bg-white py-10 pb-0 z-0'>
            <MainContainer className='inline-flex items-center justify-between gap-8'>
              <div className='inline-flex flex-col gap-4 text-right w-1/2'>
                <div className='w-max text-right text-primary-default relative'>
                  <div className='z-40 relative px-3 h-max w-max'>حرفه ای به نظر برس!</div>
                  <span className='bg-primary-0 absolute right-0 w-8 h-full top-0 z-10'></span>
                </div>
                <div className='text-[20px] text-gray-900 font-bold'>نگارش رزومه و انگیزه نامه اصولی ، در سریع ترین زمان ممکن</div>
                <div className='text-[14px] leading-7 text-gray-600 w-full'>
                  یکی از کارهایی که برای محاجرت به آلمان باید انجام بدید ، داشتن یک رزومه خوبه که کارشناسان ما توی این زمینه تخصص دارن و میتونن بر اساس نیاز های شما یک رزومه و انگیزه نامه خیلی خوب براتون تهیه کنن. داشتن رزومه خوب ، احتمال جذب نیرو رو بالا میبره پس...
                </div>
                <div className='inline-flex gap-2'>
                  بزار رزومه و انگیزه نامت رو افراد متخصص ما برات تهیه کنن تا احتمال قبولیت بیشتر بشه 
                  <img src={ph_trend} alt='dddd' />   
                </div>
                <div className='pt-10'>
                  <Link to={'/cover_letter'}>
                    <Button 
                      className='font-extralight' 
                      styleVariant='secondary' 
                      leftIcon={
                        <img src={read_cv} alt='' className='w-8'/>
                      }
                    >
                      نگارش رزومه و انگیزه نامه
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className='flex justify-end flex-col items-end'>
                <div className='w-max relative'>
                  <img src={resume_see} alt='' className='bg-primary-default h-72 rounded-md' />
                  <img src={approved} alt='' className='absolute w-32 bottom-4 -right-16' />
                </div>
                <img src={wawe} alt='' className='w-48 bottom-4 -right-16' />
              </div>
            </MainContainer>
          </div>
          <div className='w-full bg-gray-100 py-10 pb-0 z-0 relative'>
            <MainContainer className='inline-flex items-center justify-between relative'>
              <div className='inline-flex flex-col gap-4 text-right w-1/2'>
                <div className='text-[20px] text-primary-default font-bold'>آموزش زبان آلمانی در موسسه آوسبیلدونگ...</div>
                <div className='text-[14px] leading-7 text-gray-600 w-full'>ما داریم برای بچه هایی که دوست دارن محاجرت کنن ، یک سری کلاس زبان فشرده برگذار میکنیم ، که سرعتتون رو توی یادگیری زبان آلمانی چندین برابر بیشتر میکنه و باعث میشه یک قدم به محاجرت نزدیک تر بشید!</div>
                <div>
                  <Button 
                    className='font-extralight'
                    styleVariant='secondary'
                  >
                    دریافت اطلاعات بیشتر
                  </Button>
                </div>
              </div>
              <div className='w-max'>
                <img src={germany_girl} alt='' className='w-96 z-20' />
                <img src={ellite} alt='' className='absolute w-[770px] bottom-0 -left-2 z-[-1]' />
              </div>
            </MainContainer>
          </div>
          <div className='w-full bg-white py-10 pb-0 z-0'>
            <MainContainer className='items-center justify-between gap-8'>
              <div className='inline-flex justify-between flex-row gap-4 text-right w-full pt-8 pb-10'>
                <div className='flex flex-col gap-3'>
                  <div className='w-max text-right text-primary-default relative'>
                    <div className='z-40 relative px-3 h-max w-max'>بیشتر بدانیم ...</div>
                    <span className='bg-primary-0 absolute right-0 w-8 h-full top-0 z-10'></span>
                  </div>
                  <div className='text-[20px] text-gray-900 font-bold'>بلاگ آوسبیلدونگ</div>
                </div>
                
                <div>
                  <Button 
                    className='font-extralight'
                    rightIcon={
                      <img src={mingcute_left} alt='' className='w-8'/>
                    }
                  >
                    مقالات بیشتر
                  </Button>
                </div>
              </div>
              <div className='w-full inline-flex gap-44 justify-between pb-24'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
              </div>
              <Social />
              <div className='w-full inline-flex items-center justify-between gap-80 pt-20'>
                <div className='flex flex-col gap-3 text-right'>
                  <div className='w-max text-right text-primary-default relative'>
                    <div className='z-40 relative px-3 h-max w-max'>نظرات کاربران آوسبیلدونگ</div>
                    <span className='bg-primary-0 absolute right-0 w-8 h-full top-0 z-10'></span>
                  </div>
                  <div className='text-[20px] text-gray-900 font-bold'>راجب آوسبیلدونگ چی میگن؟</div>
                  <div className='text-[14px] text-gray-700 leading-8'>نظرات کاربران ما ، برامون خیلی مهمه چون آیندشون رو به دست ما سپردن و این برای ما خیلی ارزشمنده ، اینجا میتونید برخی از نظرات کاربران آوسبیلدونگ رو ببینید...</div>
                </div>
                <div className='inline-flex flex-row items-center gap-10'>
                  <div className='inline-flex flex-col w-[52px] h-max'>
                    <img src={ph_arrow} alt='' className='w-[52px] h-[52px]' />
                    <img src={ph_arrow} alt='' className='rotate-180 w-[52px] h-[52px]' />
                  </div>
                  <div className='inline-flex flex-col gap-10'>
                    <div className='inline-flex justify-between items-center bg-gray-100 rounded-xl p-6 gap-12'>
                      <div className='inline-flex flex-col gap-2 text-right'>
                        <img src={gridicons_quote} className='w-10 ' alt='' />
                        <p className='text-sm leading-7'>یکی از بهترین تربه های من ، اعتماد به آوسبیلدونگ بود ، بدون هیچ دردسر و استرسی تونستم مدرکمو بگیرم و به کشور آلمان مهاجرت کنم ، واقعا ازشون ممنونم :)</p>
                        <p className='text-primary-default'>مینا محمدی</p>
                      </div>
                      <img src={person1} alt='' className='rounded-2xl w-24 h-24' />
                    </div>
                    <div className='inline-flex justify-between items-center bg-gray-100 rounded-xl p-6 gap-12'>
                      <div className='inline-flex flex-col gap-2 text-right'>
                        <img src={gridicons_quote} className='w-10 ' alt='' />
                        <p className='text-sm leading-7'>یکی از بهترین تربه های من ، اعتماد به آوسبیلدونگ بود ، بدون هیچ دردسر و استرسی تونستم مدرکمو بگیرم و به کشور آلمان مهاجرت کنم ، واقعا ازشون ممنونم :)</p>
                        <p className='text-primary-default'>سینا مهران فر</p>
                      </div>
                      <img src={person1} alt='' className='rounded-2xl w-24 h-24' />
                    </div>
                  </div>
                </div>
                
                
              </div>
            </MainContainer>
          </div>
          <div className='w-full bg-gray-100 mt-14 py-8'>
            <MainContainer className='items-center inline-flex justify-between gap-8'>
              <img src={image1} className='h-12' alt='' />
              <img src={image2} className='h-12' alt='' />
              <img src={image3} className='h-12' alt='' />
              <img src={image4} className='h-12' alt='' />
              <img src={image5} className='h-12' alt='' />
              <img src={ausbildong} className='h-12' alt='' />
            </MainContainer>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Index;