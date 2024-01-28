import React from "react";

const SelectInput = (
    {label, placeholder, id, className=''}
  ) => {

  return (
    <div className='flex w-full flex-col items-start gap-2'>
      <label htmlFor={id} className=''>{label}</label>
      <div className="w-full h-max relative">
        <select 
          id={id} 
          className={`bg-gray-100 appearance-none px-4 py-3 border border-gray-200 placeholder:text-gray-400 rounded-xl w-full outline-none ${className} transition duration-150 ease-in-out`}
          placeholder={placeholder} >
          <option disabled selected value="" className="text-gray-500">{placeholder}</option>
          <option value={'ddd'}>ddd</option>
        </select>
        <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_2_3830)">
              <rect width="24" height="24" rx="3.42857" fill="#E7E7E7"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7064 15.7069C12.5188 15.8943 12.2645 15.9996 11.9994 15.9996C11.7342 15.9996 11.4799 15.8943 11.2924 15.7069L5.63537 10.0499C5.53986 9.95761 5.46367 9.84726 5.41126 9.72526C5.35886 9.60326 5.33127 9.47204 5.33012 9.33926C5.32896 9.20648 5.35426 9.0748 5.40454 8.9519C5.45483 8.829 5.52908 8.71735 5.62297 8.62346C5.71686 8.52957 5.82852 8.45531 5.95141 8.40503C6.07431 8.35475 6.20599 8.32945 6.33877 8.3306C6.47155 8.33176 6.60277 8.35934 6.72477 8.41175C6.84677 8.46416 6.95712 8.54034 7.04937 8.63585L11.9994 13.5859L16.9494 8.63585C17.138 8.4537 17.3906 8.3529 17.6528 8.35518C17.915 8.35746 18.1658 8.46263 18.3512 8.64804C18.5366 8.83344 18.6418 9.08426 18.644 9.34645C18.6463 9.60865 18.5455 9.86125 18.3634 10.0499L12.7064 15.7069Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_2_3830">
                <rect width="24" height="24" rx="3.42857" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SelectInput;