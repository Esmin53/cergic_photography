import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({children, background_color}: {children: ReactNode, background_color: string | null}) => {
  return (
    <div className={`w-full flex flex-col justify-center items-center z-40 px-3 sm:px-4 
        ${background_color ? `bg-${background_color}` : "bg-transparent"}`}>
        <div className='w-full max-w-7xl'>
            {children}
        </div>
    </div>
  )
}

export default MaxWidthWrapper