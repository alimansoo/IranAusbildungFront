import React from 'react';
import largelogo from './../../large-logo.svg'
import ph_chat from '../../icons/ph_chat.svg'
import MainContainer from './../container';
import Button from '../button';
import { Link } from 'react-router-dom';

function Header() {

  const mohshaverMenu = [
    {
      title : 'مشاوره آوسبیلدونگ ',
      icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.1332 3.2585C17.6249 3.75016 17.6249 4.54183 17.1332 5.02516L13.8915 8.26683L15.6582 15.9252L14.4832 17.1085L11.2499 10.9168L7.99987 14.1668L8.29987 16.2252L7.4082 17.1085L5.94154 14.4585L3.2832 12.9835L4.16654 12.0835L6.24987 12.3918L9.47487 9.16683L3.2832 5.9085L4.46654 4.7335L12.1249 6.50016L15.3665 3.2585C15.8332 2.77516 16.6665 2.77516 17.1332 3.2585Z" fill="#EC3A4C"/>
      </svg>,
      link : '/'
    },
    {
      title : 'مشاوره تحصیلی',
      icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10.0007 2.5L0.833984 7.5L4.16732 9.31667V14.3167L10.0007 17.5L15.834 14.3167V9.31667L17.5006 8.40833V14.1667H19.1673V7.5L10.0007 2.5ZM15.684 7.5L10.0007 10.6L4.31732 7.5L10.0007 4.4L15.684 7.5ZM14.1673 13.3333L10.0007 15.6L5.83398 13.3333V10.225L10.0007 12.5L14.1673 10.225V13.3333Z" fill="#EC3A4C"/>
      </svg>,
      link : '/'
    },
    {
      title : 'مشاوره کاری ',
      icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.33268 17.4998C2.87435 17.4998 2.48185 17.3365 2.15518 17.0098C1.82852 16.6832 1.66546 16.2909 1.66602 15.8332V6.66651C1.66602 6.20817 1.82935 5.81567 2.15602 5.48901C2.48268 5.16234 2.87491 4.99928 3.33268 4.99984H6.66602V3.33317C6.66602 2.87484 6.82935 2.48234 7.15602 2.15567C7.48268 1.82901 7.87491 1.66595 8.33268 1.66651H11.666C12.1244 1.66651 12.5169 1.82984 12.8435 2.15651C13.1702 2.48317 13.3332 2.87539 13.3327 3.33317V4.99984H16.666C17.1244 4.99984 17.5169 5.16317 17.8435 5.48984C18.1702 5.81651 18.3332 6.20873 18.3327 6.66651V15.8332C18.3327 16.2915 18.1694 16.684 17.8427 17.0107C17.516 17.3373 17.1238 17.5004 16.666 17.4998H3.33268ZM3.33268 15.8332H16.666V6.66651H3.33268V15.8332ZM8.33268 4.99984H11.666V3.33317H8.33268V4.99984Z" fill="#EC3A4C"/>
      </svg>,
      link : '/'
    },
    {
      title : 'مشاوره آمادگی آزمون زبان',
      icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clip-path="url(#clip0_782_304)">
          <path d="M16.6669 1.6665H7.778V4.44428H8.88911V2.77762H16.6669C17.0002 2.77762 17.2224 2.99984 17.2224 3.33317V9.44428C17.2224 9.77762 17.0002 9.99984 16.6669 9.99984H9.44466V13.8887H6.50022L4.44466 15.4998V13.8887H2.77799C2.44466 13.8887 2.22244 13.6665 2.22244 13.3332V7.22206C2.22244 6.88873 2.44466 6.6665 2.77799 6.6665H10.0002V5.55539H2.77799C1.83355 5.55539 1.11133 6.27762 1.11133 7.22206V13.3332C1.11133 14.2776 1.83355 14.9998 2.77799 14.9998H3.33355V17.8332L6.83355 14.9998H10.5558V11.1109H16.6669C17.6113 11.1109 18.3336 10.3887 18.3336 9.44428V3.33317C18.3336 2.38873 17.6113 1.6665 16.6669 1.6665Z" fill="#EC3A4C"/>
          <path d="M3.44531 12.7223H4.77865L5.11198 11.8334H6.8342L7.16753 12.7223H8.50087L6.61198 7.77783H5.27865L3.44531 12.7223ZM5.94531 9.16672L6.50087 10.8889H5.38976L5.94531 9.16672Z" fill="#EC3A4C"/>
          <path d="M11.1113 9.44461C11.7224 9.44461 12.5558 9.27794 13.3336 8.88905C14.1113 9.27794 15.0002 9.44461 15.5558 9.44461V8.3335C15.5558 8.3335 15.0002 8.3335 14.3891 8.11127C15.0558 7.44461 15.5558 6.44461 15.5558 5.00016V4.44461H13.8891V3.3335H12.778V4.44461H11.1113V5.55572H14.3891C14.278 6.55572 13.8336 7.16683 13.3336 7.55572C13.0002 7.27794 12.6669 6.88905 12.4447 6.38905H11.278C11.5002 7.11127 11.8336 7.66683 12.278 8.11127C11.7224 8.3335 11.2224 8.3335 11.1113 8.3335V9.44461Z" fill="#EC3A4C"/>
        </g>
        <defs>
          <clipPath id="clip0_782_304">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>,
      link : '/'
    },
    {
      title : 'مشاوره نظام وظیفه',
      icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <mask id="mask0_782_326" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
          <path d="M0 0H20V20H0V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_782_326)">
          <path d="M8.43663 10.6387C7.69301 10.6387 6.97985 10.3433 6.45403 9.81746C5.92821 9.29165 5.63281 8.57848 5.63281 7.83487V5.29492H11.2404V7.83484C11.2404 8.20305 11.1679 8.56765 11.027 8.90782C10.8861 9.248 10.6796 9.55709 10.4192 9.81745C10.1589 10.0778 9.84978 10.2843 9.50961 10.4253C9.16943 10.5662 8.80483 10.6387 8.43663 10.6387Z" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.28125 10.4058V11.9581C7.28266 12.2634 7.40492 12.5557 7.62128 12.7711C7.83764 12.9864 8.13049 13.1073 8.43576 13.1073C8.74103 13.1073 9.03388 12.9864 9.25024 12.7711C9.4666 12.5557 9.58886 12.2634 9.59027 11.9581V10.4058" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.43706 1.6665C7.47473 1.66651 6.55182 2.0488 5.87135 2.72926C5.19089 3.40973 4.8086 4.33264 4.80859 5.29497H12.0655C12.0655 4.33264 11.6832 3.40973 11.0028 2.72926C10.3223 2.0488 9.39938 1.66651 8.43706 1.6665Z" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.14844 5.29492H12.7248" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.4375 17.5659V13.1128" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.80859 15.5864H6.12803" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.332 4.72719L16.4722 4.05029L13.9902 10.8696L15.8501 11.5465L18.332 4.72719Z" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.543 3.71143L16.4729 4.04989" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.3145 12.7295L15.7942 13.632" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.2461 12.3921C16.3059 12.2277 16.298 12.0462 16.2241 11.8877C16.1501 11.7291 16.0162 11.6064 15.8518 11.5465L13.992 10.8696L11.5547 17.566H14.363L16.2461 12.3921Z" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.28299 11.958H5.79861C5.36543 11.958 4.93649 12.0433 4.53628 12.2091C4.13607 12.3749 3.77244 12.6178 3.46613 12.9241C3.15983 13.2304 2.91685 13.5941 2.75108 13.9943C2.58532 14.3945 2.5 14.8234 2.5 15.2566V17.5656H11.5542" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.2844 12.8113C12.6801 12.262 11.8928 11.9578 11.0762 11.958H9.5918" stroke="#EC3A4C" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>,
      link : '/'
    },
  ]
  

  return (
    <div className="text-primary-default bg-dark py-4">
      <MainContainer className={"flex justify-between align-middle items-center"}>
        <>
          <div>
            <Link to={'/'}>
              <img src={largelogo} alt='' className='h-[40px]' />
            </Link>
          </div>
          <div className='flex gap-4'>
            <Button 
              styleVariant='secondary'
              className='!border-0 text-white !bg-gray-700 !hover:bg-gray-600 !text-[13px]'
              leftIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.2" d="M22.4998 12.75V15H5.72416C5.07905 15 4.45111 14.7921 3.93351 14.4071C3.4159 14.022 3.0362 13.4804 2.85073 12.8625L1.53166 8.46563C1.49805 8.35365 1.49108 8.23537 1.51131 8.12022C1.53154 8.00507 1.57841 7.89625 1.64818 7.80243C1.71795 7.70862 1.80868 7.63242 1.91314 7.57991C2.01759 7.5274 2.13288 7.50003 2.24979 7.5H2.99979L5.24979 9.75H8.7101L7.53916 6.23719C7.5016 6.12452 7.49134 6.00454 7.50921 5.88712C7.52709 5.76971 7.57259 5.65822 7.64198 5.56183C7.71136 5.46544 7.80265 5.38691 7.90832 5.3327C8.01399 5.27848 8.13102 5.25014 8.24979 5.25H8.99979L13.4998 9.75H19.4998C20.2954 9.75 21.0585 10.0661 21.6211 10.6287C22.1837 11.1913 22.4998 11.9544 22.4998 12.75Z" fill="white"/>
                  <path d="M21.0006 20.25C21.0006 20.4489 20.9216 20.6397 20.7809 20.7803C20.6403 20.921 20.4495 21 20.2506 21H6.7506C6.55168 21 6.36092 20.921 6.22026 20.7803C6.07961 20.6397 6.00059 20.4489 6.0006 20.25C6.00059 20.0511 6.07961 19.8603 6.22026 19.7197C6.36092 19.579 6.55168 19.5 6.7506 19.5H20.2506C20.4495 19.5 20.6403 19.579 20.7809 19.7197C20.9216 19.8603 21.0006 20.0511 21.0006 20.25ZM23.2506 12.75V15C23.2506 15.1989 23.1716 15.3897 23.0309 15.5303C22.8903 15.671 22.6995 15.75 22.5006 15.75H5.72591C4.91851 15.7537 4.13175 15.4951 3.48402 15.013C2.8363 14.531 2.36264 13.8516 2.13434 13.0772L0.815282 8.68125C0.748081 8.45737 0.734129 8.22089 0.774541 7.99067C0.814952 7.76044 0.908608 7.54285 1.04804 7.35524C1.18747 7.16764 1.36881 7.01521 1.5776 6.91013C1.78639 6.80505 2.01685 6.75021 2.25059 6.75H3.0006C3.19924 6.75009 3.38974 6.82899 3.53028 6.96938L5.56184 9H7.67028L6.82653 6.47438C6.75134 6.24881 6.73084 6.0086 6.76674 5.77355C6.80263 5.53851 6.89389 5.31537 7.03298 5.12252C7.17207 4.92968 7.35501 4.77267 7.56672 4.66443C7.77842 4.55619 8.01283 4.49983 8.2506 4.5H9.0006C9.09912 4.49992 9.19669 4.51926 9.28773 4.5569C9.37878 4.59454 9.46152 4.64975 9.53122 4.71938L13.8118 9H19.5006C20.4952 9 21.449 9.39509 22.1522 10.0984C22.8555 10.8016 23.2506 11.7554 23.2506 12.75ZM21.7506 12.75C21.7506 12.1533 21.5135 11.581 21.0916 11.159C20.6696 10.7371 20.0973 10.5 19.5006 10.5H13.5006C13.3019 10.4999 13.1115 10.421 12.9709 10.2806L8.69028 6H8.2506L9.42153 9.51281C9.45909 9.62548 9.46936 9.74546 9.45148 9.86288C9.43361 9.98029 9.38811 10.0918 9.31872 10.1882C9.24933 10.2846 9.15805 10.3631 9.05238 10.4173C8.94671 10.4715 8.82967 10.4999 8.71091 10.5H5.2506C5.15207 10.5001 5.0545 10.4807 4.96346 10.4431C4.87241 10.4055 4.78967 10.3503 4.71997 10.2806L2.69028 8.25H2.25059L3.56966 12.6469C3.7068 13.1117 3.99123 13.5193 4.38013 13.8084C4.76902 14.0976 5.24132 14.2525 5.72591 14.25H21.7506V12.75Z" fill="white"/>
                </svg>
              }>
              پذیرش پرونده
            </Button>
            <Button 
              styleVariant='primary'  
              className=' !text-[13px] group' 
              leftIcon={<img src={ph_chat} className='w-[20px]' alt=''/>}>
              درخواست مشاوره
              <div className='hidden absolute left-1/2 -translate-x-1/2 top-[100%] group-hover:block z-50'>
                <ul className='flex flex-col items-start duration-1000 ease-in-out bg-white  border border-gray-200 rounded-xl w-max px-4 py-1 '>
                  {
                    mohshaverMenu.map((value) => {
                      return (
                        <li className='w-full inline-flex flex-row hover:text-primary-default items-center gap-2 border-b last:border-b-0 border-gray-100 py-3 text-[14px] text-black'>
                          <Link className='w-full flex flex-row items-center gap-2 justify-start' to={value.link}>
                            {value.icon}
                            <p>{value.title}</p>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              
            </Button>
            
          </div>
        </>
      </MainContainer>
    </div>
  )
}

export default Header