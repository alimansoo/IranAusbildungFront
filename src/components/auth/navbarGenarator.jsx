import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavbarGenerator({ items }) {
  const location = useLocation();

  const currentUrl = location.pathname;

  return (
    <ul className='flex flex-row gap-12 text-dark'>
      {
        items.map((value) => {
          return (
          <li 
            className={`group inline-flex relative top-[100%] items-center gap-2 `}>
              <Link to={value.link}>
                <div className={`
                  group-hover:text-primary-default
                  text-[15px] hover:underline underline-offset-8 cursor-pointer 
                  ${currentUrl === value.link ? 'text-primary-default':''}
                `}>
                  {value.title}
                </div>
              </Link>
              {
                value.subs ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="6" viewBox="0 0 13 6" fill="none">
                      <path d="M6.49979 5.57149C6.44651 5.57218 6.39369 5.56109 6.34471 5.53895C6.29574 5.5168 6.2517 5.48409 6.21543 5.44292L2.55937 1.58578C2.39688 1.41435 2.39688 1.14863 2.55937 0.977204C2.72186 0.805776 2.97372 0.805776 3.13621 0.977204L6.50791 4.53435L9.87149 0.985776C10.034 0.814347 10.2858 0.814347 10.4483 0.985776C10.6108 1.1572 10.6108 1.42292 10.4483 1.59435L6.79227 5.45149C6.71103 5.5372 6.60541 5.58006 6.50791 5.58006L6.49979 5.57149Z" fill="#1D1E22"/>
                    </svg>
                    <ul className='hidden group-hover:block duration-1000 ease-in-out bg-white left-1/2 -translate-x-1/2 absolute border border-gray-200 rounded-xl top-[100%] w-max px-4 py-1 z-50'>
                      {value.subs.map((value) => {
                        return (
                          <li className='border-b border-gray-100 last:border-b-0 py-3 text-[14px]'>
                            <Link to={value.link}>
                              {value.title}
                            </Link>
                          </li>)
                      })}
                    </ul>
                    
                  </>
                ): ''
              }
          </li>)
        })
      }
    </ul>
  )
}

export default NavbarGenerator