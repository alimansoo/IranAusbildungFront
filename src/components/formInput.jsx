import React from "react";

const FormInput = (
    {
      label, 
      placeholder, 
      id, 
      className='',
      type='text'
    }
  ) => {

  return (
    <div className='flex w-full flex-col items-start gap-2'>
      <label htmlFor={id} className='text-[0.9rem] text-gray-700'>{label}</label>
      <input 
        id={id}
        type={type}
        className={`bg-gray-100 px-4 py-3 border border-gray-200 placeholder:text-gray-400 rounded-lg w-full text-[0.8rem] outline-none ${className}`}
        placeholder={placeholder} />
    </div>
  )
}

export default FormInput;