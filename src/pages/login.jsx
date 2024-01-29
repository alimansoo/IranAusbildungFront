import React from 'react'
import Button from '../components/button'
import LargeLogo from '../large-logo.svg'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className='bg-gray-800 text-white h-[100vh] w-[100vw] flex flex-col gap-8 items-center justify-center'>
      <Link to={'/'}><img src={LargeLogo} alt='' /></Link>
      <div className='bg-white flex flex-col gap-4 w-[420px] rounded-xl p-8 text-gray-700'>
        <div className='inline-flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M29.1654 32.0835H26.2487V29.1668C26.2487 28.0065 25.7878 26.8937 24.9673 26.0732C24.1468 25.2528 23.034 24.7918 21.8737 24.7918H13.1237C11.9634 24.7918 10.8506 25.2528 10.0301 26.0732C9.20963 26.8937 8.7487 28.0065 8.7487 29.1668V32.0835H5.83203V29.1668C5.83203 27.233 6.60026 25.3783 7.96771 24.0108C9.33516 22.6434 11.1898 21.8752 13.1237 21.8752H21.8737C23.8076 21.8752 25.6622 22.6434 27.0297 24.0108C28.3971 25.3783 29.1654 27.233 29.1654 29.1668V32.0835ZM17.4987 18.9585C16.3496 18.9585 15.2118 18.7322 14.1502 18.2924C13.0886 17.8527 12.124 17.2082 11.3115 16.3957C10.499 15.5832 9.85448 14.6186 9.41475 13.557C8.97502 12.4954 8.7487 11.3576 8.7487 10.2085C8.7487 9.05943 8.97502 7.92162 9.41475 6.86002C9.85448 5.79842 10.499 4.83382 11.3115 4.02131C12.124 3.2088 13.0886 2.56428 14.1502 2.12455C15.2118 1.68482 16.3496 1.4585 17.4987 1.4585C19.8193 1.4585 22.0449 2.38037 23.6859 4.02131C25.3268 5.66226 26.2487 7.88785 26.2487 10.2085C26.2487 12.5291 25.3268 14.7547 23.6859 16.3957C22.0449 18.0366 19.8193 18.9585 17.4987 18.9585ZM17.4987 16.0418C19.0458 16.0418 20.5295 15.4272 21.6235 14.3333C22.7175 13.2393 23.332 11.7556 23.332 10.2085C23.332 8.6614 22.7175 7.17767 21.6235 6.08371C20.5295 4.98974 19.0458 4.37516 17.4987 4.37516C15.9516 4.37516 14.4679 4.98974 13.3739 6.08371C12.2799 7.17767 11.6654 8.6614 11.6654 10.2085C11.6654 11.7556 12.2799 13.2393 13.3739 14.3333C14.4679 15.4272 15.9516 16.0418 17.4987 16.0418Z" fill="#EC3A4C"/>
          </svg>
          <h6 className='text-[22px]'>ورود کاربر</h6>
        </div>
        <p className='text-gray-400 text-[14px]'>برای ورود ، لطفا اطلاعات خود را وارد کنید.</p>
        <div></div>
        <form className='w-full justify-center flex flex-col gap-3' method='post'>
          <div className='inline-flex flex-col gap-2'>
            <label htmlFor="" className='text-[14px] font-bold'>آدرس ایمیل یا شماره تماس</label>
            <div className="relative">
              <input type="text" name='username' placeholder='اطلاعات را وارد کنید' className='w-full pr-10 pl-4 py-4 rounded-md bg-gray-100 outline-none placeholder:text-gray-400 text-[14px]' />
              <span className='absolute right-3 top-1/2 -translate-y-1/2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6654 18.3335H14.9987V16.6668C14.9987 16.0038 14.7353 15.3679 14.2665 14.8991C13.7976 14.4302 13.1617 14.1668 12.4987 14.1668H7.4987C6.83566 14.1668 6.19977 14.4302 5.73093 14.8991C5.26209 15.3679 4.9987 16.0038 4.9987 16.6668V18.3335H3.33203V16.6668C3.33203 15.5618 3.77102 14.502 4.55242 13.7206C5.33382 12.9391 6.39363 12.5002 7.4987 12.5002H12.4987C13.6038 12.5002 14.6636 12.9391 15.445 13.7206C16.2264 14.502 16.6654 15.5618 16.6654 16.6668V18.3335ZM9.9987 10.8335C9.34209 10.8335 8.69191 10.7042 8.08528 10.4529C7.47865 10.2016 6.92746 9.83332 6.46316 9.36903C5.99887 8.90474 5.63057 8.35354 5.3793 7.74691C5.12803 7.14029 4.9987 6.49011 4.9987 5.8335C4.9987 5.17689 5.12803 4.52671 5.3793 3.92008C5.63057 3.31345 5.99887 2.76226 6.46316 2.29796C6.92746 1.83367 7.47865 1.46537 8.08528 1.2141C8.69191 0.962825 9.34209 0.833496 9.9987 0.833496C11.3248 0.833496 12.5966 1.36028 13.5342 2.29796C14.4719 3.23564 14.9987 4.50741 14.9987 5.8335C14.9987 7.15958 14.4719 8.43135 13.5342 9.36903C12.5966 10.3067 11.3248 10.8335 9.9987 10.8335ZM9.9987 9.16683C10.8828 9.16683 11.7306 8.81564 12.3557 8.19052C12.9808 7.5654 13.332 6.71755 13.332 5.8335C13.332 4.94944 12.9808 4.10159 12.3557 3.47647C11.7306 2.85135 10.8828 2.50016 9.9987 2.50016C9.11464 2.50016 8.2668 2.85135 7.64168 3.47647C7.01655 4.10159 6.66536 4.94944 6.66536 5.8335C6.66536 6.71755 7.01655 7.5654 7.64168 8.19052C8.2668 8.81564 9.11464 9.16683 9.9987 9.16683Z" fill="#9D9D9D"/>
                </svg>
              </span>
            </div>
          </div>
          <div className='inline-flex flex-col gap-2'>
            <label htmlFor="password" className='text-[14px] font-bold'>رمز عبور</label>
            <div className="relative">
              <input type="password" id='password' name='password' placeholder='رمز عبور خود را وارد کنید' className='w-full pr-10 pl-4 py-4 rounded-md bg-gray-100 outline-none placeholder:text-gray-400 text-[14px]' />
              <span className='absolute right-3 top-1/2 -translate-y-1/2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M9.9987 10.8335C9.08203 10.8335 8.33203 11.5835 8.33203 12.5002C8.33203 13.4168 9.08203 14.1668 9.9987 14.1668C10.9154 14.1668 11.6654 13.4168 11.6654 12.5002C11.6654 11.5835 10.9154 10.8335 9.9987 10.8335ZM14.9987 6.66683H14.1654V5.00016C14.1654 2.70016 12.2987 0.833496 9.9987 0.833496C8.0987 0.833496 6.44036 2.11683 5.96536 3.9585C5.8487 4.4085 6.11536 4.8585 6.56536 4.97516C6.67152 5.00271 6.78207 5.00904 6.89068 4.99378C6.99928 4.97852 7.10381 4.94197 7.19826 4.88623C7.29271 4.83049 7.37523 4.75665 7.44109 4.66895C7.50694 4.58125 7.55484 4.48141 7.58203 4.37516C7.7199 3.83889 8.03214 3.36367 8.46961 3.02425C8.90709 2.68483 9.44499 2.50047 9.9987 2.50016C11.3737 2.50016 12.4987 3.62516 12.4987 5.00016V6.66683H4.9987C4.08203 6.66683 3.33203 7.41683 3.33203 8.3335V16.6668C3.33203 17.5835 4.08203 18.3335 4.9987 18.3335H14.9987C15.9154 18.3335 16.6654 17.5835 16.6654 16.6668V8.3335C16.6654 7.41683 15.9154 6.66683 14.9987 6.66683ZM14.9987 15.8335C14.9987 16.2918 14.6237 16.6668 14.1654 16.6668H5.83203C5.3737 16.6668 4.9987 16.2918 4.9987 15.8335V9.16683C4.9987 8.7085 5.3737 8.3335 5.83203 8.3335H14.1654C14.6237 8.3335 14.9987 8.7085 14.9987 9.16683V15.8335Z" fill="#9D9D9D"/>
                </svg>
              </span>
            </div>
          </div>
          <div className='w-full flex justify-between py-2'>
            <div className='inline-flex gap-2'>
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember" className='text-[14px]'>مرا به خاطر بسپار</label>
            </div>
            <span className='text-primary-default text-[14px]'>
              <Link>رمز را فراموش کرده اید؟</Link>
            </span>
          </div>
          <Button 
            className='w-full !text-[14px]' 
            size='large' 
            type='submit'
            isFull
          >ورود</Button>
        </form>
        <Button 
          className='w-full !text-[14px] border-gray-300' 
          styleVariant='secondary'
          size='large'
          isFull
          leftIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_2_4141)">
                <path d="M23.4453 12.2247C23.4453 11.2414 23.3655 10.5239 23.1928 9.77979H11.9648V14.2178H18.5554C18.4226 15.3207 17.7051 16.9816 16.1105 18.0977L16.0882 18.2463L19.6382 20.9965L19.8842 21.021C22.143 18.9349 23.4453 15.8654 23.4453 12.2247Z" fill="#4285F4"/>
                <path d="M11.9645 23.9178C15.1933 23.9178 17.9039 22.8548 19.8838 21.0211L16.1101 18.0978C15.1003 18.8021 13.7449 19.2937 11.9645 19.2937C8.80204 19.2937 6.11798 17.2076 5.16119 14.3242L5.02094 14.3361L1.32952 17.193L1.28125 17.3271C3.24778 21.2337 7.2872 23.9178 11.9645 23.9178Z" fill="#34A853"/>
                <path d="M5.15942 14.3238C4.90696 13.5797 4.76085 12.7824 4.76085 11.9586C4.76085 11.1347 4.90696 10.3375 5.14614 9.59342L5.13945 9.43494L1.40177 6.53223L1.27948 6.59039C0.468975 8.21149 0.00390625 10.0319 0.00390625 11.9586C0.00390625 13.8853 0.468975 15.7056 1.27948 17.3267L5.15942 14.3238Z" fill="#FBBC05"/>
                <path d="M11.9645 4.62403C14.21 4.62403 15.7248 5.59402 16.5885 6.40461L19.9635 3.10928C17.8907 1.1826 15.1933 0 11.9645 0C7.2872 0 3.24778 2.68406 1.28125 6.59056L5.14791 9.59359C6.11798 6.7102 8.80204 4.62403 11.9645 4.62403Z" fill="#EB4335"/>
              </g>
              <defs>
                <clipPath id="clip0_2_4141">
                  <rect width="23.46" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          }
        >
          ورود با حساب گوگل
        </Button>
        <div className='inline-flex flex-row gap-1 justify-center text-[14px]'>
          حساب کاربری ندارید؟ 
          <span className='text-primary-default'><Link to={'/register'}>ثبت نام کنید!</Link></span>
        </div>
      </div>
      <div className='inline-flex items-center gap-2'>
        بازگشت
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.4067 5.55986L4 11.9999L10.4067 18.4399C10.4645 18.5158 10.538 18.5785 10.6222 18.6236C10.7064 18.6687 10.7993 18.6952 10.8946 18.7013C10.9899 18.7074 11.0854 18.6929 11.1747 18.6589C11.2639 18.6248 11.3448 18.572 11.4118 18.504C11.4789 18.436 11.5305 18.3544 11.5633 18.2646C11.596 18.1749 11.6091 18.0792 11.6017 17.984C11.5943 17.8888 11.5664 17.7963 11.5201 17.7128C11.4738 17.6292 11.4101 17.5566 11.3333 17.4999L6.54 12.6665L19.2933 12.6665C19.4701 12.6665 19.6397 12.5963 19.7647 12.4713C19.8898 12.3462 19.96 12.1767 19.96 11.9999C19.96 11.8231 19.8898 11.6535 19.7647 11.5285C19.6397 11.4034 19.4701 11.3332 19.2933 11.3332L6.54 11.3332L11.3333 6.49986C11.458 6.37433 11.5277 6.20441 11.527 6.02751C11.5264 5.8506 11.4555 5.68118 11.33 5.55653C11.2045 5.43188 11.0346 5.3622 10.8576 5.36283C10.6807 5.36345 10.5113 5.43433 10.3867 5.55986L10.4067 5.55986Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

export default login