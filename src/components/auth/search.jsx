import React from 'react';
import carbonsearch from './../../icons/carbon_search.svg'

function Search() {
  return (
    <div className='relative'>
      <input type="text" className='bg-gray-200 w-[250px] h-[40px] text-right px-3 outline-none rounded-md text-dark text-xs' placeholder='جستجو کنید...' />
      <span className='absolute top-1/2 left-2 transform -translate-y-1/2'>
        <img src={carbonsearch} alt="جستجو کنید..." />
        </span>
    </div>
  )
}

export default Search