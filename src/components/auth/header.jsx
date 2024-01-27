import React from 'react';
import largelogo from './../../large-logo.svg'
import MainContainer from './../container';
import Button from '../button';

function Header() {
  return (
    <div className="text-primary-default bg-dark py-3">
      <MainContainer className={"flex justify-between align-middle items-center"}>
        <>
          <div>
            <img src={largelogo} className='h-[40px]' alt='' />
          </div>
          <div className='flex gap-2'>
            <Button style='secondary'>
              پذیرش پرونده
            </Button>
            <Button style='primary'>
              درخواست مشاوره  
            </Button>
          </div>
        </>
      </MainContainer>
    </div>
  )
}

export default Header