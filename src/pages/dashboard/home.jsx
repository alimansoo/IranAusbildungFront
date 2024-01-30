import React from 'react'
import Index from './layout'
import Button from '../../components/button'
import Card from '../../components/card'
import TabGenerator from '../../components/TabGenerator'

const Home = () => {
  return (
    <Index content={
      <>
        <section className="w-full bg-white rounded-xl">
          
          <div className="w-full flex flex-row border-b border-gray-200 p-4 px-6 justify-between">
            <div className="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M20.8727 23.9978C20.4963 23.9978 20.1363 23.893 19.7927 23.6833L14.4091 20.2943C14.2819 20.217 14.1381 20.1763 13.9918 20.1763C13.8455 20.1763 13.7017 20.217 13.5745 20.2943L8.1909 23.6833C7.52 24.1026 6.73454 24.1026 6.06363 23.7008C5.39273 23.299 5 22.5479 5 21.7268V5.62036C5 4.17043 6.09636 3 7.45454 3H20.5454C21.9036 3 23 4.17043 23 5.62036V21.7268C23.0015 22.024 22.948 22.3186 22.8427 22.5937C22.7373 22.8689 22.5822 23.1191 22.3861 23.33C22.19 23.541 21.9568 23.7086 21.6999 23.8232C21.443 23.9378 21.1675 23.9971 20.8891 23.9978H20.8727ZM14 18.4077C14.4254 18.4077 14.8673 18.53 15.2436 18.7745L20.6272 22.1635C20.84 22.3033 21.0363 22.2159 21.1182 22.1635C21.2 22.1111 21.3636 21.9888 21.3636 21.7093V5.62036C21.3636 5.13122 21.0036 4.7469 20.5454 4.7469H7.45454C6.99636 4.7469 6.63636 5.13122 6.63636 5.62036V21.7268C6.63636 22.0063 6.8 22.1286 6.88182 22.181C6.96363 22.2334 7.14363 22.3208 7.37272 22.181L12.7563 18.792C13.1491 18.5474 13.5745 18.4252 14 18.4252V18.4077Z" fill="black"/>
              </svg>
              <p className='text-[18px]'>آوسبیلدونگ های ذخیره شده </p>
            </div>
            <Button
            size='small'
              styleVariant='grey'
              rightIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8.77494 12.8914C8.83634 12.9486 8.8856 13.0176 8.91976 13.0943C8.95392 13.1709 8.97228 13.2537 8.97376 13.3376C8.97525 13.4215 8.95981 13.5049 8.92837 13.5827C8.89694 13.6605 8.85015 13.7312 8.7908 13.7906C8.73145 13.8499 8.66076 13.8967 8.58294 13.9281C8.50511 13.9596 8.42176 13.975 8.33784 13.9735C8.25392 13.9721 8.17116 13.9537 8.09449 13.9195C8.01782 13.8854 7.94882 13.8361 7.89161 13.7747L4.55827 10.4414C4.44123 10.3242 4.37549 10.1653 4.37549 9.99971C4.37549 9.83408 4.44123 9.67523 4.55827 9.55804L7.8916 6.22471C7.94882 6.1633 8.01782 6.11405 8.09449 6.07989C8.17116 6.04573 8.25392 6.02736 8.33784 6.02588C8.42175 6.0244 8.50511 6.03984 8.58294 6.07127C8.66076 6.10271 8.73145 6.1495 8.7908 6.20884C8.85015 6.26819 8.89694 6.33889 8.92837 6.41671C8.95981 6.49454 8.97525 6.57789 8.97376 6.66181C8.97228 6.74573 8.95392 6.82849 8.91976 6.90516C8.8856 6.98182 8.83634 7.05082 8.77494 7.10804L6.50827 9.37471L14.5833 9.37471C14.749 9.37471 14.908 9.44056 15.0252 9.55777C15.1424 9.67498 15.2083 9.83395 15.2083 9.99971C15.2083 10.1655 15.1424 10.3244 15.0252 10.4417C14.908 10.5589 14.749 10.6247 14.5833 10.6247L6.50827 10.6247L8.77494 12.8914Z" fill="currentColor"/>
                </svg>
              }
            >
              بیشتر 
            </Button>
          </div>
          <div className="w-full inline-flex justify-center items-center gap-8 py-10 px-12">
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
          </div>
        </section>
        <div className='flex flex-row gap-5'>
          <section className="w-full bg-white rounded-xl">
            <div className="w-full flex flex-row border-b border-gray-200 p-4 px-6 justify-between">
              <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M20.125 19.1758L14 22.6211L7.875 19.1758V15.5357L6.125 14.5635V20.1992L14 24.6289L21.875 20.1992V14.5635L20.125 15.5357V19.1758Z" fill="black"/>
                  <path d="M14 2.51465L1.75 8.86649V10.3832L14 17.1886L24.5 11.3554V16.1878H26.25V8.86649L14 2.51465ZM22.75 10.3257L21 11.2979L14 15.187L7 11.2979L5.25 10.3257L4.03709 9.65186L14 4.48591L23.9629 9.65186L22.75 10.3257Z" fill="black"/>
                </svg>
                <p className='text-[18px]'>لیست خدمات شما</p>
              </div>
              <Button
              size='small'
                styleVariant='grey'
                rightIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.77494 12.8914C8.83634 12.9486 8.8856 13.0176 8.91976 13.0943C8.95392 13.1709 8.97228 13.2537 8.97376 13.3376C8.97525 13.4215 8.95981 13.5049 8.92837 13.5827C8.89694 13.6605 8.85015 13.7312 8.7908 13.7906C8.73145 13.8499 8.66076 13.8967 8.58294 13.9281C8.50511 13.9596 8.42176 13.975 8.33784 13.9735C8.25392 13.9721 8.17116 13.9537 8.09449 13.9195C8.01782 13.8854 7.94882 13.8361 7.89161 13.7747L4.55827 10.4414C4.44123 10.3242 4.37549 10.1653 4.37549 9.99971C4.37549 9.83408 4.44123 9.67523 4.55827 9.55804L7.8916 6.22471C7.94882 6.1633 8.01782 6.11405 8.09449 6.07989C8.17116 6.04573 8.25392 6.02736 8.33784 6.02588C8.42175 6.0244 8.50511 6.03984 8.58294 6.07127C8.66076 6.10271 8.73145 6.1495 8.7908 6.20884C8.85015 6.26819 8.89694 6.33889 8.92837 6.41671C8.95981 6.49454 8.97525 6.57789 8.97376 6.66181C8.97228 6.74573 8.95392 6.82849 8.91976 6.90516C8.8856 6.98182 8.83634 7.05082 8.77494 7.10804L6.50827 9.37471L14.5833 9.37471C14.749 9.37471 14.908 9.44056 15.0252 9.55777C15.1424 9.67498 15.2083 9.83395 15.2083 9.99971C15.2083 10.1655 15.1424 10.3244 15.0252 10.4417C14.908 10.5589 14.749 10.6247 14.5833 10.6247L6.50827 10.6247L8.77494 12.8914Z" fill="currentColor"/>
                  </svg>
                }
              >
                بیشتر 
              </Button>
            </div>
            <div className="w-full inline-flex flex-col justify-center items-center gap-4 pt-3 pb-6 px-6">
              <div className="w-full">
                <TabGenerator items={[
                  {title:'همه'},
                  {title:'در حال انجام شد'},
                  {title:'انجام شده'},
                ]}/>
              </div>
              <div className="w-full border border-gray-200  rounded-lg overflow-hidden">
                <div className="w-full flex bg-gray-50">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">نوع جلسه</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">تاریخ تحویل</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">وضعیت</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">عملیات</span>
                </div>
                <div className="w-full flex items-center bg-white">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">بررسی رزومه و انگیزه نامه</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-green-500">انجام شده</span>
                  <span className="w-1/4 flex justify-center text-center py-5 px-4 text-[14px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <g clip-path="url(#clip0_2_5528)">
                        <rect y="30" width="30" height="30" rx="15" transform="rotate(-90 0 30)" fill="#EEEEEE"/>
                        <path d="M13.6199 9.17725L8 14.9704L13.6199 20.7636C13.6706 20.832 13.7351 20.8883 13.809 20.9289C13.8828 20.9695 13.9643 20.9933 14.0479 20.9988C14.1315 21.0043 14.2153 20.9912 14.2936 20.9606C14.3718 20.93 14.4428 20.8825 14.5016 20.8213C14.5604 20.7601 14.6057 20.6867 14.6345 20.606C14.6632 20.5253 14.6747 20.4392 14.6682 20.3536C14.6616 20.2679 14.6372 20.1847 14.5966 20.1096C14.556 20.0344 14.5001 19.9691 14.4327 19.918L10.2281 15.5701L21.4152 15.5701C21.5703 15.5701 21.719 15.507 21.8287 15.3945C21.9384 15.282 22 15.1295 22 14.9704C22 14.8114 21.9384 14.6588 21.8287 14.5464C21.719 14.4339 21.5703 14.3707 21.4152 14.3707L10.2281 14.3707L14.4327 10.0228C14.5421 9.90991 14.6032 9.75707 14.6027 9.59793C14.6021 9.43879 14.5399 9.28639 14.4298 9.17425C14.3197 9.06212 14.1707 8.99944 14.0155 9C13.8603 9.00057 13.7117 9.06433 13.6023 9.17725L13.6199 9.17725Z" fill="black"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_5528">
                          <rect y="30" width="30" height="30" rx="15" transform="rotate(-90 0 30)" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="w-full flex items-center bg-gray-50">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">بررسی رزومه و انگیزه نامه</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-red-500">در حال انجام</span>
                  <span className="w-1/4 flex justify-center text-center py-5 px-4 text-[14px] text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <g clip-path="url(#clip0_2_5528)">
                        <rect y="30" width="30" height="30" rx="15" transform="rotate(-90 0 30)" fill="#EEEEEE"/>
                        <path d="M13.6199 9.17725L8 14.9704L13.6199 20.7636C13.6706 20.832 13.7351 20.8883 13.809 20.9289C13.8828 20.9695 13.9643 20.9933 14.0479 20.9988C14.1315 21.0043 14.2153 20.9912 14.2936 20.9606C14.3718 20.93 14.4428 20.8825 14.5016 20.8213C14.5604 20.7601 14.6057 20.6867 14.6345 20.606C14.6632 20.5253 14.6747 20.4392 14.6682 20.3536C14.6616 20.2679 14.6372 20.1847 14.5966 20.1096C14.556 20.0344 14.5001 19.9691 14.4327 19.918L10.2281 15.5701L21.4152 15.5701C21.5703 15.5701 21.719 15.507 21.8287 15.3945C21.9384 15.282 22 15.1295 22 14.9704C22 14.8114 21.9384 14.6588 21.8287 14.5464C21.719 14.4339 21.5703 14.3707 21.4152 14.3707L10.2281 14.3707L14.4327 10.0228C14.5421 9.90991 14.6032 9.75707 14.6027 9.59793C14.6021 9.43879 14.5399 9.28639 14.4298 9.17425C14.3197 9.06212 14.1707 8.99944 14.0155 9C13.8603 9.00057 13.7117 9.06433 13.6023 9.17725L13.6199 9.17725Z" fill="black"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_5528">
                          <rect y="30" width="30" height="30" rx="15" transform="rotate(-90 0 30)" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="w-full flex items-center bg-white">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">بررسی رزومه و انگیزه نامه</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-green-500">انجام شده</span>
                  <span className="w-1/4 flex justify-center text-center py-5 px-4 text-[14px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <g clip-path="url(#clip0_2_5528)">
                        <rect y="30" width="30" height="30" rx="15" transform="rotate(-90 0 30)" fill="#EEEEEE"/>
                        <path d="M13.6199 9.17725L8 14.9704L13.6199 20.7636C13.6706 20.832 13.7351 20.8883 13.809 20.9289C13.8828 20.9695 13.9643 20.9933 14.0479 20.9988C14.1315 21.0043 14.2153 20.9912 14.2936 20.9606C14.3718 20.93 14.4428 20.8825 14.5016 20.8213C14.5604 20.7601 14.6057 20.6867 14.6345 20.606C14.6632 20.5253 14.6747 20.4392 14.6682 20.3536C14.6616 20.2679 14.6372 20.1847 14.5966 20.1096C14.556 20.0344 14.5001 19.9691 14.4327 19.918L10.2281 15.5701L21.4152 15.5701C21.5703 15.5701 21.719 15.507 21.8287 15.3945C21.9384 15.282 22 15.1295 22 14.9704C22 14.8114 21.9384 14.6588 21.8287 14.5464C21.719 14.4339 21.5703 14.3707 21.4152 14.3707L10.2281 14.3707L14.4327 10.0228C14.5421 9.90991 14.6032 9.75707 14.6027 9.59793C14.6021 9.43879 14.5399 9.28639 14.4298 9.17425C14.3197 9.06212 14.1707 8.99944 14.0155 9C13.8603 9.00057 13.7117 9.06433 13.6023 9.17725L13.6199 9.17725Z" fill="black"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_5528">
                          <rect y="30" width="30" height="30" rx="15" transform="rotate(-90 0 30)" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-white rounded-xl">
            <div className="w-full flex flex-row border-b border-gray-200 p-4 px-6 justify-between">
              <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M19.7567 10.4593C19.4443 8.11295 18.2524 5.97288 16.422 4.47205C14.5917 2.97122 12.2595 2.22169 9.8975 2.37512C7.53547 2.52854 5.3199 3.57347 3.69907 5.29847C2.07825 7.02347 1.17318 9.29975 1.16699 11.6668C1.16699 13.8741 1.93349 15.9029 3.21566 17.5013C4.15833 18.6784 4.66699 19.9793 4.66699 21.3571V25.6668H15.167L15.1682 22.1668H17.5003C18.1192 22.1668 18.7127 21.9209 19.1502 21.4833C19.5878 21.0458 19.8337 20.4523 19.8337 19.8334V16.4163L22.1203 15.4363C22.5193 15.2659 22.5543 14.8599 22.3817 14.5881L19.7567 10.4581V10.4593ZM3.50033 11.6668C3.49853 9.88785 4.17409 8.17499 5.38971 6.87623C6.60533 5.57747 8.26983 4.79025 10.045 4.67453C11.8201 4.55881 13.5727 5.12328 14.9467 6.25323C16.3206 7.38317 17.2128 8.99384 17.442 10.7579L17.5085 11.2736L19.3087 14.1028L17.5003 14.8774V19.8334H12.836L12.8337 23.3334H7.00033V21.3571C7.00033 19.4449 6.31083 17.6331 5.03449 16.0418C4.03817 14.8016 3.49673 13.2576 3.50033 11.6668ZM24.68 21.1191L22.7375 19.8241C23.8897 18.1005 24.5033 16.0733 24.5003 14.0001C24.504 11.9266 23.8907 9.89889 22.7387 8.17492L24.68 6.87992C26.0884 8.98706 26.8381 11.4656 26.8337 14.0001C26.8337 16.6344 26.0403 19.0821 24.68 21.1191Z" fill="black"/>
                </svg>
                <p className='text-[18px]'>لیست مشاوره ها</p>
              </div>
              <Button
              size='small'
                styleVariant='grey'
                rightIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.77494 12.8914C8.83634 12.9486 8.8856 13.0176 8.91976 13.0943C8.95392 13.1709 8.97228 13.2537 8.97376 13.3376C8.97525 13.4215 8.95981 13.5049 8.92837 13.5827C8.89694 13.6605 8.85015 13.7312 8.7908 13.7906C8.73145 13.8499 8.66076 13.8967 8.58294 13.9281C8.50511 13.9596 8.42176 13.975 8.33784 13.9735C8.25392 13.9721 8.17116 13.9537 8.09449 13.9195C8.01782 13.8854 7.94882 13.8361 7.89161 13.7747L4.55827 10.4414C4.44123 10.3242 4.37549 10.1653 4.37549 9.99971C4.37549 9.83408 4.44123 9.67523 4.55827 9.55804L7.8916 6.22471C7.94882 6.1633 8.01782 6.11405 8.09449 6.07989C8.17116 6.04573 8.25392 6.02736 8.33784 6.02588C8.42175 6.0244 8.50511 6.03984 8.58294 6.07127C8.66076 6.10271 8.73145 6.1495 8.7908 6.20884C8.85015 6.26819 8.89694 6.33889 8.92837 6.41671C8.95981 6.49454 8.97525 6.57789 8.97376 6.66181C8.97228 6.74573 8.95392 6.82849 8.91976 6.90516C8.8856 6.98182 8.83634 7.05082 8.77494 7.10804L6.50827 9.37471L14.5833 9.37471C14.749 9.37471 14.908 9.44056 15.0252 9.55777C15.1424 9.67498 15.2083 9.83395 15.2083 9.99971C15.2083 10.1655 15.1424 10.3244 15.0252 10.4417C14.908 10.5589 14.749 10.6247 14.5833 10.6247L6.50827 10.6247L8.77494 12.8914Z" fill="currentColor"/>
                  </svg>
                }
              >
                بیشتر 
              </Button>
            </div>
            <div className="w-full inline-flex flex-col justify-center items-center gap-4 pt-3 pb-6 px-6">
              <div className="w-full">
                <TabGenerator items={[
                  {title:'همه'},
                  {title:'مشاوره تحصیلی'},
                  {title:'مشاوره نظام وظیفه'},
                  {title:'مشاوره کاری'},
                  {title:'مشاوره آوسبیلدونگ'},
                ]}/>
              </div>
              <div className="w-full border border-gray-200  rounded-lg overflow-hidden">
                <div className="w-full flex bg-gray-50">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">نوع مشاوره</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">تاریخ و ساعت</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">مصاحبه گر</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">وضعیت</span>
                </div>
                <div className="w-full flex bg-white">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">مشاوره تحصیلی</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳:۲۱ - ۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">سینا شاطریان</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-green-500">جلسه بعد</span>
                </div>
                <div className="w-full flex bg-gray-50">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">مشاوره تحصیلی</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳:۲۱ - ۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">سینا شاطریان</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-red-500">جلسه بعد</span>
                </div>
                <div className="w-full flex bg-white">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">مشاوره تحصیلی</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳:۲۱ - ۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">سینا شاطریان</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-green-500">جلسه بعد</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        
      </>
    } />
  )
}

export default Home