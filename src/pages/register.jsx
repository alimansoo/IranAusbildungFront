import React from 'react'
import Button from '../components/button'
import LargeLogo from '../large-logo.svg'
import { Link } from 'react-router-dom'

const register = () => {
  return (
    <div className='bg-gray-800 text-white min-h-[100vh] h-max max-w-[100vw] flex flex-col gap-8 items-center justify-center py-14'>
      <Link to={'/'}><img src={LargeLogo} alt='' /></Link>
      <div className='bg-white flex flex-col gap-4 w-[420px] rounded-xl p-8 text-gray-700'>
        <div className='inline-flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M29.1654 32.0835H26.2487V29.1668C26.2487 28.0065 25.7878 26.8937 24.9673 26.0732C24.1468 25.2528 23.034 24.7918 21.8737 24.7918H13.1237C11.9634 24.7918 10.8506 25.2528 10.0301 26.0732C9.20963 26.8937 8.7487 28.0065 8.7487 29.1668V32.0835H5.83203V29.1668C5.83203 27.233 6.60026 25.3783 7.96771 24.0108C9.33516 22.6434 11.1898 21.8752 13.1237 21.8752H21.8737C23.8076 21.8752 25.6622 22.6434 27.0297 24.0108C28.3971 25.3783 29.1654 27.233 29.1654 29.1668V32.0835ZM17.4987 18.9585C16.3496 18.9585 15.2118 18.7322 14.1502 18.2924C13.0886 17.8527 12.124 17.2082 11.3115 16.3957C10.499 15.5832 9.85448 14.6186 9.41475 13.557C8.97502 12.4954 8.7487 11.3576 8.7487 10.2085C8.7487 9.05943 8.97502 7.92162 9.41475 6.86002C9.85448 5.79842 10.499 4.83382 11.3115 4.02131C12.124 3.2088 13.0886 2.56428 14.1502 2.12455C15.2118 1.68482 16.3496 1.4585 17.4987 1.4585C19.8193 1.4585 22.0449 2.38037 23.6859 4.02131C25.3268 5.66226 26.2487 7.88785 26.2487 10.2085C26.2487 12.5291 25.3268 14.7547 23.6859 16.3957C22.0449 18.0366 19.8193 18.9585 17.4987 18.9585ZM17.4987 16.0418C19.0458 16.0418 20.5295 15.4272 21.6235 14.3333C22.7175 13.2393 23.332 11.7556 23.332 10.2085C23.332 8.6614 22.7175 7.17767 21.6235 6.08371C20.5295 4.98974 19.0458 4.37516 17.4987 4.37516C15.9516 4.37516 14.4679 4.98974 13.3739 6.08371C12.2799 7.17767 11.6654 8.6614 11.6654 10.2085C11.6654 11.7556 12.2799 13.2393 13.3739 14.3333C14.4679 15.4272 15.9516 16.0418 17.4987 16.0418Z" fill="#EC3A4C"/>
          </svg>
          <h6 className='text-[22px]'>ثبت نام</h6>
        </div>
        <p className='text-gray-400 text-[14px]'>جهت ثبت نام ، لطفا اطلاعات زیر را وارد کنید</p>
        <div></div>
        <form className='w-full flex flex-col gap-3' method='post'>
          <div className='inline-flex flex-col gap-2'>
            <label htmlFor="" className='text-[14px] font-bold'>نام و نام خانوادگی</label>
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
            <label htmlFor="" className='text-[14px] font-bold'>شماره تماس</label>
            <div className="relative">
              <input type="text" name='username' placeholder='شماره تماس را وارد کنید' className='w-full pr-10 pl-4 py-4 rounded-md bg-gray-100 outline-none placeholder:text-gray-400 text-[14px]' />
              <span className='absolute right-3 top-1/2 -translate-y-1/2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.3564 6.57233C15.5951 4.99983 14.4864 3.58733 12.7926 3.06983C12.4921 2.97793 12.1678 3.00409 11.8858 3.14298C11.6039 3.28186 11.3855 3.52303 11.2751 3.81733L10.7314 5.26733C10.6438 5.5006 10.628 5.7547 10.6859 5.99702C10.7438 6.23935 10.8728 6.45884 11.0564 6.62733L12.6739 8.10858C12.7536 8.18174 12.813 8.27432 12.8463 8.37728C12.8796 8.48025 12.8857 8.59008 12.8639 8.69608L12.8489 8.76108L12.8101 8.92358C12.609 9.71314 12.3025 10.472 11.8989 11.1798C11.4592 11.932 10.9137 12.6169 10.2789 13.2136L10.2289 13.2586C10.1481 13.3303 10.0502 13.3798 9.9446 13.4024C9.83901 13.4249 9.72938 13.4197 9.62638 13.3873L7.53513 12.7286C7.29747 12.654 7.04293 12.6521 6.80417 12.7231C6.56542 12.7941 6.35333 12.9349 6.19513 13.1273L5.20513 14.3286C4.79263 14.8286 4.84263 15.5636 5.31638 16.0048C6.61263 17.2136 8.39513 17.4611 9.63513 16.4648C11.1551 15.2388 12.4364 13.7435 13.4151 12.0536C14.4018 10.365 15.0596 8.50537 15.3564 6.57233ZM11.5526 8.77858L10.2126 7.54858C9.84534 7.21175 9.58709 6.77283 9.47105 6.28817C9.35501 5.80351 9.38646 5.29523 9.56138 4.82858L10.1039 3.37858C10.326 2.78639 10.7655 2.30115 11.3329 2.02175C11.9003 1.74235 12.5528 1.68981 13.1576 1.87483C15.2614 2.51858 16.9501 4.40483 16.5926 6.76108C16.3426 8.40608 15.7664 10.4986 14.4951 12.6836C13.4392 14.5057 12.0571 16.118 10.4176 17.4398C8.55763 18.9336 6.07513 18.4236 4.46263 16.9211C4.00124 16.4915 3.72118 15.902 3.6796 15.2729C3.63802 14.6439 3.83805 14.0227 4.23888 13.5361L5.22888 12.3336C5.54559 11.9492 5.96989 11.6681 6.44738 11.5265C6.92488 11.3848 7.4338 11.3891 7.90888 11.5386L9.64513 12.0848C10.0934 11.6226 10.4861 11.1095 10.8151 10.5561C11.133 9.99653 11.3807 9.39995 11.5526 8.77983V8.77858Z" fill="#9D9D9D"/>
                </svg>
              </span>
            </div>
          </div>
          <div className='inline-flex flex-col gap-2'>
            <label htmlFor="" className='text-[14px] font-bold'>آدرس ایمیل</label>
            <div className="relative">
              <input type="email" name='username' placeholder=' آدرس ایمیل را وارد کنید' className='w-full pr-10 pl-4 py-4 rounded-md bg-gray-100 outline-none placeholder:text-gray-400 text-[14px]' />
              <span className='absolute right-3 top-1/2 -translate-y-1/2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10.0013 1.6665C5.4013 1.6665 1.66797 5.39984 1.66797 9.99984C1.66797 14.5998 5.4013 18.3332 10.0013 18.3332H14.168V16.6665H10.0013C6.38463 16.6665 3.33464 13.6165 3.33464 9.99984C3.33464 6.38317 6.38463 3.33317 10.0013 3.33317C13.618 3.33317 16.668 6.38317 16.668 9.99984V11.1915C16.668 11.8498 16.0763 12.4998 15.418 12.4998C14.7596 12.4998 14.168 11.8498 14.168 11.1915V9.99984C14.168 7.69984 12.3013 5.83317 10.0013 5.83317C7.7013 5.83317 5.83464 7.69984 5.83464 9.99984C5.83464 12.2998 7.7013 14.1665 10.0013 14.1665C11.1513 14.1665 12.2013 13.6998 12.9513 12.9415C13.493 13.6832 14.4263 14.1665 15.418 14.1665C17.0596 14.1665 18.3346 12.8332 18.3346 11.1915V9.99984C18.3346 5.39984 14.6013 1.6665 10.0013 1.6665ZM10.0013 12.4998C8.61797 12.4998 7.5013 11.3832 7.5013 9.99984C7.5013 8.6165 8.61797 7.49984 10.0013 7.49984C11.3846 7.49984 12.5013 8.6165 12.5013 9.99984C12.5013 11.3832 11.3846 12.4998 10.0013 12.4998Z" fill="#9D9D9D"/>
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
          <div></div>
          <Button className='w-full text-[14px]' size='large' type='submit'>ثبت نام</Button>
        </form>
        <Button 
          className='w-full text-[14px] border-gray-300' 
          styleVariant='secondary'
          size='large'
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
        </svg>}
        >
          ثبت نام با حساب گوگل
        </Button>
        <div className='inline-flex flex-row gap-1 justify-center text-[14px]'>
          حساب کاربری دارید؟ 
          <span className='text-primary-default'><Link to={'/login'}>  وارد شوید!</Link></span>
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

export default register