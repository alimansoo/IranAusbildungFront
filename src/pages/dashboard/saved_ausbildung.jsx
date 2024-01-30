import React from 'react'
import Index from './layout'
import Card from '../../components/card'

const SavedAusbildung = () => {
  return (
    <Index content={
      <>
        <section className="w-full bg-white rounded-xl">
          
          <div className="w-full flex flex-row border-b border-gray-200 p-4 px-6 justify-between">
            <div className="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M20.8727 23.9978C20.4963 23.9978 20.1363 23.893 19.7927 23.6833L14.4091 20.2943C14.2819 20.217 14.1381 20.1763 13.9918 20.1763C13.8455 20.1763 13.7017 20.217 13.5745 20.2943L8.1909 23.6833C7.52 24.1026 6.73454 24.1026 6.06363 23.7008C5.39273 23.299 5 22.5479 5 21.7268V5.62036C5 4.17043 6.09636 3 7.45454 3H20.5454C21.9036 3 23 4.17043 23 5.62036V21.7268C23.0015 22.024 22.948 22.3186 22.8427 22.5937C22.7373 22.8689 22.5822 23.1191 22.3861 23.33C22.19 23.541 21.9568 23.7086 21.6999 23.8232C21.443 23.9378 21.1675 23.9971 20.8891 23.9978H20.8727ZM14 18.4077C14.4254 18.4077 14.8673 18.53 15.2436 18.7745L20.6272 22.1635C20.84 22.3033 21.0363 22.2159 21.1182 22.1635C21.2 22.1111 21.3636 21.9888 21.3636 21.7093V5.62036C21.3636 5.13122 21.0036 4.7469 20.5454 4.7469H7.45454C6.99636 4.7469 6.63636 5.13122 6.63636 5.62036V21.7268C6.63636 22.0063 6.8 22.1286 6.88182 22.181C6.96363 22.2334 7.14363 22.3208 7.37272 22.181L12.7563 18.792C13.1491 18.5474 13.5745 18.4252 14 18.4252V18.4077Z" fill="black"/>
              </svg>
              <p className='text-[18px]'>آوسبیلدونگ های ذخیره شده </p>
            </div>
            <div></div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center py-10 px-12">
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
            <Card isSmall className={'border-0 shadow-lg'}/>
          </div>
        </section>
        
      </>
    } />
  )
}

export default SavedAusbildung