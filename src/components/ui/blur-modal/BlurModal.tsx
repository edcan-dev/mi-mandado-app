import React from 'react'

export const  BlurModal = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='w-full h-svh backdrop-blur fixed top-0 left-0 flex items-center justify-center'>
      
      { children }

    </div>
  );
}