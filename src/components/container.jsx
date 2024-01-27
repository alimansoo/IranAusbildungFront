import React from 'react';

function MainContainer({ children, className }) {
  return (
    <div className={`container max-w-[1500px] w-[88%] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default MainContainer