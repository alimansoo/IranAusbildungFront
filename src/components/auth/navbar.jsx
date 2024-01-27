import React from 'react';
import userlogo from './../../icons/solar_user-bold-duotone.svg'
import MainContainer from './../container';
import Button from './../button';
import NavbarGenerator from './navbarGenarator';
import Search from './search';

function Navbar() {
  return (
    <div className="text-primary-default bg-gray-100 py-2 ">
      <MainContainer className={"flex justify-between align-middle items-center"}>
        <>
          <div>
            <NavbarGenerator items={['صفحه اصلی','لیست مشاغل','خدمات ما','بلاگ آوسبیلدونگ','ارتباط با ما','درباره ما']} />
          </div>
          <div className='flex gap-2'>
            <Search />
            <Button style='grey' iconOnly={true} ><img src={userlogo} /></Button>
          </div>
        </>
      </MainContainer>
    </div>
  )
}

export default Navbar