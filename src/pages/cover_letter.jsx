import '../App.css';
import Auth from '../components/auth/index';
import MainContainer from '../components/container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/footer';
import Button from '../components/button';
import Social from '../components/social';
import FormInput from '../components/formInput';
import SelectInput from '../components/selectInput';

function Comparison() {
  return (
    <div className="bg-gray-50">
      <Auth />
      <div className='w-full flex flex-col items-center text-center'>
        <div className='w-full bg-gray-50 flex-col justify-center py-14 pb-0 relative'>
          <div className='absolute bg-gray-200 top-0 right-0 left-0 h-96 '></div>
          <MainContainer className='inline-flex flex-col justify-center items-center z-10 relative pb-16'>
            <div className='inline-flex flex-col rounded-md overflow-hidden text-center gap-5'>
              <div className='text-3xl font-bold'>فرم نگارش <span className='text-primary-default'> رزومه و انگیزه نامه</span></div>
              <div className='text-sm text-gray-600'>لطفا فرم های زیر را پر کنید</div>
            </div>
            <div className='w-full flex flex-row items-stretch gap-7 my-10 bg-white rounded-2xl shadow-lg p-10'>
              <div className='flex flex-col justify-between w-1/2 h-full pl-16 gap-36'>
                <div className='w-full inline-flex flex-col gap-10 '>
                  <div className='w-full inline-flex gap-8'>
                    <FormInput label={'نام و نام خانوادگی'} placeholder={'نام را وارد کنید'} />
                    <FormInput label={'شماره تماس'} placeholder={'شماره تماس خود را وارد کنید'} />
                  </div>
                  <div className='w-full inline-flex gap-8'>
                    <FormInput label={'رشته تحصیلی فعلی'} placeholder={'رشته را وارد کنید'} />
                    <SelectInput label={'مقطع تحصیلی'} placeholder={'یک مورد را انتخاب کنید'} />
                  </div>
                  <div className='w-full inline-flex gap-8'>
                    <SelectInput label={'نوع محاجرت مورد نظر'} placeholder={'یک مورد را انتخاب کنید'} />
                    <SelectInput label={'رشته تحصیلی مورد نظر'} placeholder={'یک مورد را انتخاب کنید'} />
                  </div>
                  <div className='border-t border-gray-200'></div>
                  <div className='w-full flex flex-col gap-2'>
                    <h5 className='w-full font-bold text-right'>توضیحات:</h5>
                    <ul>
                      <li className='text-right text-sm py-1 before:content-["•"] before:text-primary-default before:mr-2 before:text-3xl before:pl-2'>کارشناسان ایران آوسبیلدونگ پس از ثبت درخواست شما طی ۷۲ ساعت آینده با شما تماس خواهند گرفت</li>
                      <li className='text-right text-sm py-1 before:content-["•"] before:text-primary-default before:mr-2 before:text-3xl before:pl-2'>ویرایش جزئی رزومه و انگیزه نامه تا پنج روز پس از تحویل نسخه نهایی برای سه مرتبه امکان پذیر است</li>
                      <li className='text-right text-sm py-1 before:content-["•"] before:text-primary-default before:mr-2 before:text-3xl before:pl-2'>مدت نگارش رزومه و انگیزه نامه حداقل یک هفته خواهد بود</li>
                    </ul>
                  </div>
                </div>
                <div className='flex w-full h-full flex-col justify-between items-center gap-4'> 
                  <div className='inline-flex flex-row items-center gap-6 justify-center'>
                    <div className='flex flex-col gap-1'>
                      <div>هزینه نگارش:</div>
                      <div className='text-gray-600 text-lg inline-flex gap-1 justify-center items-center'><span className='text-xs'>تومان</span> ۶۱۹,۰۰۰</div>
                    </div>
                    <Button>پرداخت وجه</Button>
                  </div>
                  
                  <Button styleVariant='textonly' className='!text-primary-default'>کد تخفیف دارید؟</Button>
                </div>
              </div>
              <div className='w-1/2 flex flex-col gap-4 '>
                <div className='w-full text-right'>
                  <h6 className='font-bold pb-2'>توضیحات بیشتر:</h6>
                  <p className='text-gray-700 leading-8 text-sm'>
                    رزومه نشان دهنده پیشینه و تجربه‌ی فرد در حوزه تخصصی خود است. با استفاده از رزومه، می‌توان تجربیات و مهارت‌های فرد در زمینه‌ی مورد نظر را به نمایش گذاشت. در یک رزومه خوب، دو نکته مهم باید رعایت شود: اول، نگارش صحیح و رعایت اصول و قواعد رزومه‌نویسی برای کشور مورد نظر، و دوم، پوشاندن نقاط ضعف و برجسته کردن نقاط قوت به شکل منطقی و صحیح است.<br></br>
                    اما انگیزه‌نامه‌نویسی با رزومه‌نویسی متفاوت و چالش‌برانگیزتر است. چون علاوه بر قواعد و الگوهای کلی، سایر اجزای آن متغیر هستند و باید با توجه به هر فرد و هر کارفرما/دانشگاه، تغییراتی در آن ایجاد شود. متن انگیزه‌نامه باید مختصر و مفید باشد و نکات برجسته رزومه‌ی فرد را به شکلی هنرمندانه، جذاب و متقاعد‌کننده تشریح کند. کارشناسان ایران آوسبیلدونگ با تجربه بالایی که در این زمینه دارند، می‌توانند مسئولیت نگارش رزومه و انگیزه‌نامه استاندارد را برای فرد بر عهده بگیرند.
                  </p>
                </div>
                <div className='w-full text-right pt-8'>
                  <h6 className='font-bold'>روند نگارش:</h6>
                </div>
                <div className='w-full inline-flex justify-between gap-6 pt-6'>
                  <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                    <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۱</span>
                    <span className='text-[14px] leading-7'>از آن جا که انگیزه نامه و رزومه شرح فعالیت های شماست، مرحله به مرحله با شما در ارتباط خواهیم بود تا اطلاعاتی دقيق از شما دریافت کنیم</span>
                  </div>
                  <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                    <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۲</span>
                    <span className='text-[14px] leading-7'>رزومه و انگیزه نامه شما به کمک هوش مصنوعی و توسط افراد کار کشته ای نگارش میشود که سطح زبان آنها بارها مورد آزمایش قرار گرفته است</span>
                  </div>
                  <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                    <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۳</span>
                    <span className='text-[12px] leading-6'>از این رو انگیزه نامه و رزومه به صورت انحصاری و مخصوص شما ،نگارش میشود. سرتان کلاه نرود بسیاری از موسسات از متن های آماده کپی برداری میکنند و همین اصلی ترین دلیل عدم موفقیت است</span>
                  </div>
                </div>
                <div className='w-full inline-flex justify-between gap-6 pt-8'>
                  <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                    <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۴</span>
                    <span className='text-[14px] leading-7'>از آن جا که انگیزه نامه و رزومه شرح فعالیت های شماست، مرحله به مرحله با شما در ارتباط خواهیم بود تا اطلاعاتی دقيق از شما دریافت کنیم</span>
                  </div>
                  <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                    <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۵</span>
                    <span className='text-[14px] leading-7'>رزومه و انگیزه نامه شما به کمک هوش مصنوعی و توسط افراد کار کشته ای نگارش میشود که سطح زبان آنها بارها مورد آزمایش قرار گرفته است</span>
                  </div>
                  <div className='bg-gray-100 relative flex flex-col px-4 rounded-lg py-4 w-full pt-9'>
                    <span className='text-primary-default text-3xl font-bold absolute left-1/2 -top-4 -translate-x-1/2'>۰۶</span>
                    <span className='text-[12px] leading-6'>از این رو انگیزه نامه و رزومه به صورت انحصاری و مخصوص شما ،نگارش میشود. سرتان کلاه نرود بسیاری از موسسات از متن های آماده کپی برداری میکنند و همین اصلی ترین دلیل عدم موفقیت است</span>
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