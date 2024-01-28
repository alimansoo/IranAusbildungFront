import '../App.css';
import Auth from '../components/auth/index';
import search from '../icons/iconamoon_search-duotone.svg'
import MainContainer from '../components/container';
import Card from '../components/card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/footer';
import Social from '../components/social';

function JobSearch() {
  return (
    <div className="bg-gray-50">
      <Auth />
      <div className='w-full flex flex-col items-center text-center'>
        <div className='w-full bg-gray-200 flex-col justify-center py-14'>
          <MainContainer className='inline-flex flex-col justify-center items-center'>
            <div  className='w-full text-center text-5xl font-bold mb-16'><span className='text-primary-default'>رشته</span> مورد نظرت رو جستوجو کن</div>
            <div className='bg-gray-100 w-2/4 max-w-[900px] py-[26px] px-[42px] rounded-md mb-10'>
              <div className='flex flex-row w-full rounded-md overflow-hidden'>
                <input placeholder='نام رشته مورد نظرت رو جست و جو کن ...' className='w-full outline-none p-4 text-[16px] text-sm py-5' />
                <button className='bg-primary-default inline-flex gap-2 justify-center text-white p-3 px-6 pl-7 text-[16px] text-sm items-center'><img src={search} alt='' /><span>جستوجو</span></button>
              </div>
            </div>
            <div className='inline-flex items-center gap-3 mb-10'>
              <span className='text-gray-500'>محبوب ترین ها:</span>
              <div className='inline-flex gap-3'>
                <span className='rounded-3xl border border-gray-300 text-gray-400 text-sm px-3 py-2'>پرستاری</span>
                <span className='rounded-3xl border border-gray-300 text-gray-400 text-sm px-3 py-2'>مهندسی نرم افزار</span>
                <span className='rounded-3xl border border-gray-300 text-gray-400 text-sm px-3 py-2'>معماری ساختمان</span>
                <span className='rounded-3xl border border-gray-300 text-gray-400 text-sm px-3 py-2'>مهندسی صنایع</span>
                <span className='rounded-3xl border border-gray-300 text-gray-400 text-sm px-3 py-2'>طراح گرافیک</span>
                <span className='rounded-3xl border border-gray-300 text-gray-400 text-sm px-3 py-2'>مهندسی برق صنعتی</span>
              </div>
            </div>
            <div className='inline-flex gap-8'>
              <span className='rounded-md border bg-gray-100 border-gray-200 text-gray-700 text-sm px-3 py-2'>
                🎨 
                رشته های هنری
              </span>
              <span className='rounded-md border bg-gray-100 border-gray-200 text-gray-700 text-sm px-3 py-2'>
                💊 
                رشته های پیراپزشکی
              </span>
              <span className='rounded-md border bg-gray-100 border-gray-200 text-gray-700 text-sm px-3 py-2'>
                🔧 
                رشته های فنی
              </span>
              <span className='rounded-md border bg-gray-100 border-gray-200 text-gray-700 text-sm px-3 py-2'>
                👔 
                رشته های مدیریتی
              </span>
              <span className='rounded-md border bg-gray-100 border-gray-200 text-gray-700 text-sm px-3 py-2'>
                📐 
                رشته های مهندسی
              </span>
              <span className='rounded-md border bg-gray-100 border-gray-200 text-gray-700 text-sm px-3 py-2'>
                🥇 
                رشته های ورزشی
              </span>
            </div>
          </MainContainer>
        </div>
        <div className='w-full flex-row'>
          <MainContainer className='inline-flex flex-col gap-10 justify-between py-10'>
            <div className='w-full justify-between inline-flex border border-gray-100 py-4 px-5 rounded-xl'>
              <div className='inline-flex gap-5'>
                <span className='inline-flex border border-gray-800 rounded-3xl py-2 px-3 gap-2 text-sm items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.5527 7.054C16.67 6.64247 16.6954 6.2102 16.6271 5.78776C16.5589 5.36532 16.3987 4.96303 16.1578 4.60935C15.9169 4.25567 15.6013 3.95923 15.2332 3.74101C14.8651 3.52279 14.4536 3.38811 14.0277 3.3465C13.8568 2.85618 13.5377 2.43111 13.1146 2.13013C12.6915 1.82914 12.1853 1.66712 11.666 1.6665C11.049 1.66859 10.4549 1.90031 9.99935 2.3165C9.54384 1.90031 8.9497 1.66859 8.33268 1.6665C7.24852 1.6665 6.32435 2.359 5.97852 3.34567C5.55188 3.38624 5.13939 3.52019 4.77032 3.73803C4.40125 3.95587 4.08464 4.25225 3.84295 4.60616C3.60126 4.96007 3.44041 5.36283 3.37181 5.78587C3.30321 6.2089 3.32854 6.64185 3.44602 7.054C2.91104 7.33863 2.4631 7.76277 2.14971 8.28141C1.83632 8.80006 1.66918 9.39387 1.66602 9.99984C1.66602 10.8957 2.02268 11.7382 2.64268 12.3598C2.54782 12.6756 2.49953 13.0035 2.49935 13.3332C2.49935 14.964 3.67602 16.3248 5.25435 16.6115C5.48606 17.1236 5.86021 17.5582 6.33216 17.8635C6.80412 18.1688 7.35394 18.3318 7.91602 18.3332C8.73185 18.3332 9.46935 17.994 9.99935 17.4507C10.2699 17.7297 10.5936 17.9516 10.9515 18.1032C11.3094 18.2548 11.694 18.333 12.0827 18.3332C12.6438 18.3321 13.1927 18.1697 13.664 17.8654C14.1354 17.561 14.5092 17.1275 14.741 16.6165C15.206 16.5345 15.6483 16.3549 16.0387 16.0894C16.4291 15.8239 16.7587 15.4786 17.0059 15.0763C17.253 14.674 17.412 14.2239 17.4724 13.7556C17.5327 13.2874 17.4931 12.8116 17.356 12.3598C17.6659 12.0499 17.9116 11.682 18.0792 11.277C18.2467 10.8721 18.3329 10.4381 18.3327 9.99984C18.3295 9.39387 18.1624 8.80006 17.849 8.28141C17.5356 7.76277 17.0877 7.33863 16.5527 7.054ZM7.91602 16.6665C7.32352 16.6665 6.80768 16.2465 6.69102 15.6682L6.51435 14.9998H5.83268C4.91352 14.9998 4.16602 14.2523 4.16602 13.3332C4.16602 13.0398 4.23685 12.7648 4.37685 12.5157L4.75685 11.8357L4.10352 11.4107C3.8675 11.2585 3.67333 11.0497 3.53869 10.8033C3.40405 10.5569 3.33323 10.2806 3.33268 9.99984C3.33268 9.18567 3.93518 8.47984 4.73435 8.3565L6.14518 8.13984L5.26268 7.01817C5.10552 6.81556 5.01438 6.56958 5.00158 6.31348C4.98879 6.05739 5.05495 5.80354 5.19113 5.58627C5.3273 5.36901 5.52692 5.19881 5.76299 5.09869C5.99905 4.99858 6.26016 4.97338 6.51102 5.0265L7.49935 5.17234V4.1665C7.49935 3.94549 7.58715 3.73353 7.74343 3.57725C7.89971 3.42097 8.11167 3.33317 8.33268 3.33317C8.5537 3.33317 8.76566 3.42097 8.92194 3.57725C9.07822 3.73353 9.16602 3.94549 9.16602 4.1665V15.4165C9.16602 16.1057 8.60518 16.6665 7.91602 16.6665ZM15.8952 11.4098L15.2418 11.8348L15.6218 12.5148C15.7618 12.7648 15.8327 13.0398 15.8327 13.3332C15.8327 14.2523 15.0852 14.9998 14.1243 14.9998H13.4427L13.3077 15.6682C13.2494 15.9501 13.0958 16.2033 12.8727 16.3851C12.6495 16.5669 12.3705 16.6663 12.0827 16.6665C11.3935 16.6665 10.8327 16.1057 10.8327 15.4165V4.1665C10.8327 3.7065 11.206 3.33317 11.666 3.33317C12.126 3.33317 12.4993 3.7065 12.4993 4.20817V5.214L13.4877 5.0265C13.7385 4.97338 13.9996 4.99858 14.2357 5.09869C14.4718 5.19881 14.6714 5.36901 14.8076 5.58627C14.9437 5.80354 15.0099 6.05739 14.9971 6.31348C14.9843 6.56958 14.8932 6.81556 14.736 7.01817L13.8535 8.14067L15.2643 8.35734C15.6548 8.42055 16.01 8.6204 16.2667 8.92124C16.5235 9.22208 16.665 9.60435 16.666 9.99984C16.666 10.569 16.3777 11.0957 15.8952 11.4098Z" fill="black"/>
                  </svg> 
                  انتخاب رشته
                </span>
                <span className='inline-flex border border-gray-800 rounded-3xl py-2 px-3 gap-2 text-sm items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 18.75C8.26942 18.75 6.57769 18.2368 5.13876 17.2754C3.69983 16.3139 2.57832 14.9473 1.91606 13.3485C1.25379 11.7496 1.08051 9.9903 1.41813 8.29296C1.75575 6.59563 2.58911 5.03653 3.81282 3.81282C5.03653 2.58911 6.59563 1.75575 8.29296 1.41813C9.9903 1.08051 11.7496 1.25379 13.3485 1.91606C14.9473 2.57832 16.3139 3.69983 17.2754 5.13876C18.2368 6.57769 18.75 8.26942 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 2.5C8.51664 2.5 7.0666 2.93987 5.83323 3.76398C4.59986 4.58809 3.63856 5.75943 3.07091 7.12988C2.50325 8.50032 2.35473 10.0083 2.64411 11.4632C2.9335 12.918 3.64781 14.2544 4.6967 15.3033C5.7456 16.3522 7.08197 17.0665 8.53683 17.3559C9.99168 17.6453 11.4997 17.4968 12.8701 16.9291C14.2406 16.3614 15.4119 15.4001 16.236 14.1668C17.0601 12.9334 17.5 11.4834 17.5 10C17.5 8.01088 16.7098 6.10323 15.3033 4.6967C13.8968 3.29018 11.9891 2.5 10 2.5Z" fill="#1D1E22"/>
                    <path d="M12.8688 13.75L9.375 10.2562V4.375H10.625V9.7375L13.75 12.8687L12.8688 13.75Z" fill="#1D1E22"/>
                  </svg>
                  مدت دوره
                </span>
                <span className='inline-flex border border-gray-800 rounded-3xl py-2 px-3 gap-2 text-sm items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.375 13.6969L10 16.1578L5.625 13.6969V11.0968L4.375 10.4023V14.4279L10 17.592L15.625 14.4279V10.4023L14.375 11.0968V13.6969Z" fill="black"/>
                    <path d="M10 1.7959L1.25 6.33293V7.41629L10 12.2773L17.5 8.11074V11.5624H18.75V6.33293L10 1.7959ZM16.25 7.37523L15 8.06965L10 10.8476L5 8.06965L3.75 7.37523L2.88363 6.89391L10 3.20395L17.1164 6.89391L16.25 7.37523Z" fill="black"/>
                  </svg>
                  نوع رشته
                </span>
                <span className='inline-flex border border-gray-800 rounded-3xl py-2 px-3 gap-2 text-sm items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.91667 3.33317H7.47917C7.34028 3.33317 7.20833 3.34706 7.08333 3.37484C7.875 4.2915 8.48944 5.31595 8.92667 6.44817C9.36389 7.58039 9.58278 8.76428 9.58333 9.99984C9.58333 11.2359 9.36444 12.4201 8.92667 13.5523C8.48889 14.6846 7.87444 15.7087 7.08333 16.6248C7.20833 16.6526 7.34028 16.6665 7.47917 16.6665H7.91667C9.76389 16.6665 11.3369 16.0173 12.6358 14.719C13.9347 13.4207 14.5839 11.8476 14.5833 9.99984C14.5833 8.15262 13.9342 6.57956 12.6358 5.28067C11.3375 3.98178 9.76444 3.33262 7.91667 3.33317ZM7.91667 1.6665C9.06944 1.6665 10.1528 1.88539 11.1667 2.32317C12.1806 2.76095 13.0625 3.35456 13.8125 4.104C14.5625 4.854 15.1564 5.73595 15.5942 6.74984C16.0319 7.76373 16.2506 8.84706 16.25 9.99984C16.25 11.1526 16.0311 12.2359 15.5933 13.2498C15.1556 14.2637 14.5619 15.1457 13.8125 15.8957C13.0625 16.6457 12.1806 17.2396 11.1667 17.6773C10.1528 18.1151 9.06944 18.3337 7.91667 18.3332C7.18056 18.3332 6.46167 18.2393 5.76 18.0515C5.05833 17.8637 4.38833 17.5826 3.75 17.2082C5.04167 16.4582 6.05917 15.4443 6.8025 14.1665C7.54583 12.8887 7.91722 11.4998 7.91667 9.99984C7.91667 8.49984 7.545 7.11095 6.80167 5.83317C6.05833 4.55539 5.04111 3.5415 3.75 2.7915C4.38889 2.4165 5.05917 2.13539 5.76083 1.94817C6.4625 1.76095 7.18111 1.66706 7.91667 1.6665Z" fill="black"/>
                  </svg>
                  ساعات کاری
                </span>
              </div>
              <div className='inline-flex gap-5'>
                <span className='inline-flex border border-gray-800 bg-gray-50 rounded-3xl py-2 px-3 gap-2 text-sm items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.16667 5.8335C8.72464 5.8335 8.30072 6.00909 7.98816 6.32165C7.6756 6.63421 7.5 7.05814 7.5 7.50016V14.1668H9.16667V10.8335H10.8333V14.1668H12.5V7.50016C12.5 7.05814 12.3244 6.63421 12.0118 6.32165C11.6993 6.00909 11.2754 5.8335 10.8333 5.8335H9.16667ZM9.16667 7.50016H10.8333V9.16683H9.16667V7.50016Z" fill="black"/>
                  </svg>
                  انتحاب بر اساس حروف الفبا
                </span>
              </div>
            </div>
            <div className='w-full inline-flex justify-between border-b border-gray-100 py-5 rounded-xl'>
              <div className='inline-flex gap-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M1.5 6.75H22.5M5.25 12H18.75M9.75 17.25H14.25" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>مرتب سازی بر اساس:</span>
                <span className='text-sm text-primary-default'>محبوب ترین ها</span>
                <span className='text-sm'>بیشترین درآمد</span>
              </div>
              <span className='text-gray-500 text-sm'>16 رشته پیدا شد</span>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            <div className='py-8'>
              <div className='inline-flex'>
                <span className='bg-white py-2 px-4 pr-3 rounded-r-xl border border-gray-300 inline-flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <g clip-path="url(#clip0_2_1765)">
                      <path d="M8.49583 3.47498L12.5 7.49998L8.49583 11.525C8.45967 11.5725 8.41373 11.6116 8.36111 11.6398C8.3085 11.668 8.25044 11.6846 8.19087 11.6884C8.1313 11.6922 8.07161 11.6831 8.01584 11.6618C7.96007 11.6406 7.90952 11.6076 7.86761 11.5651C7.82571 11.5226 7.79343 11.4715 7.77295 11.4155C7.75248 11.3594 7.74429 11.2996 7.74894 11.2401C7.75359 11.1806 7.77097 11.1228 7.79991 11.0705C7.82885 11.0183 7.86867 10.973 7.91667 10.9375L10.9125 7.91664L2.94167 7.91664C2.83116 7.91664 2.72518 7.87274 2.64704 7.7946C2.5689 7.71646 2.525 7.61048 2.525 7.49998C2.525 7.38947 2.5689 7.28349 2.64704 7.20535C2.72518 7.12721 2.83116 7.08331 2.94167 7.08331L10.9125 7.08331L7.91667 4.06248C7.83876 3.98402 7.79521 3.87782 7.7956 3.76725C7.79599 3.65668 7.84029 3.5508 7.91875 3.47289C7.99721 3.39499 8.1034 3.35144 8.21397 3.35183C8.32454 3.35222 8.43043 3.39652 8.50833 3.47498L8.49583 3.47498Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1765">
                        <rect width="15" height="15" fill="white" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 15 15)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span>بعدی</span>  
                </span>
                <span className='bg-white py-2 px-4 border border-gray-300 inline-flex items-center gap-2'>۷</span>
                <span className='bg-white py-2 px-4 border border-gray-300 inline-flex items-center gap-2'>۶</span>
                <span className='bg-white py-2 px-4 border border-gray-300 inline-flex items-center gap-2'>...</span>
                <span className='bg-gray-50 py-2 px-4 border border-gray-300 inline-flex items-center gap-2'>۲</span>
                <span className='bg-gray-50 py-2 px-4 border border-gray-300 inline-flex items-center gap-2'>۱</span>
                <span className='bg-gray-50 text-gray-300 py-2 px-4 pl-3 rounded-l-xl border border-gray-300 inline-flex items-center gap-2'>
                  <span>قبلی</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <g clip-path="url(#clip0_2_1760)">
                      <path d="M6.50417 3.47498L2.5 7.49998L6.50417 11.525C6.54033 11.5725 6.58627 11.6116 6.63889 11.6398C6.6915 11.668 6.74956 11.6846 6.80913 11.6884C6.8687 11.6922 6.92839 11.6831 6.98416 11.6618C7.03993 11.6406 7.09048 11.6076 7.13239 11.5651C7.17429 11.5226 7.20657 11.4715 7.22705 11.4155C7.24752 11.3594 7.25571 11.2996 7.25106 11.2401C7.24641 11.1806 7.22903 11.1228 7.20009 11.0705C7.17115 11.0183 7.13133 10.973 7.08333 10.9375L4.0875 7.91664L12.0583 7.91664C12.1688 7.91664 12.2748 7.87274 12.353 7.7946C12.4311 7.71646 12.475 7.61048 12.475 7.49998C12.475 7.38947 12.4311 7.28349 12.353 7.20535C12.2748 7.12721 12.1688 7.08331 12.0583 7.08331L4.0875 7.08331L7.08333 4.06248C7.16124 3.98402 7.20479 3.87782 7.2044 3.76725C7.20401 3.65668 7.15971 3.5508 7.08125 3.47289C7.00279 3.39499 6.8966 3.35144 6.78603 3.35183C6.67546 3.35222 6.56957 3.39652 6.49167 3.47498L6.50417 3.47498Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1760">
                        <rect width="15" height="15" fill="white" transform="translate(0 15) rotate(-90)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <Social />
          </MainContainer>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default JobSearch;