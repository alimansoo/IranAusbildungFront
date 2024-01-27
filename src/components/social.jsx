import React from "react";
import bg_texture from '../images/bgtexture.png'
import mdi_instagram from '../icons/mdi_instagram.svg'
import basil_twitter from '../icons/basil_twitter-outline.svg'
import iconoir_telegram from '../icons/iconoir_telegram.svg'

const Social = () => {
  return (
    <div className='relative w-full'>
      <img src={bg_texture} className='bg-primary-default w-full rounded-xl' alt='' />
      <div className='absolute top-0 right-0 left-0 bottom-0 flex flex-row justify-between items-center px-12'>
        <div className='text-white text-2xl'>ایران آوسبیلدونگ را در شبکه های اجتماعی دنبال کنید</div>
        <div className='inline-flex gap-5'>
          <div className='bg-white p-2 rounded-md'><img src={basil_twitter} alt='' /></div>
          <div className='bg-white p-2 rounded-md'><img src={iconoir_telegram} alt='' /></div> 
          <div className='bg-white p-2 rounded-md'><img src={mdi_instagram} alt='' /></div>
        </div>
      </div>
    </div>
  )
}

export default Social;