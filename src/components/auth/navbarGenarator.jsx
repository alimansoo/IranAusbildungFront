import React from 'react';

function navbarGenerator({ items }) {
  return (
    <ul className='flex flex-row-reverse gap-7 text-dark'>
      {
        items.map((value) => {
          return <li className='hover:text-primary-default hover:underline underline-offset-8 cursor-pointer'>{value}</li>
        })
      }
    </ul>
  )
}

export default navbarGenerator