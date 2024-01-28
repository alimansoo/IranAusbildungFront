import React from 'react';
import largelogo from './../../large-logo.svg'
import ph_chat from '../../icons/ph_chat.svg'
import MainContainer from './../container';
import Button from '../button';

function Header() {
  return (
    <div className="text-primary-default bg-dark py-4">
      <MainContainer className={"flex justify-between align-middle items-center"}>
        <>
          <div>
            <img src={largelogo} alt='' className='h-[40px]' />
          </div>
          <div className='flex gap-4'>
            <Button 
              styleVariant='secondary'
              className='!border-0 text-white !bg-gray-700 !hover:bg-gray-600 !text-[13px]'
              leftIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.2" d="M22.4998 12.75V15H5.72416C5.07905 15 4.45111 14.7921 3.93351 14.4071C3.4159 14.022 3.0362 13.4804 2.85073 12.8625L1.53166 8.46563C1.49805 8.35365 1.49108 8.23537 1.51131 8.12022C1.53154 8.00507 1.57841 7.89625 1.64818 7.80243C1.71795 7.70862 1.80868 7.63242 1.91314 7.57991C2.01759 7.5274 2.13288 7.50003 2.24979 7.5H2.99979L5.24979 9.75H8.7101L7.53916 6.23719C7.5016 6.12452 7.49134 6.00454 7.50921 5.88712C7.52709 5.76971 7.57259 5.65822 7.64198 5.56183C7.71136 5.46544 7.80265 5.38691 7.90832 5.3327C8.01399 5.27848 8.13102 5.25014 8.24979 5.25H8.99979L13.4998 9.75H19.4998C20.2954 9.75 21.0585 10.0661 21.6211 10.6287C22.1837 11.1913 22.4998 11.9544 22.4998 12.75Z" fill="white"/>
                  <path d="M21.0006 20.25C21.0006 20.4489 20.9216 20.6397 20.7809 20.7803C20.6403 20.921 20.4495 21 20.2506 21H6.7506C6.55168 21 6.36092 20.921 6.22026 20.7803C6.07961 20.6397 6.00059 20.4489 6.0006 20.25C6.00059 20.0511 6.07961 19.8603 6.22026 19.7197C6.36092 19.579 6.55168 19.5 6.7506 19.5H20.2506C20.4495 19.5 20.6403 19.579 20.7809 19.7197C20.9216 19.8603 21.0006 20.0511 21.0006 20.25ZM23.2506 12.75V15C23.2506 15.1989 23.1716 15.3897 23.0309 15.5303C22.8903 15.671 22.6995 15.75 22.5006 15.75H5.72591C4.91851 15.7537 4.13175 15.4951 3.48402 15.013C2.8363 14.531 2.36264 13.8516 2.13434 13.0772L0.815282 8.68125C0.748081 8.45737 0.734129 8.22089 0.774541 7.99067C0.814952 7.76044 0.908608 7.54285 1.04804 7.35524C1.18747 7.16764 1.36881 7.01521 1.5776 6.91013C1.78639 6.80505 2.01685 6.75021 2.25059 6.75H3.0006C3.19924 6.75009 3.38974 6.82899 3.53028 6.96938L5.56184 9H7.67028L6.82653 6.47438C6.75134 6.24881 6.73084 6.0086 6.76674 5.77355C6.80263 5.53851 6.89389 5.31537 7.03298 5.12252C7.17207 4.92968 7.35501 4.77267 7.56672 4.66443C7.77842 4.55619 8.01283 4.49983 8.2506 4.5H9.0006C9.09912 4.49992 9.19669 4.51926 9.28773 4.5569C9.37878 4.59454 9.46152 4.64975 9.53122 4.71938L13.8118 9H19.5006C20.4952 9 21.449 9.39509 22.1522 10.0984C22.8555 10.8016 23.2506 11.7554 23.2506 12.75ZM21.7506 12.75C21.7506 12.1533 21.5135 11.581 21.0916 11.159C20.6696 10.7371 20.0973 10.5 19.5006 10.5H13.5006C13.3019 10.4999 13.1115 10.421 12.9709 10.2806L8.69028 6H8.2506L9.42153 9.51281C9.45909 9.62548 9.46936 9.74546 9.45148 9.86288C9.43361 9.98029 9.38811 10.0918 9.31872 10.1882C9.24933 10.2846 9.15805 10.3631 9.05238 10.4173C8.94671 10.4715 8.82967 10.4999 8.71091 10.5H5.2506C5.15207 10.5001 5.0545 10.4807 4.96346 10.4431C4.87241 10.4055 4.78967 10.3503 4.71997 10.2806L2.69028 8.25H2.25059L3.56966 12.6469C3.7068 13.1117 3.99123 13.5193 4.38013 13.8084C4.76902 14.0976 5.24132 14.2525 5.72591 14.25H21.7506V12.75Z" fill="white"/>
                </svg>
              }>
              پذیرش پرونده
            </Button>
            <Button 
              styleVariant='primary'  
              className=' !text-[13px]' 
              leftIcon={<img src={ph_chat} className='w-[20px]' alt=''/>}>
              درخواست مشاوره  
            </Button>
          </div>
        </>
      </MainContainer>
    </div>
  )
}

export default Header