import React from 'react';
import largelogo from './../../large-logo.svg'
import ph_chat from '../../icons/ph_chat.svg'
import MainContainer from './../container';
import Button from '../button';

function Header() {
  return (
    <div className="text-primary-default bg-dark py-3">
      <MainContainer className={"flex justify-between align-middle items-center"}>
        <>
          <div>
            <img src={largelogo} alt='' className='h-[40px]' />
          </div>
          <div className='flex gap-2'>
            <Button styleVariant='secondary' className='!border-0 text-white !bg-gray-700 !font-extralight'>
              پذیرش پرونده
            </Button>
            <Button styleVariant='primary'  className=' !font-extralight' leftIcon={<img src={ph_chat} alt=''/>}>
              درخواست مشاوره  
            </Button>
          </div>
        </>
      </MainContainer>
    </div>
  )
}

export default Header