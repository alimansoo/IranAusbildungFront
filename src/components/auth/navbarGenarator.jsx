import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavbarGenerator({ items }) {
  const location = useLocation();

  const currentUrl = location.pathname;

  return (
    <ul className='flex flex-row gap-7 text-dark'>
      {
        items.map((value) => {
          return <li className={`hover:text-primary-default text-sm hover:underline underline-offset-8 cursor-pointer ${currentUrl === value.link ? 'text-primary-default':''}`}><Link to={value.link}>{value.title}</Link></li>
        })
      }
    </ul>
  )
}

export default NavbarGenerator