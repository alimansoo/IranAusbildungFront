import React from 'react'
import Index from './layout'
import FormInput from '../../components/formInput'
import Button from '../../components/button'
import person1 from '../../images/person1.png'

const EditProfile = () => {
  return (
    <Index content={
      <>
        <section className="w-full mx-auto my-12 max-w-[600px] bg-white rounded-xl">
            <div className="w-full flex flex-row border-b border-gray-200 p-4 px-6 justify-between">
              <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M25.2561 23.1875C23.5904 20.3077 21.0233 18.2427 18.0275 17.2638C19.5094 16.3816 20.6607 15.0374 21.3046 13.4376C21.9486 11.8378 22.0496 10.0709 21.5921 8.40809C21.1347 6.74532 20.144 5.27869 18.7724 4.23343C17.4007 3.18817 15.7238 2.62207 13.9993 2.62207C12.2747 2.62207 10.5978 3.18817 9.22616 4.23343C7.85448 5.27869 6.86385 6.74532 6.40638 8.40809C5.94891 10.0709 6.04991 11.8378 6.69387 13.4376C7.33782 15.0374 8.48913 16.3816 9.97098 17.2638C6.9752 18.2416 4.40816 20.3066 2.74238 23.1875C2.6813 23.2872 2.64078 23.398 2.62322 23.5135C2.60566 23.629 2.61141 23.7469 2.64014 23.8601C2.66887 23.9734 2.72 24.0798 2.7905 24.1729C2.861 24.2661 2.94945 24.3442 3.05063 24.4027C3.15181 24.4611 3.26367 24.4987 3.37961 24.5132C3.49555 24.5277 3.61323 24.5189 3.72569 24.4872C3.83815 24.4555 3.94313 24.4016 4.03442 24.3286C4.12571 24.2557 4.20147 24.1652 4.25723 24.0625C6.31785 20.5013 9.96004 18.375 13.9993 18.375C18.0385 18.375 21.6807 20.5013 23.7413 24.0625C23.797 24.1652 23.8728 24.2557 23.9641 24.3286C24.0554 24.4016 24.1604 24.4555 24.2728 24.4872C24.3853 24.5189 24.503 24.5277 24.6189 24.5132C24.7348 24.4987 24.8467 24.4611 24.9479 24.4027C25.0491 24.3442 25.1375 24.2661 25.208 24.1729C25.2785 24.0798 25.3296 23.9734 25.3584 23.8601C25.3871 23.7469 25.3929 23.629 25.3753 23.5135C25.3577 23.398 25.3172 23.2872 25.2561 23.1875ZM7.87426 10.5C7.87426 9.28864 8.23348 8.10443 8.90651 7.09718C9.57953 6.08993 10.5361 5.30487 11.6553 4.84128C12.7745 4.3777 14.0061 4.2564 15.1942 4.49274C16.3823 4.72907 17.4737 5.31242 18.3303 6.16902C19.1869 7.02561 19.7702 8.11698 20.0066 9.30512C20.2429 10.4933 20.1216 11.7248 19.658 12.844C19.1944 13.9632 18.4094 14.9198 17.4021 15.5928C16.3949 16.2658 15.2107 16.625 13.9993 16.625C12.3753 16.6233 10.8184 15.9774 9.67015 14.8292C8.52186 13.6809 7.876 12.124 7.87426 10.5Z" fill="black"/>
                </svg>
                <p className='text-[18px]'>ویرایش اطلاعات کاربری</p>
              </div>
              <div></div>
            </div>
            <div className="w-full inline-flex flex-col justify-center items-center gap-8 pt-3 pb-9 px-8">
              <div className="flex flex-col justify-center items-center gap-5 pb-4">
                <img src={person1} alt="" className='w-[90px] h-[90px] rounded-full border-4 border-gray-300' />
                <Button styleVariant='grey' className='!bg-gray-50 !text-[0.9rem]'>ویرایش تصویر پروفایل</Button>
              </div>
              <div className="w-full inline-flex gap-8">
                <FormInput label={'نام'} placeholder={'نام خود را وارد کنید'} />
                <FormInput label={'نام خانوادگی'} placeholder={' نام خانوادگی خود را وارد کنید'} />
              </div>
              <div className="w-full inline-flex gap-8">
                <FormInput label={'شماره تماس'} placeholder={'نام خود را وارد کنید'} />
                <FormInput type='email' label={'ایمیل'} placeholder={' نام خانوادگی خود را وارد کنید'} />
              </div>
            </div>
            <div className="w-full inline-flex flex-col justify-center items-center gap-5 pt-4 pb-6 px-8 border-t border-gray-200">
              <div className="w-full text-right pb-4">
                <h6 className=''>ویرایش رمز عبور</h6>
              </div>
              <div className="w-full inline-flex gap-8">
                <FormInput type='password' label={'رمز عبور قبلی '} placeholder={'رمز عبور قبلی وارد کنید'} />
                <FormInput type='password' label={'رمز عبور جدید'} placeholder={'رمز عبور جدید وارد کنید'} />
              </div>
              <div className="w-full flex justify-end pt-3">
                <Button className='!text-[14px]'>
                  ویرایش اطلاعات  
                </Button>
              </div>
            </div>
          </section>
        
      </>
    } />
  )
}

export default EditProfile