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
            <input placeholder='نام رشته مورد نظرت رو جست و جو کن ...' className='w-full outline-none p-3 text-[14px]' />
            <button className='bg-primary-default inline-flex gap-2 items-center justify-center text-white p-3 px-6 pl-7 text-[14px]'><img src={search} alt='' /><span>جستوجو</span></button>
          </div>
        </div>
        <div className='inline-flex gap-6 mb-20'>
          <Button styleVariant='secondary' className='bg-transparent text-gray-700'>شرایط پذیرش پرونده و مهاجرت</Button>
          <Button styleVariant='secondary' className='bg-transparent text-gray-700'>درخواست مشاوره</Button>
          <Button styleVariant='secondary' className='bg-transparent text-gray-700'>نگارش  رزومه و انگیزه نامه</Button>
        </div>
        <div className='inline-flex flex-row justify-center gap-3 w-full overflow-hidden'>
          <div className='bg-gray-100 inline-flex flex-col min-w-[16rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
            <div className='w-full inline-flex justify-between'>
              <span className='font-semibold'>مشاغل پیراپزشکی</span>
              <span className='text-primary-default'>Sanitäter</span>
            </div>
            <div className='w-full inline-flex justify-center align-middle'>
              <img src={nurse} alt='' className='w-56' />
            </div>
          </div>
          <div className='bg-gray-100 inline-flex flex-col min-w-[16rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
            <div className='w-full inline-flex justify-between'>
              <span className='font-semibold'>مشاغل پیراپزشکی</span>
              <span className='text-primary-default'>Sanitäter</span>
            </div>
            <div className='w-full inline-flex justify-center align-middle'>
              <img src={nurse} className='w-56' alt='Sanitater' />
            </div>
          </div>
          <div className='bg-gray-100 inline-flex flex-col min-w-[16rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
            <div className='w-full inline-flex justify-between'>
              <span className='font-semibold'>مشاغل پیراپزشکی</span>
              <span className='text-primary-default'>Sanitäter</span>
            </div>
            <div className='w-full inline-flex justify-center align-middle'>
              <img src={nurse} className='w-56' alt='Sanitater' />
            </div>
          </div>
          <div className='bg-gray-100 inline-flex flex-col min-w-[16rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
            <div className='w-full inline-flex justify-between'>
              <span className='font-semibold'>مشاغل پیراپزشکی</span>
              <span className='text-primary-default'>Sanitäter</span>
            </div>
            <div className='w-full inline-flex justify-center align-middle'>
              <img src={nurse} className='w-56' alt='Sanitater' />
            </div>
          </div>
          <div className='bg-gray-100 inline-flex flex-col min-w-[16rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
            <div className='w-full inline-flex justify-between'>
              <span className='font-semibold'>مشاغل پیراپزشکی</span>
              <span className='text-primary-default'>Sanitäter</span>
            </div>
            <div className='w-full inline-flex justify-center align-middle'>
              <img src={nurse} className='w-56' alt='Sanitater' />
            </div>
          </div>
          <div className='bg-gray-100 inline-flex flex-col min-w-[16rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
            <div className='w-full inline-flex justify-between'>
              <span className='font-semibold'>مشاغل پیراپزشکی</span>
              <span className='text-primary-default'>Sanitäter</span>
            </div>
            <div className='w-full inline-flex justify-center align-middle'>
              <img src={nurse} className='w-56' alt='Sanitater' />
            </div>
          </div>
          <div className='bg-gray-100 inline-flex flex-col min-w-[16rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
            <div className='w-full inline-flex justify-between'>
              <span className='font-semibold'>مشاغل پیراپزشکی</span>
              <span className='text-primary-default'>Sanitäter</span>
            </div>
            <div className='w-full inline-flex justify-center align-middle'>
              <img src={nurse} className='w-56' alt='Sanitater' />
            </div>
          </div>
          <div className='bg-gray-100 inline-flex flex-col min-w-[16rem] rounded-t-xl px-5 pt-4 pb-0 gap-8'>
            <div className='w-full inline-flex justify-between'>
              <span className='font-semibold'>مشاغل پیراپزشکی</span>
              <span className='text-primary-default'>Sanitäter</span>
            </div>
            <div className='w-full inline-flex justify-center align-middle'>
              <img src={nurse} className='w-56' alt='Sanitater' />
            </div>
          </div>
        </div>
        <div className='w-full inline-flex justify-center items-center bg-gray-900 text-white py-5'>
          <MainContainer className='inline-flex flex-row-reverse justify-around px-10'>
            <div className='flex flex-col gap-3'>
              <span className='text-[24px] font-bold'>۱۱۰۰ +</span>
              <span className='text-sm'>میانگین درآمد ماهانه</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-[24px] font-bold'>۷۰۰ +</span>
              <span className='text-sm'>دانشجو فارغ التحصیل شده</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-[24px] font-bold'>۴۰۰ +</span>
              <span className='text-sm'>رشته مختلف</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-[24px] font-bold'>۵۰۰۰ +</span>
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