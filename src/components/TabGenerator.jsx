import React from 'react'

const TabGenerator = (
  {
    items
  }
) => {
  return (
    <ul className='flex flex-row items-center justify-start border-b gap-0'>
      {
        items.map((value) => {
          return <li className='py-2 px-4 text-[14px] select-none hover:bg-gray-50 cursor-pointer border-b-2 border-transparent hover:border-primary-default'>{value.title}</li>
        })
      }
    </ul>
  )
}

export default TabGenerator