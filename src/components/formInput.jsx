import React from "react";

const FormInput = (
    {label, placeholder, id, className=''}
  ) => {

  return (
    <div className='flex w-full flex-col items-start gap-2'>
      <label htmlFor={id} className=''>{label}</label>
      <input 
        id={id} 
        className={`bg-gray-100 px-4 py-3 border border-gray-200 placeholder:text-gray-400 rounded-xl w-full outline-none ${className}`}
        placeholder={placeholder} />
    </div>
  )
}

export default FormInput;