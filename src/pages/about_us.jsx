import '../App.css';
import Auth from '../components/auth/index';
import MainContainer from '../components/container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/footer';
import germany_go from '../images/germany_go.png'

function AboutUs() {
  return (
    <div className="bg-gray-50">
      <Auth />
      <div className='w-full flex flex-col items-center text-center'>
        <div className='w-full bg-gray-50 flex-col justify-center py-14 pb-0 relative'>
          <div className='absolute bg-gray-200 top-0 right-0 left-0 h-96 '></div>
          <MainContainer className='inline-flex flex-col justify-center items-center z-10 relative pb-16'>
            <div className='inline-flex flex-col rounded-md overflow-hidden text-center gap-5 pb-10'>
              <div className='text-3xl font-bold'><span className='text-primary-default'>درباره ما</span></div>
              <div className='text-sm text-gray-600'>درباره آوسبیلدونگ بیشتر بدانید</div>
            </div>
            <div className='w-[80%] flex flex-col items-center justify-center gap-my-10  shadow-lg'>
              <div className="flex flex-col items-center justify-center gap-8 bg-white p-10 rounded-t-2xl">
                <div className='w-full flex flex-row justify-between gap-10'>
                  <div className="flex flex-col gap-4 w-[55%]">
                    <div className='inline-flex items-center gap-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.4453 1.09375C10.2812 1.09375 4.21094 5.6875 1.96875 12.0312H32.9219C30.6797 5.6875 24.6094 1.09375 17.4453 1.09375Z" fill="#3E4347"/>
                        <path d="M17.4453 33.9062C24.6094 33.9062 30.6797 29.3672 32.9219 22.9688H1.96875C4.21094 29.3672 10.2812 33.9062 17.4453 33.9062Z" fill="#FFE62E"/>
                        <path d="M1.96875 12.0312C1.36719 13.7266 1.03906 15.5859 1.03906 17.5C1.03906 19.4141 1.36719 21.2734 1.96875 22.9688H32.9219C33.5234 21.2734 33.8516 19.4141 33.8516 17.5C33.8516 15.5859 33.5234 13.7266 32.9219 12.0312H1.96875Z" fill="#ED4C5C"/>
                      </svg>
                      <h6 className='text-primary-default text-lg'>ایران آوسبیلدونگ</h6>
                    </div>
                    <p className='text-gray-600 w-full text-right leading-10'>در سال ۹۹ در پی ابهامات بسیاری که درمورد امکان مهاجرت به آلمان از طریق ویزای آوسبیلدونگ وجود داشت، مجموعه ایران آوسبیلدونگ به عنوان اولین مرجع حرفه‌ای فارسی زبان در زمینه آوسبیلدونگ تاسیس گردید تا با ارائه خدمات متنوع و با کمترین هزینه از مشاوره در حوزه‌های مختلف و نگارش حرفه‌ای رزومه و انگیزه‌نامه تا پذیرش پرونده‌های مهاجرتی در رشته‌های گوناگون بتواند متقاضیان ویزای آوسبیلدونگ را همواره یاری نموده و آن‌ها را در جریان جدیدترین و دقیقترین اطلاعات مرتبط با این  نوع از مهاجرت قرار دهد</p>
                  </div>
                  <div className="flex w-[45%]">
                    <img src={germany_go} alt='' className='w-full pr-20' />
                  </div>
                </div>
                <p className='text-primary-default pt-10'>افــــــــتـــــخــــارات مـــــــا</p>
              </div>
              <div className="w-full flex flex-row-reverse justify-between bg-gray-800 text-white p-10 rounded-b-2xl">
                <div className='flex flex-col gap-3'>
                  <span className='text-[32px] font-bold'>۱۱۰۰ +</span>
                  <span className='text-lg'>میانگین درآمد ماهانه</span>
                </div>
                <div className='flex flex-col gap-3'>
                  <span className='text-[32px] font-bold'>۷۰۰ +</span>
                  <span className='text-lg'>دانشجو فارغ التحصیل شده</span>
                </div>
                <div className='flex flex-col gap-3'>
                  <span className='text-[32px] font-bold'>۴۰۰ +</span>
                  <span className='text-lg'>رشته مختلف</span>
                </div>
                <div className='flex flex-col gap-3'>
                  <span className='text-[32px] font-bold'>۵۰۰۰ +</span>
                  <span className='text-lg'> دانشجویان فعال </span>
                </div>
              </div>
            </div>
          </MainContainer>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;