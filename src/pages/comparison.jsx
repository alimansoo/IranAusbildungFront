import '../App.css';
import Auth from '../components/auth/index';
import MainContainer from '../components/container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/footer';
import Button from '../components/button';
import Social from '../components/social';
// const candel


function Comparison() {
  return (
    <div className="bg-gray-50">
      <Auth />
      <div className='w-full flex flex-col items-center text-center'>
        <div className='w-full bg-gray-50 flex-col justify-center py-14 pb-0 relative'>
          <div className='absolute bg-gray-200 top-0 right-0 left-0 h-96 '></div>
          <MainContainer className='inline-flex flex-col justify-center items-center z-10 relative pb-16'>
            <div className='inline-flex flex-col rounded-md overflow-hidden text-center gap-5'>
              <div className='text-3xl font-bold'><span className='text-primary-default'>مقایسه</span> رشته های آوسبیلدونگ </div>
              <div className='text-sm text-gray-600'>برای مقایسه آوسبیلدونگ ها لطفا دو مورد را وارد کنید</div>
            </div>
            <div className='w-full inline-flex flex-col items-start gap-7 my-10 bg-white rounded-2xl shadow-lg p-10 pb-16'>
              <div className='w-full inline-flex justify-between items-center gap-6'>
                <div className='inline-flex justify-between bg-gray-100 py-3 px-6 rounded-xl items-center w-full'>
                  <div className='flex flex-col gap-2 text-right'>
                    <span>طراح رابط کاربری</span>
                    <span className='text-primary-default'>Ausbildung Benutzeroberflächendesigner</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <g clip-path="url(#clip0_2_3318)">
                      <rect width="35" height="35" rx="5" fill="#E7E7E7"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5305 22.906C18.257 23.1794 17.8862 23.333 17.4995 23.333C17.1128 23.333 16.7419 23.1794 16.4684 22.906L8.21865 14.6562C8.07936 14.5217 7.96826 14.3608 7.89184 14.1829C7.81541 14.0049 7.77518 13.8136 7.77349 13.6199C7.77181 13.4263 7.80871 13.2343 7.88203 13.055C7.95536 12.8758 8.06365 12.713 8.20057 12.5761C8.3375 12.4391 8.50033 12.3308 8.67955 12.2575C8.85877 12.1842 9.05081 12.1473 9.24444 12.149C9.43808 12.1507 9.62944 12.1909 9.80736 12.2673C9.98529 12.3438 10.1462 12.4549 10.2807 12.5941L17.4995 19.8129L24.7182 12.5941C24.9933 12.3285 25.3617 12.1815 25.744 12.1848C26.1264 12.1881 26.4922 12.3415 26.7626 12.6119C27.0329 12.8823 27.1863 13.2481 27.1896 13.6304C27.193 14.0128 27.046 14.3812 26.7803 14.6562L18.5305 22.906Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_3318">
                        <rect width="35" height="35" rx="5" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <Button styleVariant='textonly' className='!px-3 !rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="currentWidth" height="currentHeight" viewBox="0 0 20 20" fill="none">
                    <path d="M12.7513 11.0832L9.7513 8.08317C9.66797 7.99984 9.60908 7.90956 9.57464 7.81234C9.54019 7.71512 9.52269 7.61095 9.52214 7.49984C9.52214 7.38873 9.53964 7.28456 9.57464 7.18734C9.60964 7.09011 9.66853 6.99984 9.7513 6.9165L12.7513 3.9165C12.918 3.74984 13.1124 3.6665 13.3346 3.6665C13.5569 3.6665 13.7513 3.74984 13.918 3.9165C14.0846 4.08317 14.168 4.28123 14.168 4.51067C14.168 4.74012 14.0846 4.93789 13.918 5.104L12.3555 6.6665H17.5013C17.7374 6.6665 17.9355 6.7465 18.0955 6.9065C18.2555 7.0665 18.3352 7.26428 18.3346 7.49984C18.3346 7.73595 18.2546 7.934 18.0946 8.094C17.9346 8.254 17.7369 8.33373 17.5013 8.33317H12.3555L13.918 9.89567C14.0846 10.0623 14.168 10.2568 14.168 10.479C14.168 10.7012 14.0846 10.8957 13.918 11.0623C13.7513 11.229 13.5605 11.3193 13.3455 11.3332C13.1305 11.3471 12.9324 11.2637 12.7513 11.0832ZM6.08464 16.0623C6.2513 16.229 6.44575 16.3159 6.66797 16.3232C6.89019 16.3304 7.08464 16.2504 7.2513 16.0832L10.2513 13.0832C10.3346 12.9998 10.3935 12.9096 10.428 12.8123C10.4624 12.7151 10.4799 12.6109 10.4805 12.4998C10.4805 12.3887 10.463 12.2846 10.428 12.1873C10.393 12.0901 10.3341 11.9998 10.2513 11.9165L7.2513 8.9165C7.08464 8.74984 6.89019 8.6665 6.66797 8.6665C6.44575 8.6665 6.2513 8.74984 6.08464 8.9165C5.91797 9.08317 5.83464 9.28123 5.83464 9.51067C5.83464 9.74011 5.91797 9.93789 6.08464 10.104L7.64714 11.6665H2.5013C2.26519 11.6665 2.06714 11.7465 1.90714 11.9065C1.74714 12.0665 1.66742 12.2643 1.66797 12.4998C1.66797 12.7359 1.74797 12.934 1.90797 13.094C2.06797 13.254 2.26575 13.3337 2.5013 13.3332H7.64714L6.08464 14.8957C5.91797 15.0623 5.83464 15.2568 5.83464 15.479C5.83464 15.7012 5.91797 15.8957 6.08464 16.0623Z" fill="#EC3A4C"/>
                  </svg>
                </Button>
                <div className='inline-flex justify-between bg-gray-100 py-3 px-6 rounded-xl items-center w-full'>
                  <div className='flex flex-col gap-2 text-right'>
                    <span>طراح رابط کاربری</span>
                    <span className='text-primary-default'>Ausbildung Benutzeroberflächendesigner</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <g clip-path="url(#clip0_2_3318)">
                      <rect width="35" height="35" rx="5" fill="#E7E7E7"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5305 22.906C18.257 23.1794 17.8862 23.333 17.4995 23.333C17.1128 23.333 16.7419 23.1794 16.4684 22.906L8.21865 14.6562C8.07936 14.5217 7.96826 14.3608 7.89184 14.1829C7.81541 14.0049 7.77518 13.8136 7.77349 13.6199C7.77181 13.4263 7.80871 13.2343 7.88203 13.055C7.95536 12.8758 8.06365 12.713 8.20057 12.5761C8.3375 12.4391 8.50033 12.3308 8.67955 12.2575C8.85877 12.1842 9.05081 12.1473 9.24444 12.149C9.43808 12.1507 9.62944 12.1909 9.80736 12.2673C9.98529 12.3438 10.1462 12.4549 10.2807 12.5941L17.4995 19.8129L24.7182 12.5941C24.9933 12.3285 25.3617 12.1815 25.744 12.1848C26.1264 12.1881 26.4922 12.3415 26.7626 12.6119C27.0329 12.8823 27.1863 13.2481 27.1896 13.6304C27.193 14.0128 27.046 14.3812 26.7803 14.6562L18.5305 22.906Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_3318">
                        <rect width="35" height="35" rx="5" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className='w-full flex justify-between gap-7'>
                <ul className='w-1/4 flex flex-col justify-center items-start gap-3'>
                  <li className='inline-flex items-center gap-4'><span className='w-4 h-4 bg-primary-0'></span>طراح رابط کاربری</li>
                  <li className='inline-flex items-center gap-4'><span className='w-4 h-4 bg-primary-40'></span>مهندس معماری</li>
                </ul>
                <div className='w-2/4 inline-flex flex-row-reverse justify-around items-end'>
                  <div className='w-full flex flex-col items-center'>
                    <div className='flex flex-row items-end gap-2 pb-2'>
                      <span className='flex items-center justify-center w-max px-2 h-24 gap-1 rounded-lg bg-primary-40 text-white'>
                        1200
                      </span>
                      <span className='flex items-center justify-center w-max px-2 h-24 rounded-lg bg-primary-0 text-gray-700'>
                        1200
                      </span>
                    </div>
                    <div className='w-full border-t border-gray-200 pt-3'>
                      حقوق سال اول   
                    </div>
                  </div>
                  <div className='w-full flex flex-col items-center'>
                    <div className='flex flex-row items-end gap-2 pb-2'>
                      <span className='flex items-center justify-center w-max px-2 h-40 gap-1 rounded-lg bg-primary-40 text-white'>
                        1200
                      </span>
                      <span className='flex items-center justify-center w-max px-2 h-24 rounded-lg bg-primary-0 text-gray-700'>
                        1200
                      </span>
                    </div>
                    <div className='w-full border-t border-gray-200 pt-3'>
                      حقوق سال دوم  
                    </div>
                  </div>
                  <div className='w-full flex flex-col items-center'>
                    <div className='flex flex-row items-end gap-2 pb-2'>
                      <span className='flex items-center justify-center w-max px-2 h-32 gap-1 rounded-lg bg-primary-40 text-white'>
                        1200
                      </span>
                      <span className='flex items-center justify-center w-max px-2 h-24 rounded-lg bg-primary-0 text-gray-700'>
                        1200
                      </span>
                    </div>
                    <div className='w-full border-t border-gray-200 pt-3'>
                      حقوق سال سوم   
                    </div>
                  </div>
                  <div className='w-full flex flex-col items-center'>
                    <div className='flex flex-row items-end gap-2 pb-2'>
                      <span className='flex items-center justify-center w-max px-2 h-60 gap-1 rounded-lg bg-primary-40 text-white'>
                        1200
                      </span>
                      <span className='flex items-center justify-center w-max px-2 h-40 rounded-lg bg-primary-0 text-gray-700'>
                        1200
                      </span>
                    </div>
                    <div className='w-full border-t border-gray-200 pt-3'>
                      بعد از اتمام دوره  
                    </div>
                  </div>
                </div>
                <span className='w-1/4'></span>
              </div>
              <div className='w-full border-t border-gray-200 mt-8'></div>
              <div className='w-full flex justify-center gap-24 items-center'>
                <div className='w-1/4 flex flex-col h-full bg-white border-2 border-gray-100 rounded-xl shadow-md'>
                  <div className='inline-flex justify-center items-center gap-2 border-b border-gray-100 px-4 py-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 26.25C21.9036 26.25 27.5 20.6536 27.5 13.75C27.5 6.84644 21.9036 1.25 15 1.25C8.09644 1.25 2.5 6.84644 2.5 13.75C2.5 20.6536 8.09644 26.25 15 26.25Z" fill="#FFF59D"/>
                      <path d="M23.1258 13.75C23.1258 8.9375 19.0008 5.125 14.0633 5.6875C10.3133 6.125 7.31331 9.125 6.93831 12.875C6.62581 15.75 7.81331 18.3125 9.81331 19.9375C10.6883 20.6875 11.2508 21.75 11.2508 22.9375V23.125H18.7508V23.0625C18.7508 21.9375 19.2508 20.8125 20.1258 20.0625C21.9383 18.5625 23.1258 16.3125 23.1258 13.75Z" fill="#FBC02D"/>
                      <path d="M19.125 12.625L17.25 11.375C17.0625 11.25 16.75 11.25 16.5625 11.375L15 12.375L13.5 11.375C13.3125 11.25 13 11.25 12.8125 11.375L10.9375 12.625C10.8125 12.75 10.6875 12.875 10.6875 13.0625C10.6875 13.25 10.6875 13.4375 10.8125 13.5625L13.1875 16.5V23.125H14.4375V16.25C14.4375 16.125 14.375 16 14.3125 15.875L12.25 13.3125L13.1875 12.6875L14.6875 13.6875C14.875 13.8125 15.1875 13.8125 15.375 13.6875L16.875 12.6875L17.8125 13.3125L15.75 15.875C15.6875 16 15.625 16.125 15.625 16.25V23.125H16.875V16.5L19.25 13.5625C19.375 13.4375 19.4375 13.25 19.375 13.0625C19.3125 12.875 19.25 12.6875 19.125 12.625Z" fill="#FFF59D"/>
                      <path d="M15 29.375C16.0355 29.375 16.875 28.5355 16.875 27.5C16.875 26.4645 16.0355 25.625 15 25.625C13.9645 25.625 13.125 26.4645 13.125 27.5C13.125 28.5355 13.9645 29.375 15 29.375Z" fill="#5C6BC0"/>
                      <path d="M16.25 28.125H13.75C12.375 28.125 11.25 27 11.25 25.625V22.5H18.75V25.625C18.75 27 17.625 28.125 16.25 28.125Z" fill="#9FA8DA"/>
                      <path d="M18.75 25.625L11.5 26.625C11.6875 27.0625 12.0625 27.5 12.5 27.75L18.375 26.9375C18.625 26.5625 18.75 26.125 18.75 25.625ZM11.25 24.1875V25.4375L18.75 24.375V23.125L11.25 24.1875Z" fill="#5C6BC0"/>
                    </svg>
                    <span className='text-xl'>طراح رابط کاربری</span>
                  </div>
                  <div className='inline-flex border-b border-gray-100 justify-between px-6 py-4'>
                    <div>رشته تحصیلی:</div>
                    <div>رشته های هنری</div>
                  </div>
                  <div className='inline-flex border-b border-gray-100 justify-between px-6 py-4'>
                    <div>نوع رشته:</div>
                    <div>شولیشه</div>
                  </div>
                  <div className='inline-flex border-b border-gray-100 justify-between px-6 py-4'>
                    <div>مدت دوره:</div>
                    <div>3 ساله</div>
                  </div>
                  <div className='inline-flex border-b border-gray-100 justify-between px-6 py-4'>
                    <div>دوره:</div>
                    <div>شیفتی نمیباشد</div>
                  </div>
                  <div className="flex flex-col gap-4 py-5 px-4 pb-3">
                    <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-4 rounded-md">
                      <span>حقوق سال اول:</span>
                      <span className='inline-flex flex-row-reverse items-center gap-1 justify-center'>
                        638-1100 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M9.25781 3.51562H11.0156V2.57812H9.25781C7.09726 2.57812 5.25018 3.94503 4.5353 5.85938H3.04688V6.79688H4.2859C4.19637 7.34009 4.19637 7.89429 4.2859 8.4375H3.04688V9.375H4.5353C5.25015 11.2893 7.09726 12.6562 9.25796 12.6562H11.0158V11.7188H9.25781C8.48187 11.718 7.722 11.4975 7.06623 11.0827C6.41046 10.6679 5.88562 10.0758 5.55252 9.375H10.0781V8.4375H5.23872C5.12876 7.89615 5.12876 7.33822 5.23872 6.79688H10.0781V5.85938H5.55252C5.88562 5.15857 6.41046 4.56647 7.06623 4.15167C7.722 3.73686 8.48187 3.51634 9.25781 3.51562Z" fill="#333333"/>
                        </svg>
                      </span>
                    </div>
                    <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-4 rounded-md">
                      <span>حقوق سال اول:</span>
                      <span className='inline-flex flex-row-reverse items-center gap-1 justify-center'>
                        638-1100 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M9.25781 3.51562H11.0156V2.57812H9.25781C7.09726 2.57812 5.25018 3.94503 4.5353 5.85938H3.04688V6.79688H4.2859C4.19637 7.34009 4.19637 7.89429 4.2859 8.4375H3.04688V9.375H4.5353C5.25015 11.2893 7.09726 12.6562 9.25796 12.6562H11.0158V11.7188H9.25781C8.48187 11.718 7.722 11.4975 7.06623 11.0827C6.41046 10.6679 5.88562 10.0758 5.55252 9.375H10.0781V8.4375H5.23872C5.12876 7.89615 5.12876 7.33822 5.23872 6.79688H10.0781V5.85938H5.55252C5.88562 5.15857 6.41046 4.56647 7.06623 4.15167C7.722 3.73686 8.48187 3.51634 9.25781 3.51562Z" fill="#333333"/>
                        </svg>
                      </span>
                    </div>
                    <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-4 rounded-md">
                      <span>حقوق سال اول:</span>
                      <span className='inline-flex flex-row-reverse items-center gap-1 justify-center'>
                        638-1100 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M9.25781 3.51562H11.0156V2.57812H9.25781C7.09726 2.57812 5.25018 3.94503 4.5353 5.85938H3.04688V6.79688H4.2859C4.19637 7.34009 4.19637 7.89429 4.2859 8.4375H3.04688V9.375H4.5353C5.25015 11.2893 7.09726 12.6562 9.25796 12.6562H11.0158V11.7188H9.25781C8.48187 11.718 7.722 11.4975 7.06623 11.0827C6.41046 10.6679 5.88562 10.0758 5.55252 9.375H10.0781V8.4375H5.23872C5.12876 7.89615 5.12876 7.33822 5.23872 6.79688H10.0781V5.85938H5.55252C5.88562 5.15857 6.41046 4.56647 7.06623 4.15167C7.722 3.73686 8.48187 3.51634 9.25781 3.51562Z" fill="#333333"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <Button styleVariant='textonly' size='large' className='!px-3  !rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="currentWidth" height="currentHeight" viewBox="0 0 20 20" fill="none">
                    <path d="M12.7513 11.0832L9.7513 8.08317C9.66797 7.99984 9.60908 7.90956 9.57464 7.81234C9.54019 7.71512 9.52269 7.61095 9.52214 7.49984C9.52214 7.38873 9.53964 7.28456 9.57464 7.18734C9.60964 7.09011 9.66853 6.99984 9.7513 6.9165L12.7513 3.9165C12.918 3.74984 13.1124 3.6665 13.3346 3.6665C13.5569 3.6665 13.7513 3.74984 13.918 3.9165C14.0846 4.08317 14.168 4.28123 14.168 4.51067C14.168 4.74012 14.0846 4.93789 13.918 5.104L12.3555 6.6665H17.5013C17.7374 6.6665 17.9355 6.7465 18.0955 6.9065C18.2555 7.0665 18.3352 7.26428 18.3346 7.49984C18.3346 7.73595 18.2546 7.934 18.0946 8.094C17.9346 8.254 17.7369 8.33373 17.5013 8.33317H12.3555L13.918 9.89567C14.0846 10.0623 14.168 10.2568 14.168 10.479C14.168 10.7012 14.0846 10.8957 13.918 11.0623C13.7513 11.229 13.5605 11.3193 13.3455 11.3332C13.1305 11.3471 12.9324 11.2637 12.7513 11.0832ZM6.08464 16.0623C6.2513 16.229 6.44575 16.3159 6.66797 16.3232C6.89019 16.3304 7.08464 16.2504 7.2513 16.0832L10.2513 13.0832C10.3346 12.9998 10.3935 12.9096 10.428 12.8123C10.4624 12.7151 10.4799 12.6109 10.4805 12.4998C10.4805 12.3887 10.463 12.2846 10.428 12.1873C10.393 12.0901 10.3341 11.9998 10.2513 11.9165L7.2513 8.9165C7.08464 8.74984 6.89019 8.6665 6.66797 8.6665C6.44575 8.6665 6.2513 8.74984 6.08464 8.9165C5.91797 9.08317 5.83464 9.28123 5.83464 9.51067C5.83464 9.74011 5.91797 9.93789 6.08464 10.104L7.64714 11.6665H2.5013C2.26519 11.6665 2.06714 11.7465 1.90714 11.9065C1.74714 12.0665 1.66742 12.2643 1.66797 12.4998C1.66797 12.7359 1.74797 12.934 1.90797 13.094C2.06797 13.254 2.26575 13.3337 2.5013 13.3332H7.64714L6.08464 14.8957C5.91797 15.0623 5.83464 15.2568 5.83464 15.479C5.83464 15.7012 5.91797 15.8957 6.08464 16.0623Z" fill="#EC3A4C"/>
                  </svg>
                </Button>
                <div className='w-1/4 flex flex-col h-full bg-white border-2 border-gray-100 rounded-xl shadow-md'>
                  <div className='inline-flex justify-center items-center gap-2 border-b border-gray-100 px-4 py-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 26.25C21.9036 26.25 27.5 20.6536 27.5 13.75C27.5 6.84644 21.9036 1.25 15 1.25C8.09644 1.25 2.5 6.84644 2.5 13.75C2.5 20.6536 8.09644 26.25 15 26.25Z" fill="#FFF59D"/>
                      <path d="M23.1258 13.75C23.1258 8.9375 19.0008 5.125 14.0633 5.6875C10.3133 6.125 7.31331 9.125 6.93831 12.875C6.62581 15.75 7.81331 18.3125 9.81331 19.9375C10.6883 20.6875 11.2508 21.75 11.2508 22.9375V23.125H18.7508V23.0625C18.7508 21.9375 19.2508 20.8125 20.1258 20.0625C21.9383 18.5625 23.1258 16.3125 23.1258 13.75Z" fill="#FBC02D"/>
                      <path d="M19.125 12.625L17.25 11.375C17.0625 11.25 16.75 11.25 16.5625 11.375L15 12.375L13.5 11.375C13.3125 11.25 13 11.25 12.8125 11.375L10.9375 12.625C10.8125 12.75 10.6875 12.875 10.6875 13.0625C10.6875 13.25 10.6875 13.4375 10.8125 13.5625L13.1875 16.5V23.125H14.4375V16.25C14.4375 16.125 14.375 16 14.3125 15.875L12.25 13.3125L13.1875 12.6875L14.6875 13.6875C14.875 13.8125 15.1875 13.8125 15.375 13.6875L16.875 12.6875L17.8125 13.3125L15.75 15.875C15.6875 16 15.625 16.125 15.625 16.25V23.125H16.875V16.5L19.25 13.5625C19.375 13.4375 19.4375 13.25 19.375 13.0625C19.3125 12.875 19.25 12.6875 19.125 12.625Z" fill="#FFF59D"/>
                      <path d="M15 29.375C16.0355 29.375 16.875 28.5355 16.875 27.5C16.875 26.4645 16.0355 25.625 15 25.625C13.9645 25.625 13.125 26.4645 13.125 27.5C13.125 28.5355 13.9645 29.375 15 29.375Z" fill="#5C6BC0"/>
                      <path d="M16.25 28.125H13.75C12.375 28.125 11.25 27 11.25 25.625V22.5H18.75V25.625C18.75 27 17.625 28.125 16.25 28.125Z" fill="#9FA8DA"/>
                      <path d="M18.75 25.625L11.5 26.625C11.6875 27.0625 12.0625 27.5 12.5 27.75L18.375 26.9375C18.625 26.5625 18.75 26.125 18.75 25.625ZM11.25 24.1875V25.4375L18.75 24.375V23.125L11.25 24.1875Z" fill="#5C6BC0"/>
                    </svg>
                    <span className='text-xl'>مهندس معماری</span>
                  </div>
                  <div className='inline-flex border-b border-gray-100 justify-between px-6 py-4'>
                    <div>رشته تحصیلی:</div>
                    <div>رشته های هنری</div>
                  </div>
                  <div className='inline-flex border-b border-gray-100 justify-between px-6 py-4'>
                    <div>نوع رشته:</div>
                    <div>شولیشه</div>
                  </div>
                  <div className='inline-flex border-b border-gray-100 justify-between px-6 py-4'>
                    <div>مدت دوره:</div>
                    <div>3 ساله</div>
                  </div>
                  <div className='inline-flex border-b border-gray-100 justify-between px-6 py-4'>
                    <div>دوره:</div>
                    <div>شیفتی نمیباشد</div>
                  </div>
                  <div className="flex flex-col gap-4 py-5 px-4 pb-3">
                    <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-4 rounded-md">
                      <span>حقوق سال اول:</span>
                      <span className='inline-flex flex-row-reverse items-center gap-1 justify-center'>
                        638-1100 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M9.25781 3.51562H11.0156V2.57812H9.25781C7.09726 2.57812 5.25018 3.94503 4.5353 5.85938H3.04688V6.79688H4.2859C4.19637 7.34009 4.19637 7.89429 4.2859 8.4375H3.04688V9.375H4.5353C5.25015 11.2893 7.09726 12.6562 9.25796 12.6562H11.0158V11.7188H9.25781C8.48187 11.718 7.722 11.4975 7.06623 11.0827C6.41046 10.6679 5.88562 10.0758 5.55252 9.375H10.0781V8.4375H5.23872C5.12876 7.89615 5.12876 7.33822 5.23872 6.79688H10.0781V5.85938H5.55252C5.88562 5.15857 6.41046 4.56647 7.06623 4.15167C7.722 3.73686 8.48187 3.51634 9.25781 3.51562Z" fill="#333333"/>
                        </svg>
                      </span>
                    </div>
                    <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-4 rounded-md">
                      <span>حقوق سال اول:</span>
                      <span className='inline-flex flex-row-reverse items-center gap-1 justify-center'>
                        638-1100 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M9.25781 3.51562H11.0156V2.57812H9.25781C7.09726 2.57812 5.25018 3.94503 4.5353 5.85938H3.04688V6.79688H4.2859C4.19637 7.34009 4.19637 7.89429 4.2859 8.4375H3.04688V9.375H4.5353C5.25015 11.2893 7.09726 12.6562 9.25796 12.6562H11.0158V11.7188H9.25781C8.48187 11.718 7.722 11.4975 7.06623 11.0827C6.41046 10.6679 5.88562 10.0758 5.55252 9.375H10.0781V8.4375H5.23872C5.12876 7.89615 5.12876 7.33822 5.23872 6.79688H10.0781V5.85938H5.55252C5.88562 5.15857 6.41046 4.56647 7.06623 4.15167C7.722 3.73686 8.48187 3.51634 9.25781 3.51562Z" fill="#333333"/>
                        </svg>
                      </span>
                    </div>
                    <div className="w-full inline-flex justify-between bg-gray-100 text-sm py-3 px-4 rounded-md">
                      <span>حقوق سال اول:</span>
                      <span className='inline-flex flex-row-reverse items-center gap-1 justify-center'>
                        638-1100 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M9.25781 3.51562H11.0156V2.57812H9.25781C7.09726 2.57812 5.25018 3.94503 4.5353 5.85938H3.04688V6.79688H4.2859C4.19637 7.34009 4.19637 7.89429 4.2859 8.4375H3.04688V9.375H4.5353C5.25015 11.2893 7.09726 12.6562 9.25796 12.6562H11.0158V11.7188H9.25781C8.48187 11.718 7.722 11.4975 7.06623 11.0827C6.41046 10.6679 5.88562 10.0758 5.55252 9.375H10.0781V8.4375H5.23872C5.12876 7.89615 5.12876 7.33822 5.23872 6.79688H10.0781V5.85938H5.55252C5.88562 5.15857 6.41046 4.56647 7.06623 4.15167C7.722 3.73686 8.48187 3.51634 9.25781 3.51562Z" fill="#333333"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Social/>
          </MainContainer>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Comparison;