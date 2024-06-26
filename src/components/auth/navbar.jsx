import React,{ useState } from 'react';
import userlogo from './../../icons/solar_user-bold-duotone.svg'
import MainContainer from './../container';
import Button from './../button';
import NavbarGenerator from './NavbarGenarator';
import Search from './search';
import LoginModal from '../../pages/login_modal';

function Navbar() {
  const [ open , setOpen ] = useState(false)

  return (
    <div className="text-primary-default bg-gray-100 py-2 ">
      <MainContainer className={"flex justify-between align-middle items-center"}>
        <>
          <div>
            <NavbarGenerator items={[
              {title:'صفحه اصلی', link:'/'},
              {title:'لیست مشاغل', link:'/jobsearch'},
              {title:'خدمات ما', link:'',
                subs : [
                  {title:'پذیرش پرونده', link:'/'},
                  {title:'نگارش رزومه و انگیزه نامه', link:'/cover_letter'},
                  {title:'بررسی رزومه و انگیزه نامه', link:'/'},
                  {title:'مقایسه نمره', link:'/'},
                  {title:'مقایسه آوسبیلدونگ ها', link:'/compar_ausbildung'},
                ]
              },
              {title: 'بلاگ آوسبیلدونگ', link:'/blog'},
              {title:'ارتباط با ما', link:'/contact_us'},
              {title:'درباره ما', link:'/about_us'}
            ]} />
          </div>
          <div className='flex gap-2'>
            <Search />
            <Button onClick={()=>{setOpen(true)}} styleVariant='grey' className='!px-2' iconOnly={true} >
              <img alt='' src={userlogo} />
            </Button>
          </div>
          {open?<LoginModal setOpen={setOpen}/>:''}
        </>
      </MainContainer>
    </div>
  )
}

export default Navbar