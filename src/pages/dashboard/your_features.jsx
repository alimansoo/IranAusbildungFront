import React from 'react'
import Index from './layout'
import TabGenerator from '../../components/TabGenerator'

const YourFeatures = () => {
  return (
    <Index content={
      <>
        <section className="w-full mx-auto my-12 max-w-[800px] bg-white rounded-xl">
            <div className="w-full flex flex-row border-b border-gray-200 p-4 px-6 justify-between">
              <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M20.125 19.1758L14 22.6211L7.875 19.1758V15.5357L6.125 14.5635V20.1992L14 24.6289L21.875 20.1992V14.5635L20.125 15.5357V19.1758Z" fill="black"/>
                  <path d="M14 2.51465L1.75 8.86649V10.3832L14 17.1886L24.5 11.3554V16.1878H26.25V8.86649L14 2.51465ZM22.75 10.3257L21 11.2979L14 15.187L7 11.2979L5.25 10.3257L4.03709 9.65186L14 4.48591L23.9629 9.65186L22.75 10.3257Z" fill="black"/>
                </svg>
                <p className='text-[18px]'>لیست خدمات شما</p>
              </div>
              <div></div>
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
        
      </>
    } />
  )
}

export default YourFeatures